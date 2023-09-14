import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { IRequestBody } from '@interfaces/custom.interface';
import { IProject } from '@interfaces/project.interface';
import {
  createProjectsService,
  getProjectService,
  getProjectsService,
  queryProjectsService,
  updateProjectService,
} from '@services/project.service';

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
export const queryProjects = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projects = await queryProjectsService();
      res.json({
        data: projects,
        message: 'Danh sách dự án đã được lấy thành công',
        success: true,
      });
    } catch (error: any) {
      next(error);
    }
  },
);
export const getProject = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = await getProjectService(req);
    res.json({
      data: project,
      message: 'Dự án đã được lấy thành công',
      success: true,
    });
  } catch (error: any) {
    next(error);
  }
});
export const createProjects = asyncHandler(
  async (req: IRequestBody<IProject[]>, res: Response, next: NextFunction) => {
    try {
      // console.log(req.body);

      const projects = await createProjectsService(req.body);
      console.log('project', projects);

      res.json({
        data: projects,
        message: 'Tạo dự án thành công',
        success: true,
      });
    } catch (error: any) {
      next(error);
    }
  },
);
export const updateProject = asyncHandler(
  async (req: IRequestBody<IProject>, res: Response, next: NextFunction) => {
    try {
      const project = await updateProjectService(req.body);

      res.json({
        data: project,
        message: 'Chỉnh sửa dự án thành công',
        success: true,
      });
    } catch (error: any) {
      next(error);
    }
  },
);
