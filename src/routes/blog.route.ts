import { getBlogs } from '@controllers/blog.controller';
import express from 'express';

const router = express.Router();

router.get('/', getBlogs);

export default router;
