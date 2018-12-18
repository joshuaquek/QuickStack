# specify the node base image with your desired version node:<version>
FROM node:10-alpine

# Set the working directory to /app
WORKDIR /app
# Only run NPM Install if package.json changes (this allows node_modules to be cached)
COPY package.json /app/package.json
RUN cd /app; npm install
# Copy the current directory contents into the container at /app
COPY . /app
# Ports to expose to local machine
EXPOSE 8080 7501 9001

# Place the NPM script that you want to run over here:
RUN npm run staging