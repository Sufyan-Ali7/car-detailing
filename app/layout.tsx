import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {  clashDisplay} from "@/utils/fonts"
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "@/component/ui/toaster"
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});






export const metadata: Metadata = {
  title: "Crystal Car Detailing",
  description: "Experience crystal car detailing with elegance and refinement.",
  icons: {
    icon: "/car-icon.png", // your file inside public
    shortcut: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <CartProvider>
           <body className={`${clashDisplay.className} bg-[#000000] text-white`}>
        <Navbar/>
        <div className="container mx-auto min-h-[87vh]">
        {children}
        </div>
        <Toaster/>
      <Footer/>
      </body>
      </CartProvider>
    </html>
  );
}
