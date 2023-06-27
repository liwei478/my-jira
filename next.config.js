/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // REACT_APP_API_URL: 'http://localhost:3001',
    env: process.env.NODE_ENV,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
