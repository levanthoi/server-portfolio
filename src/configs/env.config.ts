import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  PORT: process.env.PORT || 8080,
  GH_TOKEN: process.env.GH_TOKEN || '',
  API_GITHUB_REPO: process.env.API_GITHUB_REPO || '',
};
