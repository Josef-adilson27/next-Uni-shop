/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ucarecdn.com',
 
          },
        ],
      },
}

module.exports = nextConfig
