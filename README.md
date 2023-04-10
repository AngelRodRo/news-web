# News App

## Getting Started

Before running the application, you need to set some environment variables.

Create an .env file in the root of the project with the following variables:

```
VITE_NEWS_SEARCH_URL=xxxxx
VITE_RAPIDAPI_KEY=xxxxx
VITE_RAPIDAPI_HOST=xxxxx
```

Then you can run the following command:

```
npm install
```

This will install all the necessary dependencies for the project. You can then start the development server by running:

```
npm run dev
```

This will start the development server at http://localhost:5173. You can open this URL in your web browser to view the application.

## Building for Production

To build the project for production, run the following command:

```
npm run build
```

This will create a build of the project in the build directory. You can then deploy this build to a web server or a cloud platform like AWS or Google Cloud.

## Testing

To run the test suite for this project, run the following command:

```
npm test
```

This will run all the test cases in the project and show the test results.

## Folder Structure

This project has the following folder structure:

```
news-app/
  README.md
  node_modules/
  package.json
  Dockerfile
  index.html
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
  public/
  src/
    __tests__/
    api/
    components/
      Card/
        index.tsx
        ...
      NewsHomePage
        index.tsx
        ImageModal.tsx
        ...
      NewsList
        index.tsx
        ...
    context/
      index.tsx
    stories/
      Card.stories.ts
      NewsList.stories.ts
      ...
    App.css
    App.tsx
```

# Dockerfile

If you want to run the application in a Docker container, you can use the following Dockerfile:

Dockerfile

```
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

```

To build a Docker image using this Dockerfile, navigate to the root of the project and run the following command:

```
docker build -t my-app .
```

This will build a Docker image with the tag my-app. You can then run the container using the following command:

```
docker run -p 8080:80 -d my-app
```
