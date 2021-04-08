
# dtmoney
![Badge](https://img.shields.io/badge/dtmoney-Keep%20%20track%20of%20your%20expenses-%237159c1?style=for-the-badge&logo=ghost)

Content Table
=================
<!--ts-->
   * [About](#about)
   * [Requirements](#requirements)
   * [Techstack](#-tech-stack)
<!--te-->

<h4 align="center"> 
  dtmoney 
</h4>

### About
DTMoney is a fully functioning expense tracking WebApp  -  Also See [dtmoney](https://github.com/hanar3/dtmoney)

### Features
- [x] GraphQL API
  - [x] Transaction Creation
  - [x] Transaction Update
  - [x] Transaction Deletion
- [x] User identification via deviceId

### Requirements

To run this project locally, it is recommended that you'll have these tools installed on your machine:
[Git](https://git-scm.com),
[Node.js](https://nodejs.org/en/),
[Yarn version 1.x](https://classic.yarnpkg.com/lang/en/),
[Docker](https://www.docker.com/),
[VSCode](https://code.visualstudio.com/).

### 🎲 Setting up the back end

```bash
# Clone this repo
$ git clone https://github.com/hanar3/dtmoney-graphql-server

# CD into the project folder terminal/cmd
$ cd dtmoney-graphql-server

# Install the dependencies
$ yarn install

# Set up the .env file
$ cp .env.example .env

# Set up docker container
$ docker-compose up -d

# Run the application in development mode
$ yarn dev

# The development server will start running on port 4000 - go to <http://localhost:4000/>
```


### 🛠 Tech Stack

The following tools were used to build this project:

- [TypeScript](https://www.typescriptlang.org/)
- [Apollo Server](apollographql.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Type GraphQL](https://typegraphql.com/)

