 Project Overview

This project is a NestJS-based API that connects to the GitHub API to fetch and display your GitHub activity. It allows you to:

Retrieve general GitHub account details like followers, following, and repositories.

Fetch details about a specific repository.

Create an issue in a repository via API request.

Endpoints 

Get/github  

returns the user data , reposetories 

Get/github/repo_name 

returns data of the particular repository 

Post/github/repo_name/issues 

accepts Body 
{
"body":"string",
"title": "string"
}

create's the issues in the repository which repo_name was provided and returns the issue URL
