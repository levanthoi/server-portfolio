export interface ICustomRes<T> extends Response {
  data: Array<T>;
  success: boolean;
  message: string;
}
