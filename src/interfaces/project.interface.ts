export interface IContributors {
  id: string;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface ITrafficClone {
  count: number;
  uniques: number;
}
export interface ITrafficView {
  count: number;
  uniques: number;
}

export interface ILanguage {
  [key: string]: number;
}

export interface IProject {
  _id: string;
  id: number;
  name: string;
  visibility: string;
  html_url: string;
  description: string;
  license: string;
  topics: string[];
  forks: number;
  stargazers_count: number;
  contributors: IContributors[];
  trafficViews: ITrafficView;
  trafficClones: ITrafficClone;
  languages: ILanguage;
  created_at: Date;
  updated_at: Date;
}

export interface IParams {
  visibility?: string;
  per_page?: number | string;
  page?: number | string;
  sort?: string;
  direction?: string;
}
