/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add Sanity's image CDN domain
  },
};

module.exports = nextConfig;
