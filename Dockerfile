FROM node:18-alpine
WORKDIR /my-texas-42-frontend
COPY package.json yarn.lock ./
RUN rm -rf /my-texas-42-frontend/node_modules
RUN yarn cache clean
RUN yarn install
COPY . .
RUN yarn build --verbose
EXPOSE 3000
ENV CI=true
CMD [ "yarn", "start" ]
