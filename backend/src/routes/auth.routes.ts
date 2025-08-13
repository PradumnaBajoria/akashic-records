import { Router } from 'express';
import { startMalLogin, malCallback } from '../controllers/auth.controller';

const router = Router();
router.get('/mal/login', startMalLogin);
router.get('/mal/callback', malCallback);

export default router;