FROM node as builder

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm i

COPY . .

RUN npm run build
RUN npm prune --production

FROM node

WORKDIR /app

COPY --from=builder /app/dist /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules

CMD ["npm", "run", "start:prod"]