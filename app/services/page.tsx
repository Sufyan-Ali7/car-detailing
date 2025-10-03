// app/services/page.tsx
import type { Metadata } from "next";
import ServicesPage from "@/component/services-page"; // client component

export const metadata: Metadata = {
  title: "Our Services - CrystalDetails",
  description: "Explore our range of professional car detailing services.",
};

export default function Page() {
  return <ServicesPage />;
}
