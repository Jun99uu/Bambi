/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["i.pinimg.com", "images.unsplash.com"],
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
