import axios from 'axios';
import { config } from './config';

export const githubApi = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Authorization: `Bearer ${config.accessToken}`,
    Accept: 'application/vnd.github.v3+json',
  },
});
