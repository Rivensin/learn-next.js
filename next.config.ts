import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'static.nike.com',
        port: '',
        pathname:'/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        port: '',
        pathname:'/**',
      },
    ]
  }
};

export default nextConfig;
