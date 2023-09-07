import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { IRequestBody } from '@interfaces/custom.interface';
import { IUser } from '@interfaces/user.interface';
import { getProjectsService } from '@services/project.service';

export const getProjects = asyncHandler(
  async (req: IRequestBody<IUser>, res: Response, next: NextFunction) => {
    try {
      // console.log('user', req.user);

      const projects = await getProjectsService(req.query);

      // const projects = await repositories.json();

      res.json({
        data: projects,
        message: 'Danh sách dự án đã được lấy thành công',
        success: true,
      });
    } catch (error: any) {
      // throw new Error(error);
      next(error);
    }
  },
);
