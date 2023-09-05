import { Schema } from 'mongoose';

export interface IAuth extends Document {
  accessToken: string;
  refreshToken: string;
  userId?: Schema.Types.ObjectId;
  createdAt?: string;
  updatedAt?: string;
}
