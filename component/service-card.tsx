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

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        {serviceImage && (
          <div className="relative h-56 w-full">
            <Image
              src={serviceImage.imageUrl}
              alt={serviceImage.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={serviceImage.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
        <CardDescription className="mt-2">{service.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between bg-secondary/50 p-6">
        <p className="text-2xl font-bold text-primary">
          ${service.price}
        </p>
        <Button onClick={() => addToCart(service)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
