#!/bin/bash

if [[ $1 = "hd" ]]; then 
    sudo docker compose up --force-recreate --build hippodirect-typesense hippodirect-server
elif [[ $1 = "ps" ]]; then
    sudo docker compose up --force-recreate --build postgres-server tasks-server
else
    sudo docker compose up --force-recreate --build
fi