'use client';

import Image from 'next/image';
import { PlusCircle } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Service } from '@/types';
import {
  Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle
} from '@/component/ui/card';
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger
} from '@/component/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const serviceImage = PlaceHolderImages.find(p => p.id === service.image);

  const handleAddToCart = () => {
    const added = addToCart(service);

    if (added) {
      toast({
        title: "Added to Quote",
        description: `${service.name} has been added to your quote.`,
        duration: 3000,
        className: "bg-[#1e1e1e] text-white border border-gray-700 rounded-xl shadow-lg",
      });
    } else {
      toast({
        title: "Already in Quote",
        description: `${service.name} is already in your booking request.`,
        duration: 3000,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto">
      <CardHeader className="p-0">
        {serviceImage && (
          <div className="relative h-86 w-full">
            <Image
              src={serviceImage.imageUrl}
              alt={serviceImage.description}
              fill
              className="object-cover"
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

        {service.details && (
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1 text-sm">
            {service.details.slice(0, 3).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {service.details && service.details.length > 3 && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="mt-2 text-blue-400 text-sm hover:underline">
                View More
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-[80vw] h-[80vh] bg-black text-white rounded-2xl shadow-2xl overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{service.name}</DialogTitle>
              </DialogHeader>

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

              <p className="mt-4 text-gray-100">{service.description}</p>

              {service.details && (
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                  {service.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4">
  <p className="text-xl sm:text-2xl font-medium text-white">
    ${service.price}
  </p>
  <button
    onClick={handleAddToCart}
    className="flex items-center justify-center rounded-2xl transition-transform hover:scale-105
               w-full sm:w-auto
               px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base 
               bg-[#1e1e1e] hover:bg-[#191919]"
  >
    <PlusCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
    <span className="text-sm sm:text-lg">Get a quote</span>
  </button>
</div>

            </DialogContent>
          </Dialog>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between px-6">
        <p className="text-2xl font-medium text-white">${service.price}</p>
        <button
          className="w-34 px-2 flex items-center bg-[#1e1e1e] hover:bg-[#191919] transition-transform duration-300 hover:scale-105 py-3 rounded-2xl"
          onClick={handleAddToCart}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Get a quote
        </button>
      </CardFooter>
    </Card>
  );
}
