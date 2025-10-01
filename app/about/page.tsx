// import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - AutoLux',
  description: 'Learn more about Crystal Clear Auto Detailing and our mission.',
};

export default function AboutPage() {
  // const aboutImage = PlaceHolderImages.find(p => p.id === 'about-team');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="font-headline text-4xl font-medium md:text-5xl">About Crystal Clear Auto Detailing</h1>
          <p className="mt-4 text-lg text-gray-300">
            Founded with a passion for automotive excellence, Crystal Clear Auto Detailing has grown into a premier mobile detailing service covering the entire USA.
          </p>
          <div className="mt-6 border-l-4 border-gray-300 pl-4">
            <h2 className="font-headline text-2xl font-semibold">Our Mission</h2>
            <blockquote className="mt-2 text-xl italic">
              &quot;Professional car detailing anywhere in the USA with guaranteed satisfaction.&quot;
            </blockquote>
          </div>
          <p className="mt-6 text-gray-300">
            We believe that every car owner deserves to feel pride in their vehicle. Our mission is to deliver a convenient, high-quality detailing service that brings out the best in every car we touch. Using state-of-the-art equipment and premium products, our certified technicians ensure a flawless finish, every time.
          </p>
        </div>
        <div>
          {/* {aboutImage && ( */}
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg lg:h-full">
              <Image
                src="/car1.png"
                alt="Luxury car detailing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                // data-ai-hint={aboutImage.imageHint}
              />
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

