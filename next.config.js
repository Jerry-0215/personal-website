/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/personal-website',
  assetPrefix: '/personal-website',
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.js',
  },
}

module.exports = nextConfig
