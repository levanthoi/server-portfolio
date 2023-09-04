import express from 'express';
import blogRoute from '@routes/blog.route';
import projectRoute from '@routes/project.route';
import uploadRoute from '@routes/upload.route';
import authRoute from '@routes/auth.route';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/blogs', blogRoute);
router.use('/projects', projectRoute);
router.use('/upload', uploadRoute);

export default router;
