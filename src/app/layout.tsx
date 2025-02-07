"use client";
import "./globals.css";

import { Inter } from "next/font/google";

import { Header } from "./_components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Marketplace de NFTs (Non-Fungible Tokens) com funcionalidades de carrinho de compras."
        />
        <title>Starsoft</title>
        {/*Robots manager: SEO*/}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="Marketplace, NFTS, Starsoft, SEO" />
      </head>
      <body
        className={`${inter.className} bg-secondaryC min-w-screen min-h-screen antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="px-4 md:px-16 xl:px-20 2xl:px-72 py-32 2xl:py-40">
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
