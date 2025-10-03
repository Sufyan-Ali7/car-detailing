import { BookingForm } from '@/component/booking-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Service - CrystalDetails',
  description: 'Complete your booking for our professional car detailing services.',
};

export default function BookingPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-medium md:text-5xl">Complete Your Booking</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Review your selected services and provide your details to schedule your appointment. Payment is due after the service is complete.
        </p>
      </div>
      <div className="mt-12">
        <BookingForm />
      </div>
    </div>
  );
}
