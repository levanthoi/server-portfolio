// import { IRequestBody } from '@interfaces/custom.interface';
import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

import { IRequest } from '@interfaces/custom.interface';
import { destroyFile, getResources, getRootFolders } from '@middlewares/cloudinary';
import { getFileSerVice, uploadService } from '@services/upload.service';

export const postUpload = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log('post Upload');
      const files = req.files as Express.Multer.File[] | undefined;

      if (!files) {
        throw new Error('No files were uploaded');
      }
      const images = await uploadService(files);
      // await Upload.create()
      res.json({
        images,
        message: 'success',
      });
    } catch (error: any) {
      next(error);
    }
  },
);
export const deleteUpload = expressAsyncHandler(
  async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log(req.params);
      const { id } = req.params;

      const images = await destroyFile(id);
      res.json({
        images,
        message: 'Xóa thành công',
        success: true,
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
