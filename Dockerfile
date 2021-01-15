FROM node:lts-alpine

COPY . /app

WORKDIR /app

RUN yarn install --production --link-duplicates

CMD ["yarn", "start"]
