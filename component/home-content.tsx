"use client";

import Link from "next/link";
import Image from "next/image";
import Card from "@/component/Card";
import { ArrowLeft, CheckCircle, Crown, Diamond } from "lucide-react";
import { motion } from "framer-motion";
import { Arrow } from "@radix-ui/react-select";

export default function HomeContent() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden min-h-screen mt-8 sm:mt-10 md:mt-12">
      <div className="relative w-full flex flex-col items-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-center mt-2 px-4"
        >
          <h1 className="text-[32px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-medium">
            Crystal car detailing
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px]">
            Experience the prestige of a professionally detailed car,
          </p>
          <p className="text-[16px] sm:text-[18px] md:text-[20px]">
            radiating elegance and refinement at every turn.
          </p>

          <button
                className="inline-flex items-center text-white text-[18px] sm:text-[28px] mt-12 hover:scale-105 hover:text-gray-300  transition"
              >
                <Link  href="/contact">
            {"Let\u2019s connect"}{" "}
             
                </Link>
                  <ArrowLeft  className="text-[24px] ml-8 sm:ml-1 leading-none"/>
              </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative mt-10 sm:mt-12 w-full max-w-none flex items-center justify-center"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[105vw] max-w-none aspect-[1.6/1] blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(200,200,200,0.45), rgba(120,120,120,0.22), rgba(0,0,0,0) 70%)",
            }}
          />
          <Image
            src="/car8.png"
            alt="Luxury car"
            width={4000}
            height={1800}
            className="w-full h-auto max-h-[60vh] object-contain"
            priority
          />
        </motion.div>

        {/* Details Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full px-4 sm:px-8 md:px-12 lg:px-20 mt-14 md:mt-20"
        >
          <div className="max-w-[1400px] mx-auto">
            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#7a7575] font-medium">
              Crystal car detailing
            </h3>
            <hr className="my-5 border-t border-white/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-16 items-start">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight">
                Love in Every Detail
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#7a7575] max-w-[65ch]">
                Immerse yourself in crystal with our bespoke detailing packages
                tailored to your car&apos;s unique needs. From meticulous paint
                correction to deep interior treatments, we elevate every surface
                to a showroom finish.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 ">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card
                  imageURL="/car3.png"
                  heading="Entry level detail"
                  text="Our entry-level detail gives your car a refreshing hand wash..."
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card
                  imageURL="/car1.png"
                  heading="Maintenance detail"
                  text="Ensure your car's longevity with a periodic exterior protection..."
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card
                  imageURL="/car5.png"
                  heading="Full detail"
                  text="Pamper your vehicle with a complete treatment that leaves no detail overlooked..."
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* We take care section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-24 lg:mt-28"
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1px_1.1fr] gap-10 lg:gap-14 items-start">
            <div className="text-[#d9d9d9] px-11 ">
              <h2 className="text-[#d9d9d9] text-left leading-tight font-medium text-[40px] sm:text-[56px] md:text-[52px] lg:text-[54px]">
                We will take good care of your car
              </h2>
              <Image
                src="/car4.png"
                alt="Luxury car"
                width={2000}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="hidden lg:block w-px h-full bg-white/20" />
            <div className="pt-2 px-10">
              <ul className="space-y-10">
                {[
                  {
                    icon: CheckCircle,
                    title: "Precise work",
                    text: "We uphold the highest standards of professionalism...",
                  },
                  {
                    icon: Crown,
                    title: "Premium Products and Services",
                    text: "Ensure your car's longevity...",
                  },
                  {
                    icon: Diamond,
                    title: "High-Level Security and Privacy",
                    text: "We understand the importance of privacy...",
                  },
                ].map(({ icon: Icon, title, text }, i) => (
                  <motion.li key={i} whileHover={{ scale: 1.02 }}>
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-white mt-1" />
                      <div>
                        <h3 className="text-[#d9d9d9] text-[24px] sm:text-[26px] font-medium">
                          {title}
                        </h3>
                        <p className="text-gray-300 text-[16px] sm:text-[18px] max-w-[60ch]">
                          {text}
                        </p>
                      </div>
                    </div>
                    <hr className="mt-6 border-t border-white/15" />
                  </motion.li>
                ))}
              </ul>
              <button
                className="inline-flex items-center text-white text-[18px] sm:text-[28px] mt-12 hover:scale-105 hover:text-gray-400  transition"
              >
                <Link  href="/contact">
                ContactUs{" "}
                </Link>
                  <ArrowLeft  className="text-[24px] ml-8 sm:ml-1 leading-none"/>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Book Now section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-12"
        >
          <div className="relative w-[1400px]">
            <Image
              src="/car2.png"
              alt="Luxury Car"
              width={1400}
              height={0}
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute inset-0 flex items-start justify-end">
              <div className="p-10 text-[#d9d9d9] z-10 space-y-1">
                <h2 className="text-[24px] sm:text-[58px] font-medium leading-tight">
                  Book your crystal <br /> car detailing today
                </h2>
                <p className="text-gray-300 text-[14px] sm:text-[20px] sm:mb-4 mb-1">
                  Click the link below. Fill out the details and <br />
                  we&apos;ll get back to you in less than 24 hours.
                </p>
                  <button
                    className="inline-flex items-center text-[14px] sm:text-[20px] md:text-[24px] font-medium 
                    bg-gray-500/20 text-[#d9d9d9d]
                    px-6 py-3 rounded-2xl 
                    border border-white/20 
                    hover:text-gray-300 
                    transition hover:scale-105"
                  >
                    <Link href="/booking">
                    Get a quote now
                </Link>
                    <ArrowLeft className="ml-1 text-[14px] sm:text-[32px]"/>
                  </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
