import localFont from "next/font/local";

export const  clashDisplay = localFont({
    variable: "--font-clash-display",
    display: "swap",
    src: [
      { path: "../public/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Extralight.woff2", weight: "200", style: "normal" },
      { path: "../public/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Light.woff2", weight: "300", style: "normal" },
      { path: "../public/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
      { path: "../public/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
      { path: "../public/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
      { path: "../public/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
    ],
  });