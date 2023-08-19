import { getProjects } from '@controllers/project.controller';
import express from 'express';

const router = express.Router();

router.get('/', getProjects);

export default router;
