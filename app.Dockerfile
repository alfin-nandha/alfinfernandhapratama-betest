# base image
FROM node:16.15.1-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .

RUN npm install -g prisma

RUN prisma generate

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
