import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  baseUrl: process.env.baseUrl,
  accessToken: process.env.accessToken,
  username: process.env.githubUsername,
};
