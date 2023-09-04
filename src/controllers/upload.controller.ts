// import { IRequestBody } from '@interfaces/custom.interface';
import { getResources, getRootFolders } from '@middlewares/cloudinary';
import { getFileSerVice, uploadService } from '@services/upload.service';
import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

export const postUpload = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log('post Upload');
      const files = req.files as Express.Multer.File[] | undefined;

      if (!files) {
        throw new Error('No files were uploaded');
      }
      await uploadService(files);
      // await Upload.create()
      res.json({
        message: 'success',
      });
    } catch (error: any) {
      next(error);
    }
  },
);

export const getRootFoldersUpload = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const folders = await getRootFolders();
      res.json({
        data: folders,
        message: 'success',
      });
    } catch (error: any) {
      next(error);
    }
  },
);

export const getResourcesUpload = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { folder } = req.body;
      const result = await getFileSerVice(folder);
      res.json({
        data: result,
        message: 'success',
      });
    } catch (error: any) {
      next(error);
    }
  },
);
