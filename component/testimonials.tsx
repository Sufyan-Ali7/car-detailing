"use client";
import { testimonials } from "@/lib/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="bg-[#000000] px-4 py-12 md:px-8 lg:py-20">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl sm:text-4xl font-medium md:text-4xl lg:text-6xl text-[#d9d9d9]">
            Why Our Customers Trust{" "}
            <span className="text-[#d9d9d9]">CrystalDetails</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-md sm:text-lg md:text-lg lg:text-xl text-gray-400">
            Unmatched car detailing experiences, guaranteed.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0, duration: 0.5 }}
            >
              <Card className="flex flex-col h-75 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 bg-[#000000] border border-white/70 rounded-xl">
                <CardContent className="flex flex-1 flex-col p-4 sm:p-6 ">
                  <div className="flex-grow">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                      <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
                    </div>
                    <blockquote className="mt-3 text-sm sm:text-base text-gray-300 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Rating + user */}
                  <div className="mt-3">
                    <Separator className="my-4 bg-white/10" />
                    <motion.div
                      className="flex items-center gap-1"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: { staggerChildren: 0.1 },
                        },
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: { scale: 1, opacity: 1 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star
                            className={`h-4 w-4 sm:h-5 sm:w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-500"
                                : "text-white"
                            }`}
                            fill={
                              i < testimonial.rating
                                ? "currentColor"
                                : "currentcolor"
                            }
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-base sm:text-lg md:text-xl">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {testimonial.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
