# Node Alpine Image
FROM node:10.15-alpine
# Update pacakges
RUN apt-get update && apt-get upgrade
# Adding Tini for SIGKILL workaround
RUN apk add --no-cache tini
# Exposing app on port 3000
EXPOSE 3000
# Working directory
WORKDIR /usr/src/app
# Copy package json and packagelock json
COPY package*.json ./
# Installing dependency 
RUN npm install && npm cache clean --force
# Copy code
COPY . .
# Tini in action
ENTRYPOINT ["tini", "--"]
# Start the node app
CMD ["node", "app.js"]
