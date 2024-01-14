FROM node:latest
WORKDIR /flogile_v3.1
COPY . .
# Expose the port the app runs on
EXPOSE 443
EXPOSE 80
RUN npm install
CMD [ "npm", "start" ]
