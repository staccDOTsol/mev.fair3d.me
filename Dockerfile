FROM ubuntu:20.04
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apt-get update 
RUN apt-get install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_16.x |  bash -
RUN apt-get install -y nodejs

RUN apt-get install    python3 make   g++ build-essential -y
RUN npm i -g yarn
RUN yarn && npm i -g typescript
COPY . .
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]
