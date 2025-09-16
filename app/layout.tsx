import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {  clashDisplay} from "@/utils/fonts"
import "./globals.css";
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
  title: "Luxury Car Detailing",
  description: "Experience luxury car detailing with elegance and refinement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clashDisplay.variable}>
           <body className={`${clashDisplay.className} bg-[#000000] text-white`}>
        <Navbar/>
        <div className="container mx-auto min-h-[87vh]">
        {children}
        </div>
      <Footer/>
      </body>
    </html>
  );
}
