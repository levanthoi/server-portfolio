export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt?: string;
  updatedAt?: string;
}
