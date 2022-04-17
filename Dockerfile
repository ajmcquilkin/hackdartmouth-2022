FROM node:17-alpine as base
RUN apk add yarn
WORKDIR /app
COPY package*.json yarn.lock ./

FROM base AS dev_server
COPY . .
WORKDIR /app/apps/server
RUN yarn install --frozen-lockfile
CMD [ "yarn", "dev" ]

FROM base AS prod_server_builder
RUN apk add bash
RUN yarn global add node-prune
COPY . .
WORKDIR /app/apps/server
RUN yarn install --frozen-lockfile
RUN /usr/local/bin/node-prune

FROM base as prod_server
COPY --from=prod_server_builder /app /app
WORKDIR /app/apps/server
CMD [ "yarn", "start" ]

FROM base as dev_web
RUN apk add --no-cache libc6-compat
RUN yarn global add @swc/cli @swc/core
COPY . .
WORKDIR /app/apps/web
RUN yarn install --frozen-lockfile
CMD [ "yarn", "dev" ]

FROM base as prod_web_builder
RUN apk add --no-cache libc6-compat
RUN yarn global add @swc/cli @swc/core
COPY . .
WORKDIR /app/apps/web
RUN yarn install --frozen-lockfile
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
