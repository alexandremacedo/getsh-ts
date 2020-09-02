<h1 align="center">
  <img alt="getsh" title="getsh" src="../.github/logo.svg" width="200px" />
</h1>

<h3 align="center">
  Getsh server - Api for web and mobile applications
</h3>

<h4 align="center">
  NodeJS + Docker + Celebrate + Rate Limiter Flexible
</h4>
</br>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AlexandreMacedoo/getsh-ts?color=%2304D361">

  <a href="https://github.com/AlexandreMacedoo">
    <img alt="Made by Alexandre" src="https://img.shields.io/badge/made%20by-Alexandre-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/AlexandreMacedoo/getsh-ts/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/AlexandreMacedoo/getsh-ts?style=social">
  </a>
</p>

<p align="center">
  <a href="#how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documentation">Documentation</a>
</p>


# Getsh server
Getsh server is an api for scheduling services build with Node.js

## How to use
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/AlexandreMacedoo/getsh-ts.git

# Go into the repository
$ cd getsh/server

# Install all dependencies
$ yarn

# With docker up
$ docker run --name getsh_postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
$ docker run --name getsh_mongo -p 27017:27017 -d -t mongo
$ docker run --name getsh_redis -p 6379:6379 -d -t redis:alpine

# Start database
$ yarn docker:start

# Running migrations
$ yarn typeorm migration:run

# Start the server
$ yarn dev:server

# Server is running at http://localhost:3333
```

## Endpoints

Method | Endpoint | Controller | Action | Authentication
--- | --- | --- | --- | ---
POST   | /sessions                        | \src\modules\users\infra\http\controllers\SessionController                         | store      | no
POST   | /password/forgot                 | \src\modules\users\infra\http\controllers\ForgotPasswordController                  | store      | no
POST   | /password/reset                  | \src\modules\users\infra\http\controllers\ResetPasswordController                   | store      | no
POST   | /users                           | \src\modules\users\infra\http\controllers\UsersController                           | store      | no
PATCH  | /users/avatar                    | \src\modules\users\infra\http\controllers\UserAvatarController                      | update     | yes
PUT    | /profile                         | \src\modules\users\infra\http\controllers\ProfileController                         | update     | yes
GET    | /profile                         | \src\modules\users\infra\http\controllers\ProfileController                         | list one   | yes


## Documentation
- Soon

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
