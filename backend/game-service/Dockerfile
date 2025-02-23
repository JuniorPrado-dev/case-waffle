FROM node:latest

WORKDIR /app

COPY package.json .
COPY tsconfig.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
