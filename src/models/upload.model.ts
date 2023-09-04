import mongoose, { Schema } from 'mongoose';

const uploadSchema = new Schema({
  url: {
    type: String,
  },
  uid: {
    type: String,
  },
  folder: {
    type: String,
  },
});

const Upload = mongoose.model('Upload', uploadSchema);

export default Upload;
