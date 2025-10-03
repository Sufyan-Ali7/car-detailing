import { testimonials } from '@/lib/testimonials';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Quote, Star } from 'lucide-react';
import { Separator } from './ui/separator';

export function Testimonials() {
  return (
    <section className="bg-[#000000] px-4 py-12 md:px-8 lg:py-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-medium md:text-4xl lg:text-6xl ">
            Why Our Customers Trust CrystalDetails
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-md sm:text-lg md:text-lg lg:text-xl text-gray-300">
            Unmatched car detailing experiences, guaranteed.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col transition-transform duration-300 hover:scale-105 bg-[#1e1e1e]"
            >
              <CardContent className="flex flex-1 flex-col p-4 sm:p-6">
                <div className="flex-grow">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-muted">
                    <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-[#1e1e1e]" />
                  </div>
                  <blockquote className="mt-3 text-sm sm:text-base text-gray-300">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Rating + user */}
                <div className="mt-3">
                  <Separator className="my-4" />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < testimonial.rating ? 'text-yellow-500' : 'text-white'
                        }`}
                        fill={i < testimonial.rating ? 'currentColor' : 'currentcolor'}
                      />
                    ))}
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
                    <Avatar className="w-10 h-10 sm:w-13 sm:h-13">
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-base sm:text-lg md:text-xl">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-300">{testimonial.city}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
