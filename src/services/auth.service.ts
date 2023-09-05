import { IUser } from '@interfaces/user.interface';
import User from '@models/user.model';
import { generateAuthToken } from '@utils/tokens';

/**
 *
 * @param body
 * @returns
 */
export const singupService = async (body: IUser) => {
  const { email } = body;
  const findUser = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
  if (findUser) {
    throw new Error('Tài khoản đã tồn tại.');
  }
  const newUser = await User.create(body);
  return newUser;
};

export const loginService = async (body: IUser) => {
  const { email, password } = body;
  const findUser = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const tokens = await generateAuthToken(findUser._id);
    return tokens;
  } else {
    throw new Error('Tài khoản hoặc mật khẩu sai.');
  }
};
