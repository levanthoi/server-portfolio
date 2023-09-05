import { IUser } from '@interfaces/user.interface';
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUserDocument extends Document, IUser {
  isPasswordMatched(password: string): Promise<boolean>;
}

const UserSchema: Schema<IUserDocument> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Vui lòng điền tên'],
    },
    email: {
      type: String,
      required: [true, 'Vui lòng điền Email'],
      trim: true,
      unique: true,
      lowercase: true,
      maxlength: [128, 'Tài khoản nhiều nhất có 128 kí tự'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Vui lòng điền email hợp lệ',
      ],
    },
    password: {
      type: String,
      required: [true, 'Vui lòng điền mật khẩu'],
      minlength: [6, 'Mật khẩu ít nhất có 6 kí tự'],
      trim: true,
    },
    confirmPassword: {
      type: String,
      required: [true, 'Vui lòng xác nhận mật khẩu'],
      minlength: [6, 'Mật khẩu ít nhất có 6 kí tự'],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  // eslint disabled @typescript-eslint/no-this-alias
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    user.confirmPassword = hash;
  }
  next();
});

UserSchema.methods.isPasswordMatched = async function (pw: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(pw, this.password);
  return isMatch;
};

const User = mongoose.model<IUserDocument>('User', UserSchema);

export default User;
