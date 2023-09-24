# Build
FROM node:18 as builder

ENV SOURCE_PATH packages/website

WORKDIR /$SOURCE_PATH

ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=u1relmus
ENV NEXT_PUBLIC_SANITY_DATASET=production

COPY ${SOURCE_PATH}/package.json ${SOURCE_PATH}/package-lock.json ${SOURCE_PATH}/.env.example ${SOURCE_PATH}/next.config.js  ./

RUN npm ci

COPY ${SOURCE_PATH} ./

RUN npm run build

# Serving the artefacts
FROM node:18

WORKDIR /$SOURCE_PATH

ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=u1relmus
ENV NEXT_PUBLIC_SANITY_DATASET=production

ENV SOURCE_PATH packages/website

COPY --from=builder ${SOURCE_PATH}/next.config.js ./
# copy the standalone folder inside the .next folder generated from the build process
COPY --from=builder ${SOURCE_PATH}/.next/standalone ./
# copy the static folder inside the .next folder generated from the build process
COPY --from=builder ${SOURCE_PATH}/.next/static ./.next/static

ENV NODE_ENV=production

ENV PORT 80

EXPOSE 80

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]
