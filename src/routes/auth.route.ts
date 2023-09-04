import { singup } from '@controllers/auth.controller';
import express from 'express';

const router = express.Router();

router.post('/signup', singup);

export default router;
