"use client";

import Image from "next/image";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[50vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[#151310]">
      
      {/* Desktop Banner */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/about/banner.jpg" // 👈 Replace with your image
          alt="About Dubai Homes"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Mobile Banner */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/about/about-banner-mobile.jpg" // 👈 Replace with your image
          alt="About Dubai Homes Mobile"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlays for text readability and Navbar visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-0" />
      
      {/* Center Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <div className="inline-flex items-center gap-3 mb-4 justify-center">
          <span className="w-8 h-[1px] bg-[#b07e50]" />
          <span className={`${inter.className} text-[#b07e50] text-[12px] font-bold uppercase tracking-[0.2em]`}>
            Our Story
          </span>
          <span className="w-8 h-[1px] bg-[#b07e50]" />
        </div>
        <h1 className={`${jakarta.className} text-4xl md:text-5xl lg:text-7xl font-medium text-[#ffffff] leading-[1.1] tracking-tight`}>
          Redefining property <br className="hidden md:block" /> management.
        </h1>
      </div>
    </section>
  );
}