/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    SERVER_API: process.env.SERVER_API,
    SHIPPING_SERVICE_API: process.env.SHIPPING_SERVICE_API,
    SHIPPING_SERVICE_API_KEY: process.env.SHIPPING_SERVICE_API_KEY,
    GTAG: process.env.GTAG,
    // SERVER_API: 'https://toprakcar-admin.herokuapp.com',
  },
}

module.exports = nextConfig
