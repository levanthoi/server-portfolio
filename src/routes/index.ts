import express from 'express';

import authRoute from '@routes/auth.route';
import blogRoute from '@routes/blog.route';
import projectRoute from '@routes/project.route';
import uploadRoute from '@routes/upload.route';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/blogs', blogRoute);
router.use('/projects', projectRoute);
router.use('/upload', uploadRoute);

export default router;
