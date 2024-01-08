#!/bin/bash

echo "--> Removing .env file."
rm -f ./.env

echo "--> Removing .env file symlinks."
rm -f ./hippodirect/server/.env

echo "--> Creating .env file."
TYPESENSE_API_KEY=$(openssl rand -hex 32)
TYPESENSE_SEARCH_ONLY_KEY=$(openssl rand -hex 32)
echo "TYPESENSE_API_KEY=$TYPESENSE_API_KEY" >> .env
echo "TYPESENSE_SEARCH_ONLY_KEY=$TYPESENSE_SEARCH_ONLY_KEY" >> .env

echo "--> Creating .env file symlinks."
ln ./.env ./hippodirect/server/.env

echo "--> Reading .env file."
cat ./.env

echo "--> Removing /docker/volumes/ directory."
sudo rm -rf ./docker/volumes/

echo "--> Creating /docker/volumes/ directories."
mkdir -p ./docker/volumes/typesense/data
mkdir -p ./docker/volumes/caddy/data
mkdir -p ./docker/volumes/caddy/config
mkdir -p ./docker/volumes/caddy/logs