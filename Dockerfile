FROM node:17-alpine as base
RUN apk add yarn
WORKDIR /app
COPY package*.json yarn.lock ./

FROM base AS dev_server
RUN yarn install --frozen-lockfile
COPY . .
WORKDIR /app/apps/server
CMD [ "yarn", "dev" ]

# FROM base AS builder
# RUN npm ci
# COPY src src
# COPY webpack* .
# COPY .eslintrc.json .
# COPY .babelrc .
# COPY tsconfig.json .
# RUN npm run build

FROM base AS prod_server
# this still installs all the non-dev dependencies; removing react etc would be better
RUN yarn install --frozen-lockfile
COPY . .
WORKDIR /app/apps/server
CMD [ "yarn", "prod" ]
