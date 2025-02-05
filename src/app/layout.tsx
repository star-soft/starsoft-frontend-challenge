"use client";
import "./globals.css";

import { Header } from "./_components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-secondaryC min-w-screen min-h-screen antialiased`}>
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
