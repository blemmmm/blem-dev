# node lts
FROM node:18

ENV TYPESENSE_API_KEY=${TYPESENSE_API_KEY}

# client dependencies
WORKDIR /client/
COPY ["./client/package.json", "./client/package-lock.json", "./"]
RUN npm install -g vite
RUN npm ci

# server dependencies
WORKDIR /server/
COPY ["./server/package.json", "./server/package-lock.json", "./"]
RUN npm ci --omit=dev

# client files
WORKDIR /client/
COPY ["./client/", "./"]

# server files
WORKDIR /server/
COPY ["./server/", "./"]

# client build
WORKDIR /client/
RUN vite build

WORKDIR /server/data/
COPY ["./server/data/products.mjs", "./"]
COPY ["./server/data/ecommerce.json", "./"]

# server build
WORKDIR /server/
CMD node ./data/products.mjs && npx --yes tsx ./src/app.ts