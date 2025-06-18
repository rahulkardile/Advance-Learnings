import { Router } from 'express';
import { register, login, protectedRoute } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', verifyToken, protectedRoute);

export default router;
