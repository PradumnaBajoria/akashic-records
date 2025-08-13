import crypto from 'crypto';

export function base64URLEncode(str: Buffer) {
  return str.toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

export function sha256(buffer: Buffer) {
  return crypto.createHash('sha256').update(buffer).digest();
}

export function generatePKCECodes() {
  const verifier = base64URLEncode(crypto.randomBytes(32));
  const challenge = base64URLEncode(sha256(Buffer.from(verifier)));
  return { verifier, challenge };
}