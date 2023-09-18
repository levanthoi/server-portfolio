import express, { RequestHandler } from 'express';

import {
  deleteUpload,
  getResourcesUpload,
  getRootFoldersUpload,
  postUpload,
} from '@controllers/upload.controller';
import { auth } from '@middlewares/auth.middleware';
import upload from '@middlewares/multer';

const router = express.Router();

router.get('/root-folder', getRootFoldersUpload);
router.get('/resources', getResourcesUpload);
router.post('/', auth, upload.array('images'), postUpload);
router.delete('/(*):id', auth, deleteUpload);

export default router;
