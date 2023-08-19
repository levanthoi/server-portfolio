import { logger } from '@configs/logger.config';
import { getProjectsService } from '@services/project.service';
import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

export const getProjects = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // try {
  const projects = await getProjectsService();
  res.json({
    data: projects,
    message: 'Danh sách dự án đã được lấy thành công',
    success: true,
  });
  // } catch (error: any) {
  //   throw new Error(error);
  // }
});
