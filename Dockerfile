FROM node:20-alpine AS runner
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV NODE_ENV=production
ENV LOG_LEVEL=info

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]