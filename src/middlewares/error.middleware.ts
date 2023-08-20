import { logger } from '@configs/logger.config';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const isDev = process.env.NODE_ENV === 'development';

interface StatusError extends Error {
  status?: number;
}

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
  const error = new Error(`Not Found: ${req.originalUrl}`) as StatusError;
  error['status'] = 404;
  next(error);
};

export const errorHandler: ErrorRequestHandler = (
  err: StatusError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err['status'] || 500;

  // Logger
  if (!isDev) {
    logger.error('ERROR ', err);
  }
  console.log(err.message);

  res.status(statusCode).json({
    succees: false,
    message: err.message || 'Internal Server Error',
    stack: isDev ? err?.stack : 'Stack Production',
  });
};
