export enum REQUEST_STATE {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  INIT = "INIT",
}

export interface Repo {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export interface RepoReducerState {
  state: REQUEST_STATE;
  error: string;
  searchValue: string;
  empty: boolean;
  repos: Repo[];
  total_count: number;
}

export interface Issue {
  id: number;
  number: number;
  updated_at: string;
  title: string;
  comments: number;
  html_url: string;
  labels: { name: string; color: string };
  user: { login: string; avatar_url: string };
}

export interface IssueReducerState {
  state: REQUEST_STATE;
  error: string;
  issues: Issue[];
}
