import { logger } from '@configs/logger.config';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const isDev = process.env.NODE_ENV === 'development';

// const errorDev: ErrorRequestHandler = async (err, req: Request, res: Response) => {
//   const statusCode = err.statusCode || '500';
//   console.log('err', statusCode);
//   res.status(statusCode).json({
//     succees: false,
//     message: '',
//     stack: err?.stack || '',
//   });
// };

// not found
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log('err', statusCode);

  // Logger
  if (!isDev) {
    logger.error('ERROR ', err);
  }

  res.status(statusCode).json({
    succees: false,
    message: err.message,
    stack: isDev ? err?.stack : '',
  });
};
