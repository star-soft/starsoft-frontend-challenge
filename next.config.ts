import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['softstar.s3.amazonaws.com'],
    unoptimized: false
  },
};

export default nextConfig;

