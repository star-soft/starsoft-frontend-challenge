"use client";

import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { QueryProviderClient } from "@/components/QueryProviderClient";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import MetaData from "@/components/MetaData";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
  title = "NFT SHOP",
  description = "Os melhores NFTs do mercado",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const [pathname, setPathname] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setPathname(window.location.pathname);

    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <html lang="Pt-br">
      <MetaData title={title} description={description} />
      <body className={`${PoppinsFont.variable} antialiased`}>
        <Provider store={store}>
          <div className="border-b border-[#ccc] sticky top-0 z-50">
            <Header />
          </div>
          <QueryProviderClient>
            <main>
              <div
                className={
                  pathname === "/" && isMobile
                    ? "mx-4 py-4"
                    : "md:container md:mx-auto mx-4 py-4 xl:p-12"
                }
              >
                {children}
              </div>
            </main>
            <Toaster />
          </QueryProviderClient>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
