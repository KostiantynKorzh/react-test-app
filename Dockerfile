FROM node:18-alpine
WORKDIR /tmp/server-front
EXPOSE 3000
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
ENV REACT_APP_API_URL="https://dummyjson.com/"
CMD ["npm", "start"]