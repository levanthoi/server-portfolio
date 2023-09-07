import { v2 as cloudinary } from 'cloudinary';

import { envConfig } from '@configs/env.config';
import dataUri from '@utils/datauri';

cloudinary.config({
  cloud_name: envConfig.CLOUDINARY_CLOUD_NAME,
  api_key: envConfig.CLOUDINARY_API_KEY,
  api_secret: envConfig.CLOUDINARY_API_SECRET,
});

const destroyFile = (PublicID: string) => cloudinary.uploader.destroy(PublicID);

const uploadFile = (file: any, folder: string) => {
  const f = dataUri(file).content || '';
  return cloudinary.uploader.upload(f, {
    folder: `${envConfig.CLOUDINARY_FOLDER}/${folder}`,
    format: 'jpeg',
  });
};

// Get root folders
const getRootFolders = () => cloudinary.api.root_folders();

// Get root folders
const getResources = () =>
  cloudinary.api.resources({
    type: 'upload',
    prefix: 'Portfolio',
  });

export { uploadFile, destroyFile, getRootFolders, getResources };
