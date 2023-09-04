import {
  getResourcesUpload,
  getRootFoldersUpload,
  postUpload,
} from '@controllers/upload.controller';
import upload from '@middlewares/multer';
import express from 'express';

const router = express.Router();

router.get('/root-folder', getRootFoldersUpload);
router.get('/resources', getResourcesUpload);
router.post('/', upload.array('images'), postUpload);

export default router;
