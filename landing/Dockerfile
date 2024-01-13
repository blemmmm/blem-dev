# node lts
FROM node:18

# client dependencies
WORKDIR /client/
COPY ["./client/package.json", "./client/package-lock.json", "./"]
RUN npm install -g typescript
RUN npm install -g vite
RUN npm ci

# client files
WORKDIR /client/
COPY ["./client/", "./"]

# client build
WORKDIR /client/
RUN vite build

RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "."]