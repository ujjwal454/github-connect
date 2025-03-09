import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateIssueDto } from './dto/issues.dto';

type RepoNameSelector = {
  repoName: string;
};

@Controller('github')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGithub() {
    return this.appService.getGithub();
  }

  @Get(':repoName')
  getRepo(@Param() param: RepoNameSelector) {
    return this.appService.getRepoByName(param.repoName);
  }

  @Post(':repoName/issues')
  postIssue(@Param() param: RepoNameSelector, @Body() body: CreateIssueDto) {
    return this.appService.postIssueInRepoByName(param.repoName, body);
  }
}
