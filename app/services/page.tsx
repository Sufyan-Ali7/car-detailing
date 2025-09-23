import { ServiceCard } from '@/component/service-card';
import { services } from '@/lib/service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - AutoLux',
  description: 'Explore our range of professional car detailing services.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Detailing Services</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          From a simple wash to a full ceramic coating, we offer a wide range of services to keep your car looking its best.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
