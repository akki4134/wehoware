import { Inter } from "next/font/google";
import "./globals.css";

import BrandStamp from "@/components/BrandStamp";
import Chip from "@/components/Chip";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wehoware",
  description: "Building Software for your Businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="fixed top-0 left-0 z-50">
          <BrandStamp text="•Building Premium Softwares For Your Business• W.W" />
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="fixed bottom-44 -left-32 text-xs -rotate-90 z-50">
          <a href="tel:+16475104134">cell: +1 647-510-4134</a>

          <a href="mailto:info@wehoware.com" className=" ml-5">
            Email: info@wehoware.com
          </a>
        </footer>

        <div className="fixed top-0 right-5 z-50 md:inset-y-0 md:m-0 md:flex md:items-center">
          <Chip />
        </div>
      </body>
    </html>
  );
}