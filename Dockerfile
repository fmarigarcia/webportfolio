FROM node:18-alpine
RUN apk add git
RUN git clone https://github.com/fmarigarcia/webportfolio.git
WORKDIR /webportfolio
CMD [ "yarn", "install" ]
EXPOSE 3000