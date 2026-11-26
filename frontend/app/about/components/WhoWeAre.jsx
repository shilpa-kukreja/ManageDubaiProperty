"use client";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function WhoWeAre() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#b07e50]" />
            <span className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
              Who We Are
            </span>
            <span className="w-8 h-[1px] bg-[#b07e50]" />
          </div>
          <h2 className={`${jakarta.className} text-4xl md:text-5xl lg:text-[54px] font-medium text-[#111827] leading-[1.1] tracking-tight`}>
            Redefining property <br className="hidden md:block" /> management in Dubai.
          </h2>
        </div>

        {/* Split Layout Content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: The Image */}
          <div className="lg:w-1/2 relative">
            {/* Decorative background block */}
            <div className="absolute top-6 left-6 w-full h-full bg-[#fcf9f6] rounded-3xl -z-10 border border-[#f5ece5]" />
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <Image
                src="/about/who-we-are.jpg" // 👈 Replace with your image
                alt="Dubai Homes Team"
                fill
                className="object-cover"
              />
              {/* Optional subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
            </div>
          </div>

          {/* RIGHT SIDE: The Text Content */}
          <div className="lg:w-1/2">
            <h3 className={`${jakarta.className} text-3xl md:text-4xl font-medium text-[#111827] mb-6 leading-tight`}>
              Your trusted partner for <br className="hidden md:block" /> seamless ownership.
            </h3>
            
            <p className={`${inter.className} text-[#6b7280] text-[15px] md:text-[16px] leading-[1.8] mb-8`}>
              At Dubai Homes, we understand that owning a property in Dubai is more than just an investment; it's a milestone. For over a decade, we have been the silent force behind hundreds of satisfied landlords and effortless tenancies. 
            </p>
            
            <p className={`${inter.className} text-[#6b7280] text-[15px] md:text-[16px] leading-[1.8] mb-10`}>
              We bridge the gap between overseas investors and the dynamic Dubai real estate market. By combining local expertise with world-class concierge service, we ensure your asset is not only protected but is performing at its absolute maximum potential.
            </p>

            {/* Premium Stats Block */}
            <div className="border-l-2 border-[#b07e50] pl-6 space-y-6">
              <div>
                <p className={`${jakarta.className} text-4xl md:text-5xl font-semibold text-[#111827] mb-1`}>15+</p>
                <p className={`${inter.className} text-[#6b7280] text-[13px] font-medium uppercase tracking-widest`}>Years of Experience</p>
              </div>
              <div>
                <p className={`${jakarta.className} text-4xl md:text-5xl font-semibold text-[#111827] mb-1`}>500+</p>
                <p className={`${inter.className} text-[#6b7280] text-[13px] font-medium uppercase tracking-widest`}>Properties Managed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}