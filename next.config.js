// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: __dirname,
    // Ensure we use webpack to avoid Turbopack issues with Japanese paths
    webpack: (config, { dev, isServer }) => {
        // custom webpack config if needed
        return config;
    },
    // Disable experimental typedRoutes warning
    experimental: {
        typedRoutes: false,
    },
};
module.exports = nextConfig;
