import { ICustomRes } from '@interfaces/custom.interface';
import { IUser } from '@interfaces/user.interface';
import { singupService } from '@services/auth.service';
import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

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
