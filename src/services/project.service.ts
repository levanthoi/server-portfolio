import axios from 'axios';

import { envConfig } from '@configs/env.config';
import {
  IContributors,
  IProject,
  ITrafficClone,
  ITrafficView,
} from '@interfaces/project.interface';

/**
 * @description: Get List Contributors of Repository
 * @param owner : String
 * @param repo  : String
 * @returns
 */
const getContributors = async (owner: string, repo: string) => {
  const response = await axios.get(`${envConfig.API_GITHUB_REPO_2}/${owner}/${repo}/contributors`, {
    headers: {
      Authorization: `token ${envConfig.GH_TOKEN}`,
    },
  });
  if (response?.data?.length > 0) {
    const contributors: IContributors[] = response?.data?.map((contributor: IContributors) => {
      const { id, login, html_url: html, avatar_url: avt } = contributor;
      return {
        id,
        login,
        html_url: html,
        avatar_url: avt,
      };
    });
    return contributors;
  }
  return [];
};

/**
 *
 * @param owner
 * @param repo
 * @returns
 */

const getRepoTrafficClones = async (owner: string, repo: string) => {
  const response = await axios.get(
    `${envConfig.API_GITHUB_REPO_2}/${owner}/${repo}/traffic/clones`,
    {
      headers: {
        Authorization: `Bearer ${envConfig.GH_TOKEN}`,
      },
    },
  );
  const { count, uniques } = response.data;
  const trafficClones: ITrafficClone = {
    count,
    uniques,
  };
  return trafficClones;
};
/**
 *
 * @param owner
 * @param repo
 * @returns
 */

const getRepoTrafficViews = async (owner: string, repo: string) => {
  const response = await axios.get(
    `${envConfig.API_GITHUB_REPO_2}/${owner}/${repo}/traffic/views`,
    {
      headers: {
        Authorization: `Bearer ${envConfig.GH_TOKEN}`,
      },
    },
  );
  const { count, uniques } = response.data;
  const trafficViews: ITrafficView = {
    count,
    uniques,
  };
  return trafficViews;
};
/**
 *
 * @param owner
 * @param repo
 * @returns
 */

const getRepoLanguages = async (owner: string, repo: string) => {
  const response = await axios.get(`${envConfig.API_GITHUB_REPO_2}/${owner}/${repo}/languages`, {
    headers: {
      Authorization: `Bearer ${envConfig.GH_TOKEN}`,
    },
  });
  return response.data;
};

export const getProjectsService = async () => {
  const response = await axios.get(envConfig.API_GITHUB_REPO, {
    headers: { Authorization: `token ${envConfig.GH_TOKEN}` },
  });
  const { data } = response;

  const repositories = data?.filter((item: any) => item.fork === false);

  const projects: IProject[] = await Promise.all(
    repositories.map(async (repo: any) => {
      const {
        owner,
        name,
        id,
        html_url: html,
        visibility,
        description,
        license,
        topics,
        forks,
        stargazers_count: count,
        created_at: created,
        updated_at: updated,
      } = repo;

      // Promise
      const contributorsPromise = getContributors(owner.login, name);
      const trafficClonesPromise = getRepoTrafficClones(owner.login, name);
      const trafficViewsPromise = getRepoTrafficViews(owner.login, name);
      const languagesPromise = getRepoLanguages(owner.login, name);
      // Xu ly promise
      const [contributors, trafficClones, trafficViews, languages] = await Promise.all([
        contributorsPromise,
        trafficClonesPromise,
        trafficViewsPromise,
        languagesPromise,
      ]);
      return {
        id,
        name,
        visibility,
        html_url: html,
        description,
        license,
        topics,
        forks,
        stargazers_count: count,
        contributors,
        trafficClones,
        trafficViews,
        languages,
        created_at: created,
        updated_at: updated,
      };
    }),
  );
  console.log('project service');
  return projects;
};
