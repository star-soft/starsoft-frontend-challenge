"use client";

import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { QueryProvider } from "@/components/queryClientProvider";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import MetaData from "@/components/MetaData";

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
      <MetaData />
      <body className={`${PoppinsFont.variable} antialiased`}>
        <Provider store={store}>
          <div className="border-b border-[#ccc] sticky top-0 z-50">
            <Header />
          </div>
          <QueryProvider>
            <main>
              <div className="container mx-auto p-12">{children}</div>
            </main>
            <Toaster className="z-50" />
          </QueryProvider>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
