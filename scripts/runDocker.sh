#!/usr/bin/env zsh

docker run --name web --rm \
  -it --init -p 4321:4321 \
  -e LOG_LEVEL=debug \
  -e SERVER_NAME=farawayprod \
  minimum-web:latest