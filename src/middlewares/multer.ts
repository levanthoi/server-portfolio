import { Request } from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();

const limits = {
  fileSize: 1024 * 1024 * 10, // accept files up 10 mgb
};

// fileFilter
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

export default upload;
