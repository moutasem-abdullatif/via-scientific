FROM node:18.17-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i

# RUN FOR PRO
# CMD ["npm","run","start"]

# RUN FOR DEV MODE
CMD [ "npm", "run", "dev" ]