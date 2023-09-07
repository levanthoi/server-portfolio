import { Request } from 'express';

import { IUser } from './user.interface';

export interface ICustomRes<T = null> {
  data: T;
  success: boolean;
  message: string;
}

// interface CustomHeaders extends Headers {
//   authorization?: string;
// }

export interface IRequest extends Request {
  headers: {
    authorization?: string;
  };
  user?: IUser;
}

// export interface IRequestBody<T extends ReadableStream<Uint8Array> | null> extends Request {
//   body: T;
//   user?: IUser;
// }
