import { logger } from '@configs/logger.config';
import { getProjectsService } from '@services/project.service';
import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

export const getProjects = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await getProjectsService();

    // const projects = await repositories.json();
    console.log('project controller');

    res.json({
      data: projects,
      message: 'Danh sách dự án đã được lấy thành công',
      success: true,
      totalPage: projects.length || 0,
    });
  } catch (error: any) {
    // throw new Error(error);
    console.log('err project', error);
    next(error);
  }
});

// export const getProjects = async (req: Request, res: Response) => {
//   try {
//     // await getProjectsService();
//     res.json({
//       // data: await getProjectsService(),
//       message: 'Danh sách dự án đã được lấy thành công',
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
