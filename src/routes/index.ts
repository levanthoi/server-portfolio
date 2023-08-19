import express from 'express';
import blogRoute from '@routes/blog.route';
import projectRoute from '@routes/project.route';

const router = express.Router();

router.use('/blogs', blogRoute);
router.use('/projects', projectRoute);

export default router;
