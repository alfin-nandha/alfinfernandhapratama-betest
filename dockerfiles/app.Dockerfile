# base image
FROM node:16.15.1-alpine

RUN apk update && apk add tzdata

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
