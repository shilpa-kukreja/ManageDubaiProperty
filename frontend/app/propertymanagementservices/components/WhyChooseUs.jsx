"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import Popup from "./Popup";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-inter"
});

export default function OverviewSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const features = [
    {
      title: "Rent That Arrives Late",
      description: "Following up on payments from a different time zone takes effort and leaves your income unpredictable.",
      iconSrc: "/overview/1.png", 
    },
    {
      title: "Surprise Repair Bills ",
      description: "A slow drip goes unnoticed for weeks, then turns into a costly fix because nobody was there to spot it.",
      iconSrc: "/overview/2.png",
    },
    {
      title: "Compliance and Paperwork ",
      description: "Ejari registration, tenancy agreements and RERA rules leave very little room for mistakes.",
      iconSrc: "/overview/3.png",
    },
    {
      title: "Owning From a Distance ",
      description: "Living overseas makes it hard to oversee viewings, key handovers and tenant requests.",
      iconSrc: "/overview/4.png",
    },
  ];

  return (
    /* 👈 1. Added the id="overview" here */
    <section id="whychooseus" className={`${playfair.variable} ${inter.variable} py-12 bg-[#ffffff] scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 lg:max-w-md flex flex-col justify-center">
            <div className="inline-flex mb-8">
              <span className={`${inter.className} bg-[#fcf9f6] text-[#96683f] px-4 py-1.5 rounded text-[13px] font-medium tracking-wide`}>
                Common Pain Points
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[2.75rem] font-medium text-[#111827] leading-[1.15] mb-6 tracking-tight">
              Why Going It Alone Costs Landlords More
            </h2>

            <p className={`${inter.className} text-[#6b7280] text-[15px] leading-relaxed mb-10`}>
              Many landlords don’t realise how much work a rental creates. Left unattended, minor problems grow into expensive ones before anyone notices.
            </p>

            {/* Button */}
            <div>
              <button 
                onClick={() => setIsPopupOpen(true)} 
                className="group relative flex h-[48px] w-[190px] [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-transform duration-500">
                  
                  {/* Front Face */}
                  <div className={`absolute inset-0 flex items-center justify-center rounded-sm bg-[#b07e50] [backface-visibility:hidden] ${inter.className} text-[12px] font-bold uppercase tracking-widest text-[#ffffff]`}>
                    Schedule a Visit
                  </div>

                  {/* Back Face */}
                  <div className={`absolute inset-0 flex items-center justify-center rounded-sm bg-[#96683f] [backface-visibility:hidden] [transform:rotateX(180deg)] ${inter.className} text-[12px] font-bold uppercase tracking-widest text-[#ffffff]`}>
                    Schedule a Visit
                  </div>
                  
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-6 h-16 flex items-end rounded-full">
                  <Image 
                    src={feature.iconSrc} 
                    alt={feature.title} 
                    width={60} 
                    height={60} 
                    className="object-contain" 
                  />
                </div>
                
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#111827] mb-3">
                  {feature.title}
                </h3>
                
                <p className={`${inter.className} text-[#6b7280] text-[15px] leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}