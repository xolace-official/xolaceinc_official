import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        //domain is for dev only
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      ]
  }
};

export default nextConfig;
