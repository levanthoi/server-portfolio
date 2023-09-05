import { login, singup } from '@controllers/auth.controller';
import express from 'express';

const router = express.Router();

router.post('/signup', singup);
router.post('/login', login);

export default router;
