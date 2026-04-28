FROM node:18-alpine AS build
WORKDIR /my-texas-42-frontend
COPY package.json yarn.lock ./
RUN yarn cache clean
RUN yarn install
COPY . .
ENV CI=true
RUN yarn build

FROM nginx:alpine
COPY --from=build /my-texas-42-frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
