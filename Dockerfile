FROM node:18-alpine
WORKDIR /webportfolio
COPY . .
RUN yarn install
RUN yarn build
CMD [ "yarn", "start" ]
EXPOSE 3000