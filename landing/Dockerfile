# node lts
FROM node:18

# client dependencies

COPY ["./package.json", "./package-lock.json", "./"]
RUN npm install -g typescript
RUN npm install -g vite
RUN npm ci

# client files

COPY ["./", "./"]

# client build

RUN vite build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "."]