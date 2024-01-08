#!/bin/bash

if [[ $1 = "hd" ]]; then 
    sudo docker compose up --force-recreate --build hippodirect-typesense hippodirect-server
else
    sudo docker compose up --force-recreate --build
fi