import express from 'express';

import {
  createProjects,
  getProjects,
  updateProject,
  getProject,
  queryProjects,
  removeProject,
} from '@controllers/project.controller';
import { auth } from '@middlewares/auth.middleware';

const router = express.Router();

router.get('/github', getProjects);
router.get('/', queryProjects);
router.get('/:id', getProject);
router.delete('/:id', auth, removeProject);
router.post('/', auth, createProjects);
router.put('/', auth, updateProject);

export default router;
