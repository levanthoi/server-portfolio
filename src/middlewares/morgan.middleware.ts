import { Request, Response } from 'express';
import morgan from 'morgan';

import { logger } from '@configs/logger.config';

morgan.token('message', (req: Request, res: Response) => res.locals.message || '');

const getIpFormat = () => (process.env.NODE_ENV === 'production' ? ':remote-addr - ' : '');
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

export const successMorgan = morgan(successResponseFormat, {
  skip: (req, res) => res.statusCode >= 400,
  stream: { write: (message: string) => logger.info(message.trim()) },
});

export const errorMorgan = morgan(errorResponseFormat, {
  skip: (req, res) => res.statusCode < 400,
  stream: { write: (message: string) => logger.error(message.trim()) },
});

// const successMorgan = morgan()
