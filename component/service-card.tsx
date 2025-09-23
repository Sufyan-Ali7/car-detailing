'use client';

import Image from 'next/image';
import { Button } from '@/component/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/component/ui/card';
import { useCart } from '@/context/cart-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Service } from '@/types';
import { PlusCircle } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { addToCart } = useCart();
  const serviceImage = PlaceHolderImages.find(p => p.id === service.image);
  console.log(serviceImage?.imageUrl)

  return (
    <Card className="flex h-full flex-col overflow-hidden  transition-transform duration-300 hover:scale-105">
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
      <CardContent className="flex-grow px-6 py-2">
        <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
        <CardDescription className="mt-2">{service.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between  px-6">
        <p className="text-2xl font-medium text-white">
          ${service.price}
        </p>
        <button  className="w-34 px-2 flex items-center bg-[#1e1e1e] hover:bg-[#191919] transition-transform duration-300 hover:scale-105 py-3 rounded-2xl" onClick={() => addToCart(service)} >
          <PlusCircle className="mr-2 h-4 w-4 " />
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
}
