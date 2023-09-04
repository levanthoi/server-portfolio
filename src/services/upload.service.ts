import { uploadFile } from '@middlewares/cloudinary';
import Upload from '@models/upload.model';

export const uploadService = async (files: Express.Multer.File[]) => {
  const folderName = 'Global';
  // const filePromise = files?.map((file) => uploadFile(file, folderName));
  // const fileResult = await Promise.all(filePromise)
  for (const file of files) {
    const res = await uploadFile(file, folderName);
    //    const images = {
    //         url: res.secure_url,
    //         uid: res.public_id
    //     }
    await Upload.create({
      url: res.secure_url,
      uid: res.public_id,
      folder: res.folder,
    });
  }
};

export const getFileSerVice = async (folder: string) => {
  const res = await Upload.find({ folder });
  return res;
};
