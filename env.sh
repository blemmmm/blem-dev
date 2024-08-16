#!/bin/bash


echo "--> Removing /docker/volumes/ directory."
sudo rm -rf ./docker/volumes/

echo "--> Creating /docker/volumes/ directories."
mkdir -p ./docker/volumes/caddy/data
mkdir -p ./docker/volumes/caddy/config
mkdir -p ./docker/volumes/caddy/logs