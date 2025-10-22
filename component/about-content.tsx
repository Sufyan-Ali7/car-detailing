"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export default function AboutContent() {
  return (
    <>
      {/* 🔹 MAIN ABOUT SECTION */}
      <section className="bg-black text-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="max-w-xl space-y-6"
        >
          <p className="uppercase tracking-widest text-gray-400 font-semibold">About Company</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Best <span className="text-gray-400">Car Detailers</span> <br /> In The <span className="text-gray-400">World</span>
          </h1>
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-white font-semibold">Crystal Clear Auto Detailing</span>, we take pride in transforming your vehicle to a showroom shine. 
            With years of professional experience, precision craftsmanship, and a passion for perfection, we ensure your car receives the highest quality care — inside and out.
          </p>

          <p className="text-gray-300 leading-relaxed">
            From luxury sedans to SUVs, trucks, and boats, our team delivers top-tier detailing services using premium-grade products. 
            Your satisfaction is our priority — because every vehicle deserves that crystal-clear finish.
          </p>

       <Link href="/contact"> <button className="mt-4 text-gray-300  transition hover:scale-105 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-gray-500/40 ">
       ContactUS{" "}
                <span aria-hidden className="text-[24px] ml-1 sm:ml-2 leading-none">
                  ↗
                </span>
          </button>
          </Link>  
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative">
            <Image
              src="/car3.png"
              alt="Garage Detailing"
              width={1800}
              height={400}
              className="rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#000000] border border-white/70 px-6 py-4 rounded-xl shadow-lg">
              <h3 className="text-3xl font-medium">14+</h3>
              <p className="uppercase text-sm tracking-widest font-medium">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🔹 ADD YOUR SECOND SECTION HERE */}
      <section className="bg-[#000000]  text-gray-200 py-16 px-6 md:px-20 grid md:grid-cols-3 gap-10">
        {[
          { title: "Precision Detailing", desc: "Every inch cleaned and polished with care." },
          { title: "Premium Products", desc: "We use only top-quality detailing materials." },
          { title: "Customer Satisfaction", desc: "We guarantee a flawless finish — every time." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#000000] rounded-2xl p-8 shadow-md hover:shadow-gray-300 border border-white/70 "
          >
            <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </>
  );
}
