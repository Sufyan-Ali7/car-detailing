import HomeContent from "../component/home-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crystal Clear Auto Detailing - Premium Car Detailing Services",
  description:
    "Professional auto detailing services for luxury and everyday cars. From hand washes to full detailing, Crystal Clear Auto Detailing keeps your car shining like new.",
};

export default function HomePage() {
  return <HomeContent />;
}
