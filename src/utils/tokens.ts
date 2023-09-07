import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

import { envConfig } from '@configs/env.config';
import Auth from '@models/auth.model';

export const generateToken = (id: Types.ObjectId) =>
  jwt.sign({ id }, envConfig.JWT_SECRET_ACCESSTOKEN, { expiresIn: '1d' });

export const generateRefreshToken = (id: Types.ObjectId) =>
  jwt.sign({ id }, envConfig.JWT_SECRET_REFRESHTOKEN, { expiresIn: '3d' });

export const generateAuthToken = async (userId: Types.ObjectId) => {
  const accessToken = generateToken(userId);
  const refreshToken = generateRefreshToken(userId);

  await Auth.create({
    accessToken,
    refreshToken,
    userId,
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const verify = (token: string) => {
  const x = jwt.verify(token, envConfig.JWT_SECRET_ACCESSTOKEN);
  return x;
};
