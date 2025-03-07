import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.prod.website-files.com", "assets.website-files.com", "images.remotePatterns"],
  },
};

export default nextConfig;
