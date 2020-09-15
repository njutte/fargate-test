FROM node:12
COPY ./index.js /home/node/app/index.js

EXPOSE 3000

ENTRYPOINT ["node", "/home/node/app/index.js"]