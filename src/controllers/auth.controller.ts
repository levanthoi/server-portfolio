import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

import { ICustomRes } from '@interfaces/custom.interface';
import { IAuth } from '@interfaces/token.interface';
import { IUser } from '@interfaces/user.interface';
import { loginService, singupService } from '@services/auth.service';

export const singup = expressAsyncHandler(
  async (req: Request, res: Response<ICustomRes<IUser>>, next: NextFunction) => {
    const result = await singupService(req.body);
    res.json({
      data: result,
      message: 'Đăng kí thành công',
      success: true,
    });
  },
);
export const login = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await loginService(req.body);
      res.json({
        data: result,
        message: 'Đăng nhập thành công thành công',
        success: true,
      });
    } catch (err) {
      next(err);
    }
  },
);
