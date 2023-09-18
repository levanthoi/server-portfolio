import { uploadFile } from '@middlewares/cloudinary';
import Upload from '@models/upload.model';

export const uploadService = async (files: Express.Multer.File[]) => {
  const folderName = 'Global';
  const filePromise = files?.map(file => uploadFile(file, folderName));
  const fileResult = await Promise.all(filePromise);
  return fileResult;
  // const result = await Promise.all(
  //   files.map(async file => {
  //     const res = await uploadFile(file, folderName);
  //     await Upload.create({
  //       url: res.secure_url,
  //       uid: res.public_id,
  //       folder: res.folder,
  //     });
  //   }),
  // );
  // return result;
};

export const getFileSerVice = async (folder: string) => {
  const res = await Upload.find({ folder });
  return res;
};
