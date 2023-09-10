# base image
FROM node:16.15.1-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package*.json ./
RUN npm install
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
