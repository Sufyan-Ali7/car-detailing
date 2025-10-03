"use client";
import { ServiceCard } from "@/component/service-card";
import { services } from "@/lib/service";
import { useState } from "react";


export default function ServicesPage() {
  const [selectedTag, setSelectedTag] = useState<"Sedan" | "SUV" | "Truck" | "Boat" | null>("Sedan");
  const filteredServices = selectedTag
    ? services.filter((service) => service.tag === selectedTag)
    : services;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-medium md:text-5xl">
          Our Detailing Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          From a simple wash to a full ceramic coating, we offer a wide range of
          services to keep your car looking its best.
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <ul
          className={`    grid 
      grid-cols-2      
      sm:grid-cols-2  
      md:grid-cols-4   
      lg:grid-cols-4   
      gap-4 sm:gap-6 lg:gap-8 
      mt-4 md:mt-0`}
        >
          <li className="text-[16px] hover:text-white/70 transition">
            <button
              className={`mt-4 w-full px-6 py-2 rounded-lg border transition-transform hover:scale-105 flex items-center justify-center gap-2 ${selectedTag === 'Sedan' ? 'border-white bg-white/10' : 'border-white/60 hover:border-white'}`}
              onClick={() => setSelectedTag("Sedan")}
            >
              Sedan
            </button>{" "}
          </li>
          <li className="text-[16px] hover:text-white/70 transition">
            <button
              className={`mt-4 w-full px-6 py-2 rounded-lg border transition-transform hover:scale-105 flex items-center justify-center gap-2 ${selectedTag === 'SUV' ? 'border-white bg-white/10' : 'border-white/60 hover:border-white'}`}
              onClick={() => setSelectedTag("SUV")}
            >
              SUV
            </button>{" "}
          </li>
          <li className="text-[16px] hover:text-white/70 transition">
            <button
              className={`mt-4 w-full px-6 py-2 rounded-lg border transition-transform hover:scale-105 flex items-center justify-center gap-2 ${selectedTag === 'Truck' ? 'border-white bg-white/10' : 'border-white/60 hover:border-white'}`}
              onClick={() => setSelectedTag("Truck")}
            >
              Truck
            </button>{" "}
          </li>
          <li className="text-[16px] hover:text-white/70 transition">
            <button
              className={`mt-4 w-full px-6 py-2 rounded-lg border transition-transform hover:scale-105 flex items-center justify-center gap-2 ${selectedTag === 'Boat' ? 'border-white bg-white/10' : 'border-white/60 hover:border-white'}`}
              onClick={() => setSelectedTag("Boat")}
            >
              Boat
            </button>{" "}
          </li>
        </ul>
      </div>
      {selectedTag && (
        <div className="text-center mt-4 text-sm text-white/70">Showing: {selectedTag}</div>
      )}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
