import { NextFunction, Request, Response } from 'express';

export const getBlogs = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: 'success',
  });
};
