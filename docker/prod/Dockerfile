FROM node:22.12.0-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22.12.0-slim

WORKDIR /app

COPY --from=builder /app/.output /app/.output

ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
