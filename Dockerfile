# Node Image is required for builds
FROM node:latest

# Optional but good to have
MAINTAINER Austin <austindevsmash@gmail.com>

# Create APP Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy Package file
COPY package.json /usr/src/app/

# RUN npm install
RUN npm install

# ADD pre-requisite folders for build
ADD src /usr/src/app/src
ADD public /usr/src/app/public

# RUN build 
RUN npm build

CMD [ "npm", "start" ]