import { NextFunction, Request, Response } from 'express';

import { logger } from '@configs/logger.config';

export const getBlogs = (req: Request, res: Response, next: NextFunction) => {
  logger.info(' ===== Checking API ======');
  res.json({});
};
