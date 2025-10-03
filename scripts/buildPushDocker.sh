#!/usr/bin/env zsh

docker buildx build \
  --platform linux/amd64 \
  -t gcr.io/mythic-evening-474009-a8/minimum-web:latest \
  --push .