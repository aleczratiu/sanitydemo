/** @type {import('next').NextConfig} */
const path = require('path');
const rootPath = path.resolve(`${__dirname}/../../`);

require('dotenv-safe').config({ path: process.env.ENV_FILE || path.resolve(`${rootPath}/.env`) });

const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'standalone',
};

module.exports = nextConfig;
