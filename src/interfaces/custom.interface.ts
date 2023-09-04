import { IUser } from './user.interface';

export interface ICustomRes<T = null> {
  data: T;
  success: boolean;
  message: string;
}

// export interface IRequestBody<T extends ReadableStream<Uint8Array> | null> extends Request {
//   body: T;
//   user?: IUser;
// }
