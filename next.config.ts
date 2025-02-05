import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['softstar.s3.amazonaws.com'],
    unoptimized: true
  },
};

export default nextConfig;

