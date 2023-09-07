import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { getProjectsService } from '@services/project.service';

export const getProjects = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log('user', req.user);

    const projects = await getProjectsService(req.query);
    console.log('project', projects);

    // const projects = await repositories.json();

    res.json({
      data: projects,
      message: 'Danh sách dự án đã được lấy thành công',
      success: true,
    });
  } catch (error: any) {
    console.log('khong call dc');

    // throw new Error(error);
    next(error);
  }
});
