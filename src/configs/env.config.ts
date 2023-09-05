import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  PORT: process.env.PORT || 8080,
  MONGODB: process.env.MONGODB || '',
  PASSWORD: process.env.PASSWORD || '',
  GH_TOKEN: process.env.GH_TOKEN || '',
  API_GITHUB_REPO: process.env.API_GITHUB_REPO || '',
  API_GITHUB_REPO_2: process.env.API_GITHUB_REPO_2 || '',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',
  CLOUDINARY_FOLDER: process.env.CLOUDINARY_FOLDER || '',
  JWT_SECRET_ACCESSTOKEN: process.env.JWT_SECRET_ACCESSTOKEN || '',
  JWT_SECRET_REFRESHTOKEN: process.env.JWT_SECRET_REFRESHTOKEN || '',
};
