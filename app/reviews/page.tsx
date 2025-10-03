// import { ServiceCard } from '@/component/service-card';
import { Testimonials } from '@/component/testimonials';
// import { services } from '@/lib/service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our reviews - CrystalDetails',
  description: "Read genuine customer reviews about Crystal Clear Auto Detailing. Discover why car owners trust us for premium detailing services.",
};

export default function PricingPage() {
  return (
    <>
     <div>
      <Testimonials />
      </div>
    </>
  );
}