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
  },

   async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' https://accounts.google.com 'unsafe-inline';",
              "connect-src 'self' https://www.googleapis.com https://accounts.google.com;",
              "img-src * data: blob:;",
              "style-src 'self' 'unsafe-inline';",
              "frame-src https://accounts.google.com;",
              "font-src 'self';",
            ].join(" "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
}



export default nextConfig;
