import mongoose, { Schema } from 'mongoose';

const authSchema = new Schema({
  accessToken: String,
  refreshToken: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Auth = mongoose.model('Auth', authSchema);

export default Auth;
