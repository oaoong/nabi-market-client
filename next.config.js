/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['cdn.cetizen.com'],
  },
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api:path*',
  //       destination: `${process.env.NEXT_PUBLIC_API_ADDRESS}/:path*`,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
