import express from 'express';

import { getProjects } from '@controllers/project.controller';
import { auth } from '@middlewares/auth.middleware';

const router = express.Router();

router.get('/', getProjects);

export default router;
