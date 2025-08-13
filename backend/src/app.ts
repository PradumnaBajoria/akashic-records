import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => res.json({ ok: true, msg: 'backend up' }));

export default app;