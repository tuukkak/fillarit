FROM node:10.16.0-alpine

COPY package.json package-lock.json tsconfig.json ./
COPY src src

RUN npm ci

EXPOSE 3000

CMD npm start
