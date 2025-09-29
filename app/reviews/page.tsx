import { ServiceCard } from '@/component/service-card';
import { Testimonials } from '@/component/testimonials';
import { services } from '@/lib/service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - AutoLux',
  description: 'Explore our range of professional car detailing services.',
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