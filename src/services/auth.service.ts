import { IUser } from '@interfaces/user.interface';
import User from '@models/user.model';

export const singupService = async (body: IUser) => {
  const { email } = body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    throw new Error('Tài khoản đã tồn tại.');
  }
  const newUser = await User.create(body);
  return newUser;
};
