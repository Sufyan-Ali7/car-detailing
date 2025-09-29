'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Service } from '@/types';
import { 
  Card, CardContent, CardDescription, CardFooter, 
  CardHeader, CardTitle 
} from '@/component/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/component/ui/dialog';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { addToCart } = useCart();
  const serviceImage = PlaceHolderImages.find(p => p.id === service.image);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
        <CardHeader className="p-0">
          {serviceImage && (
            <div className="relative h-86 w-full">
              <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={serviceImage.imageHint}
                priority
              />
            </div>
          )}
        </CardHeader>

        <CardContent className="flex-grow px-6 py-3 overflow-hidden">
          <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
          <CardDescription className="mt-1 line-clamp-2">
            {service.description}
          </CardDescription>

          {/* Show only first 3 details */}
          {service.details && (
            <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1 text-sm">
              {service.details.slice(0, 3).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {/* View More opens modal */}
          {service.details && service.details.length > 3 && (
            <button
              onClick={() => setOpen(true)}
              className="mt-2 text-blue-400 text-sm hover:underline"
            >
              View More
            </button>
          )}
        </CardContent>

        <CardFooter className="flex items-center justify-between px-6">
          <p className="text-2xl font-medium text-white">${service.price}</p>
          <button
            className="w-34 px-2 flex items-center bg-[#1e1e1e] hover:bg-[#191919] transition-transform duration-300 hover:scale-105 py-3 rounded-2xl"
            onClick={() => addToCart(service)}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Get a qoute
          </button>
        </CardFooter>
      </Card>

      {/* Popup Dialog */}
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl w-[330px] sm:w-[560px] md:w-[460px] lg:w-[760px] bg-[#000000] text-white rounded-2xl shadow-2xl backdrop-blur-xs  max-h-[90vh] overflow-y-auto sm:mx-auto mx-1">
          <DialogHeader>
            <DialogTitle className=" sm:text-3xl font-medium">{service.name}</DialogTitle>
          </DialogHeader>

          <div className="mt-1 space-y-4">
            {serviceImage && (
              <div className="relative h-86 w-full rounded-lg overflow-hidden">
                <Image
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <p className="text-gray-100 text-md">{service.description}</p>

            {service.details && (
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-md">
                {service.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            <div className="flex justify-between items-center pt-4">
              <p className="text-2xl font-medium text-white">${service.price}</p>
              <button
                className="px-4 py-3 bg-[#1e1e1e] hover:bg-[#191919]  rounded-2xl flex items-center transition-transform hover:scale-105" 
                onClick={() => addToCart(service)}
              >
                <PlusCircle className="mr-2 h-6 w-6" />
               <span className='text-lg'> Add to Cart</span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    
    </>
  );
}
