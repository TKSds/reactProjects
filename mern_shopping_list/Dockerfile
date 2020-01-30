FROM node:lts-slim
RUN mkdir -p /usr/mern_shopping_list/src/app
WORKDIR /usr/mern_shopping_list/src/app
COPY package*.json ./
COPY . .
EXPOSE 5000:5000
RUN npm install

CMD [ "npm", "start" ]