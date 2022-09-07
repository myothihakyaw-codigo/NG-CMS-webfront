/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['s3.ap-southeast-1.amazonaws.com', 'cdn-icons-png.flaticon.com'] },
  sassOptions: { includePaths: [path.join(__dirname, 'styles')], prependData: `@import "styles/lib";` },
  experimental: { newNextLinkBehavior: true },
  optimizeFonts: false,
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
