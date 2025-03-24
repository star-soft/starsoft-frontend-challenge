"use client";

import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { QueryProvider } from "@/components/queryClientProvider";
import { Provider } from "react-redux"; // Importando o Provider do Redux
import { store } from "@/store/store"; // Importando a store configurada
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>NFT Shop</title>
        <meta name="description" content="Os melhores NFTs do mercado" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${PoppinsFont.variable} antialiased`}>
        <Provider store={store}>
          <div className="border-b border-[#ccc] sticky top-0 z-50">
            <Header />
          </div>
          <QueryProvider>
            <main>
              <div className="container mx-auto p-12">{children}</div>
            </main>
            <Toaster />
          </QueryProvider>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
