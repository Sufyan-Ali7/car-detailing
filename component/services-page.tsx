"use client";
import { ServiceCard } from "@/component/service-card";
import { services } from "@/lib/service";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  const [selectedTag, setSelectedTag] = useState<
    "Sedan" | "SUV" | "Truck" | "Boat" | null
  >("Sedan");

  const filteredServices = selectedTag
    ? services.filter((service) => service.tag === selectedTag)
    : services;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-headline text-4xl font-medium md:text-5xl text-[#d9d9d9]">
          Our Detailing Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400 lg:text-xl md:text-lg text-md ">
          From a simple wash to a full ceramic coating, we offer a wide range of
          services to keep your car looking its best.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <div className="flex items-center justify-center mt-8">
        <ul
          className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8`}
        >
          {["Sedan", "SUV", "Truck", "Boat"].map((tag, i) => (
            <motion.li
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5}}
              className="text-[16px] hover:text-white/70 transition"
            >
              <button
                className={`mt-4 w-full px-6 py-2 rounded-lg border transition-transform hover:scale-105 flex items-center justify-center gap-2 ${
                  selectedTag === tag
                    ? "border-white bg-white/10"
                    : "border-white/60 hover:border-white"
                }`}
                onClick={() =>
                  setSelectedTag(tag as "Sedan" | "SUV" | "Truck" | "Boat")
                }
              >
                {tag}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {selectedTag && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 text-sm text-white/70"
        >
          Showing: {selectedTag}
        </motion.div>
      )}

      {/* Service Cards */}
      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: i * 0, duration: 0.5 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
