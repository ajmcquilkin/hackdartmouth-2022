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

FROM base as dev_web
RUN apk add --no-cache libc6-compat
RUN yarn install --frozen-lockfile
COPY . .
WORKDIR /app/apps/web
RUN yarn add @swc/cli @swc/core
CMD [ "yarn", "dev" ]

FROM base as prod_web_builder
RUN apk add --no-cache libc6-compat
RUN yarn install --frozen-lockfile
COPY . .
WORKDIR /app/apps/web
RUN yarn add @swc/cli @swc/core
RUN yarn build

FROM node:17-alpine as prod_web
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=prod_web_builder /app/apps/web/next.config.js ./
COPY --from=prod_web_builder /app/apps/web/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=prod_web_builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=prod_web_builder --chown=nextjs:nodejs /app/apps/web/.next/static ./.next/static

USER nextjs
ENV PORT 3000
CMD ["node", "./apps/web/server.js"]
