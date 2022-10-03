/**
 * @type {import('next').NextConfig}
 */
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "cdn.shopify.com"],
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
    localeDetection: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    })
    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}

module.exports = withVanillaExtract(nextConfig)
