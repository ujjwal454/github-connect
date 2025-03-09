import { Injectable, Logger } from '@nestjs/common';
import { githubApi } from './github-api-client';
import { config } from './config';
import { CreateIssueDto } from './dto/issues.dto';

@Injectable()
export class AppService {
  logger = new Logger();

  getGithub = async () => {
    const { data: fetchUserData } = await githubApi.get(
      `/users/${config.username}`,
    );
    const { data: fetchedreposData } = await githubApi.get(
      `/users/${config.username}/repos`,
    );
    const userData = {
      name: fetchUserData?.name,
      userName: config.username,
      followers: fetchUserData?.followers,
      following: fetchUserData?.following,
    };

    let repoData: Array<any> = [];

    for (let key in fetchedreposData) {
      let value = fetchedreposData[key];
      repoData.push({
        name: value.name,
        description: value.description,
        url: value.html_url,
      });
    }

    return { ...userData, repositories: repoData };
  };

  async getRepoByName(repo: string) {
    const { data: fetchedRepoData } = await githubApi.get(
      `/repos/${config.username}/${repo}`,
    );
    return fetchedRepoData;
  }

  async postIssueInRepoByName(repo: string, data: CreateIssueDto) {
    const { data: response } = await githubApi.post(
      `/repos/${config.username}/${repo}/issues`,
      data,
    );

    return response?.html_url;
  }
}
