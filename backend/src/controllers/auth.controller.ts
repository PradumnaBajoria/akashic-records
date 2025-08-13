import { Request, Response } from 'express';
import axios from 'axios';
import { generatePKCECodes } from '../utils/pkce.util';
import User from '../models/user.model';

interface TokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token?: string;
}

export async function startMalLogin(req: Request, res: Response) {
  // generate PKCE and save verifier in a simple in-memory store keyed by state for demo
  const { verifier, challenge } = generatePKCECodes();
  const state = Math.random().toString(36).slice(2);
  // In production, store verifier on server-side (session or DB) and bind to user/state
  (global as any)._pkceStore = (global as any)._pkceStore || {};
  (global as any)._pkceStore[state] = verifier;

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.MAL_CLIENT_ID!,
    redirect_uri: process.env.MAL_REDIRECT_URI!,
    code_challenge: challenge,
    code_challenge_method: 'S256',
    state
  });

  const url = `https://myanimelist.net/v1/oauth2/authorize?${params.toString()}`;
  res.json({ url });
}

export async function malCallback(req: Request, res: Response) {
  const { code, state } = req.query as any;
  const pkceStore = (global as any)._pkceStore || {};
  const verifier = pkceStore[state];
  if (!verifier) return res.status(400).json({ error: 'invalid_state' });

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: process.env.MAL_CLIENT_ID!,
    client_secret: process.env.MAL_CLIENT_SECRET || '',
    code: code as string,
    redirect_uri: process.env.MAL_REDIRECT_URI!,
    code_verifier: verifier
  });

  try {
    const tokenRes = await axios.post<TokenResponse>('https://myanimelist.net/v1/oauth2/token', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
    // simple user creation/update demo
    let user = await User.findOne({ username: 'demo' });
    if (!user) user = new User({ username: 'demo' });
    user.mal = {
      accessToken: tokenRes.data.access_token,
      refreshToken: tokenRes.data.refresh_token,
      expiresAt: new Date(Date.now() + (tokenRes.data.expires_in * 1000))
    };
    await user.save();

    res.json({ ok: true, tokens: tokenRes.data });
  } catch (err: any) {
    console.error('token exchange failed', err?.response?.data || err.message);
    res.status(500).json({ error: 'token_exchange_failed', detail: err?.response?.data || err.message });
  }
}