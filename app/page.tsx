import Link from "next/link";
import Image from "next/image";
import Card from "@/component/Card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden min-h-screen mt-8 sm:mt-10 md:mt-12">
      <div className="relative w-full flex flex-col items-center">
        {/* Text content */}
        <div className="text-gray-300 text-center mt-2 px-4">
          <h1
            className={`text-[32px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-medium`}
          >
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
            {"Let's connect"}{" "}
            <span aria-hidden className="text-4xl leading-none">
              ↗
            </span>
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
            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#7a7575] font-medium">
              Luxury car detailing
            </h3>
            <hr className="my-5 border-t border-white/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-16 items-start">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight">
                Love in Every Detail
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#7a7575] max-w-[65ch]">
                Immerse yourself in luxury with our bespoke detailing packages
                tailored to your car's unique needs. From meticulous paint
                correction to deep interior treatments, we elevate every surface
                to a showroom finish.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <Card
                imageURL="/car3.png"
                heading="Entry leavel detail"
                text=" Treat your luxury car to a thorough hand wash and wax application."
              />
              <Card
                imageURL="/car1.png"
                heading="Maintance detail"
                text="Ensure your car's longevity with a periodic exterior protection treatment "
              />
              <Card
                imageURL="/car5.png"
                heading="full detail"
                text="Pamper your vichle with a complete treatment,leaving no detail overlooked."
              />
            </div>
          </div>
        </section>
        {/* Two-column section matching reference */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-24 lg:mt-28">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1px_1.1fr] gap-10 lg:gap-14 items-start">
            {/* Left: heading + car with reflection */}
            <div className="text-gray-300 px-11 ">
              <h2
                className={`text-white text-left leading-tight font-medium text-[40px] sm:text-[56px] md:text-[52px] lg:text-[54px]`}
              >
                We will take good care of your car
              </h2>
              <div className="relative ">
                <Image
                  src="/car4.png"
                  alt="Luxury car"
                  width={2000}
                  height={1000}
                  className="w-full h-auto object-contain"
                  priority
                />
                {/* Reflection */}
                <div className="absolute left-0 right-0 top-full translate-y-3 overflow-hidden pointer-events-none">
                  <Image
                    src="/car4.png"
                    alt="Luxury car reflection"
                    width={2000}
                    height={1000}
                    className="w-full h-auto object-contain scale-y-[-1] opacity-60"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0))",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0))",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className="hidden lg:block w-px h-full bg-white/20"
              aria-hidden
            />

            {/* Right: features list */}
            <div className="pt-2 px-10">
              <ul className="space-y-10">
                <li>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-white mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.95-6.95-2.12 2.12M8.17 15.83l-2.12 2.12m12.07 0-2.12-2.12M8.17 8.17 6.05 6.05"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <h3 className="text-white text-[24px] sm:text-[26px] font-medium">
                        Precise work
                      </h3>
                      <p className="text-[#b6b6b6] text-[16px] sm:text-[18px] max-w-[60ch] ">
                        We uphold the highest standards of professionalism when
                        servicing your vehicles.
                      </p>
                    </div>
                  </div>
                  <hr className="mt-6 border-t border-white/15" />
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-white mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M3 7h18M5 7l2 12h10l2-12M9 7V5a3 3 0 0 1 6 0v2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <h3 className="text-white text-[24px] sm:text-[26px] font-medium">
                        Premium Products and Services
                      </h3>
                      <p className="text-[#b6b6b6] text-[16px] sm:text-[18px] max-w-[60ch]">
                        Ensure your car's longevity with a periodic exterior
                        protection treatment.
                      </p>
                    </div>
                  </div>
                  <hr className="mt-6 border-t border-white/15" />
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-white mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 21c4.97-3.5 8-7.03 8-11a8 8 0 1 0-16 0c0 3.97 3.03 7.5 8 11Z" />
                      <circle cx="12" cy="11" r="3" fill="currentColor" />
                    </svg>
                    <div>
                      <h3 className="text-white text-[24px] sm:text-[26px] font-medium">
                        High‑Level Security and Privacy
                      </h3>
                      <p className="text-[#b6b6b6] text-[16px] sm:text-[18px] max-w-[60ch]">
                        We understand the importance of privacy and security for
                        our clientele.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-[18px] sm:text-[28px] mt-12 hover:text-white/70 transition"
              >
                Get a quote now{" "}
                <span aria-hidden className="text-[34px] leading-none">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative w-[1200px] h-[550px] rounded-xl overflow-hidden mt-12 ">
          {/* Background Image */}
          <Image
            src="/car2.png" // put your image in /public and rename
            alt="Luxury Car"
            layout="fill"
            objectFit="cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Text Content */}
          {/* <div className="relative z-10 flex items-center h-full ">
            <div className="container mx-auto px-8 md:px-16 text-right">
              <div className="w-3xl border text-center flex flex-col align-middle justify-start">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 border">
                  Book your luxury <br /> car detailing today
                </h1>
                <div className="text-gray-300 max-w-lg ml-auto mb-6  flex justify-center">
                  
                    Click the link below. Fill out the details and <br />
                    we’ll get back to you in less than 24 hours.
                  
                </div>
                <a
                  href="#quote"
                  className="inline-flex items-center text-lg font-medium text-white hover:underline"
                >
                  Get a quote now
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div> */}

          <div className="p-10 text-white relative z-10 space-y-10  flex">
            <div className="w-2/3"></div>

            <div>
            <h2 className="text-8xl">Book your luxury <br /> car detailing today</h2>
            <p>Click the link below. Fill out the details and <br />
            we’ll get back to you in less than 24 hours.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
