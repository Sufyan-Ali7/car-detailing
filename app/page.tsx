import Link from "next/link";
import Image from "next/image";
import Card from "@/component/Card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden min-h-screen mt-8 sm:mt-10 md:mt-12">
      <div className="relative w-full flex flex-col items-center">
        {/* Text content */}
        <div className="text-gray-300 text-center mt-2 px-4">
          <h1 className={`text-[32px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-medium`}>
            Luxury car detailing
          </h1>

          <p className="text-[16px] sm:text-[18px] md:text-[20px]">
            Experience the prestige of a professionally detailed car,
          </p>
          
          <p className="text-[16px] sm:text-[18px] md:text-[20px]">
            radiating elegance and refinement at every turn.
          </p>
          
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-xl sm:text-2xl font-medium text-white hover:text-white/60 transition"
          >
            {"Let's connect"} <span aria-hidden className="text-4xl leading-none">↗</span>
          </Link>
        </div>

        {/* Image + background gradients */}
        <div className="relative mt-10 sm:mt-12 w-full max-w-none flex items-center justify-center">
          {/* Radial glow behind the car */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[105vw] max-w-none aspect-[1.6/1] blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(200,200,200,0.45), rgba(120,120,120,0.22), rgba(0,0,0,0) 70%)",
            }}
          />
          {/* Subtle top vignette  */}
           <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 opacity-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(0,0,0,0))",
            }}
          />

          <Image
            src="/car8.png"
            alt="Luxury car"
            width={4000}
            height={1800}
            className="w-full h-auto max-h-[60vh] object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>
        {/* Details section below hero */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 mt-14 md:mt-20">
          <div className="max-w-[1400px] mx-auto">
            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#7a7575] font-medium">Luxury car detailing</h3>
            <hr className="my-5 border-t border-white/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-16 items-start">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight">
                Love in Every Detail
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#7a7575] max-w-[65ch]">
                Immerse yourself in luxury with our bespoke detailing packages tailored
                to your car's unique needs. From meticulous paint correction to deep
                interior treatments, we elevate every surface to a showroom finish.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
  <Card  imageURL="/car1.png" heading="Entry leavel detail" text=" Treat your luxury car to a thorough hand wash and wax application."/>
  <Card  imageURL="/car5.png" heading="Maintance detail"  text="Ensure your car's longevity with a periodic exterior protection treatment " />
  <Card imageURL="/car3.png" heading="full detail" text="Pamper your vichle with a complete treatment,leaving no detail overlooked."/>
</div>

          </div>
   

   
        </section>
      </div>
    </main>
  );  
}

  


