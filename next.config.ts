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
    // loader: "custom",
    // loaderFile: "imageLoader.ts",
    // se você quiser usar um loader de imagem personalizado...
    // lembres-se de descomentar as linhas acima e também o arquivo imageLoader.ts
    // e adicionar os atributos necessários no componente de <Image/>
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
