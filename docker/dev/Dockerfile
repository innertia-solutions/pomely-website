FROM node:22.12.0-slim

WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./

RUN npm install

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
