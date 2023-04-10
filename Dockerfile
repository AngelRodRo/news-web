FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN yarn 

COPY . .

RUN yarn build

FROM nginx:latest

COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]