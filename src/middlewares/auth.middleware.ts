import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

import { IRequest } from '@interfaces/custom.interface';
import User from '@models/user.model';
import { verify } from '@utils/tokens';

export const auth = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    if (req?.headers?.authorization?.startsWith('Bearer')) {
      const token = req?.headers?.authorization?.split(' ')[1];
      if (token) {
        const decoded = verify(token);
        // console.log(decoded);
        if (typeof decoded === 'string') {
          throw new Error('Invalid token');
        }
        const user = await User.findById(decoded?.id).select('-password -confirmPassword');
        if (user) req.user = user;
        next();
      }
    } else {
      throw new Error('Bạn chưa đăng nhập.');
    }
  } catch (err) {
    next(err);
  }
};

export const isAdmin = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);
