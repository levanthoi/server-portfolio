import { envConfig } from '@configs/env.config';
import axios from 'axios';

export const getProjectsService = async () => {
  const response = await axios.get(envConfig.API_GITHUB_REPO, {
    headers: { Authorization: 'token ' + envConfig.GH_TOKEN },
  });
  const { data } = response;

  const projects = data?.filter((item: any) => item.fork === false);
  return projects;
};
