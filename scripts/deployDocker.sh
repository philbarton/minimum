#!/usr/bin/env zsh

gcloud run deploy minimum-web \
    --image gcr.io/mythic-evening-474009-a8/minimum-web:latest \
    --update-secrets OS_API_KEY=OS_API_KEY:latest \
    --platform managed \
    --region europe-west1 \
    --allow-unauthenticated


