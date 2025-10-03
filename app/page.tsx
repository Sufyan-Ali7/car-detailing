import Link from "next/link";
import Image from "next/image";
import Card from "@/component/Card";  
import { CheckCircle, Crown, Diamond } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crystal Clear Auto Detailing - Premium Car Detailing Services",
  description:
    "Professional auto detailing services for luxury and everyday cars. From hand washes to full detailing, Crystal Clear Auto Detailing keeps your car shining like new.",
};


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden min-h-screen mt-8 sm:mt-10 md:mt-12">
      <div className="relative w-full flex flex-col items-center">
        {/* Text content */}
        <div className="text-gray-300 text-center mt-2 px-4">
          <h1
            className={`text-[32px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-medium`}
          >
            Crystal car detailing
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
            {"Let\u2019s connect"}{" "}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <Card
                imageURL="/car3.png"
                heading="Entry leavel detail"
                text=" Our entry-level detail gives your car a refreshing hand wash with pH-balanced soap, leaving the exterior spotless and protected. We apply a high-quality wax to restore shine and add a layer of protection to your paint. Wheels, tires, and glass are cleaned to ensure a polished, well-maintained look inside and out."
              />
              <Card
                imageURL="/car1.png"
                heading="Maintance detail"
                text="Ensure your car&apos;s longevity with a periodic exterior protection treatment that preserves both shine and paint quality. This service includes a gentle hand wash, premium wax application, and thorough wheel and glass cleaning. It&apos;s the perfect choice for keeping your vehicle looking sharp between full detailing sessions."
              />
              <Card
                imageURL="/car5.png"
                heading="full detail"
                text="Pamper your vehicle with a complete treatment that leaves no detail overlooked. This service combines deep exterior cleaning, wax protection, and full interior care including vacuuming, upholstery cleaning, and surface conditioning. It&apos;s the ultimate package to restore your car&apos;s showroom look inside and out.."
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
                    <CheckCircle className="w-6 h-6 text-white mt-1" />
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
                  <Crown className="w-6 h-6 text-white mt-1" />
                    <div>
                      <h3 className="text-white text-[24px] sm:text-[26px] font-medium">
                        Premium Products and Services
                      </h3>
                      <p className="text-[#b6b6b6] text-[16px] sm:text-[18px] max-w-[60ch]">
                        Ensure your car&apos;s longevity with a periodic exterior
                        protection treatment.
                      </p>
                    </div>
                  </div>
                  <hr className="mt-6 border-t border-white/15" />
                </li>
                <li>
                  <div className="flex items-start gap-4">
                  <Diamond className="w-6 h-6 text-white mt-1" />
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
                className="inline-flex items-center  text-white text-[18px] sm:text-[28px] mt-12   hover:underline transition"
              >
                ContactUS{" "}
                <span aria-hidden className="text-[24px] ml-1 sm:ml-2 leading-none">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center mt-12  ">
          <div className="relative w-[1400px]  ">
            <Image
              src="/car2.png"
              alt="Luxury Car"
              width={1400} // keep original image width
              height={0} // auto height
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute w-[20%] left-0 top-0 h-full bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute w-[20%] right-0 top-0 h-full bg-gradient-to-l from-black to-transparent"></div>
     
            <div className="absolute inset-0 flex items-start justify-end ">
              <div className="p-10 text-white z-10 space-y-1 ">
                <h2 className="text-[24px]  sm:text-[58px] font-medium leading-tight text-white sm:mb-2 mb-1 ">
                  Book your crystal <br /> car detailing today
                </h2>
                <p className="text-gray-100 text-[14px] sm:text-[20px] sm:mb-4 mb-1">
                  Click the link below. Fill out the details and <br />
                  we&apos;ll get back to you in less than 24 hours.
                </p>
              <Link href="/booking"><button className="text-[14px] sm:text-[28px] font-medium bg-[#1e1e1e] text-white  hover:underline inset-ring-4 inset-ring-white p-2 rounded-2xl">
                  Get a quote now
                  <span className="ml-1 text-[14px] sm:text-[32px]">↗</span>
                </button></Link>
              </div>
            </div>
          </div>
        </section>

  {/* Seattle Locations Banner */}
  {/* <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[44px] font-medium uppercase leading-tight mb-8">
              WHEREVER You Are in SEATTLE, CAR<br />
              DETILING BRING THE SHINE
            </h2>
            
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
              {/* Column 1 */}
              {/* <div className="space-y-4 text-left">
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• West Seattle</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Capitol Hill</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Ballard</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Queen Anne</div>
              </div> */}
              
              {/* Column 2 */}
              {/* <div className="space-y-4 text-left">
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• South Lake Union</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Beacon Hill</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Rainier Valley</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Burien</div>
              </div> */}
              
              {/* Column 3 */}
              {/* <div className="space-y-4 text-left">
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Shoreline</div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Tukwila</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• SeaTac</div>
                <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-medium">• Renton</div>       
            </div>
          </div>
          </div> */}
        {/* </section> */} 
  
        {/* footer */}
        <section className="mt-6  p-4 ">
          <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12  ">
            <div>
              <h2 className="text-[26px] font-medium">CrystalDetails</h2>
              <p className="text-[17px] text-[#b6b6b6] leading-relaxed">
                {" "}
                Experience the prestige of a professionally detailed car,
                radiating elegance and refinement at every turn.
              </p>
            </div>
        <div className="grid grid-cols-2   sm:grid-cols-3 gap-10 sm:gap-14  sm:place-items-start">
              {/* website */}
              <div className="space-y-2">
                <h3 className="text-[24px] text-[#494444] font-medium">
                  Website
                </h3>
                <ul className="space-y-3 text-[18px] font-light">
                  <li>
                    <Link href="/services" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      Reviews
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      Pricing
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              {/* contact */}
              <div className="space-y-2">
                <h3 className="text-[24px] text-[#494444] font-medium">
                  Contact
                </h3>
                <ul className="space-y-4 text-[18px] font-light">
                  <li>
                    <Link href="/booking" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      Get a qoute
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      contact form
                    </Link>
                  </li>
                  <li>
                    <Link  href="mailto:crystalclearautodetailing8@gmail.com" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300 ">
                      Email Us
                    </Link>
                  </li>
                </ul>
              </div>
              {/* SocialMedia   */}
              <div className="space-y-2">
                <h3 className="text-[24px] text-[#494444] font-medium">
                  SocialMedia
                </h3>
                <ul className="space-y-4 text-[18px] font-light">
                  <li>
                    <Link href="https://www.facebook.com/profile.php?id=61577754802554" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/crystalclearautodetailing8/" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      Instagram
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/" className="hover:text-gray-300 hover:underline  hover:decoration-gray-300">
                      Twitter
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end */}
      
      </div>
    </main>
  );
}
