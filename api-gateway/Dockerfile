FROM node:10.16.0-alpine

ARG ENV
ENV NODE_ENV=${ENV}

COPY package.json package-lock.json tsconfig.json ./
COPY src src

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]
