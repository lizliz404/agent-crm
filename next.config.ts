/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'attio.com',
      },
    ],
  },
};

export default nextConfig;
