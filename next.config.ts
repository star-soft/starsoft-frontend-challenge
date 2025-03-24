import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "softstar.s3.amazonaws.com",
        pathname: "/**", // Permite todas as imagens nesse domínio
      },
    ],
  },
};

export default nextConfig;
