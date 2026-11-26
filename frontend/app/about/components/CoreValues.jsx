"use client";

import { Playfair_Display, Inter } from "next/font/google";

// 1. Initialize Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const VALUES = [
  {
    title: "Absolute Transparency",
    description:
      "No hidden fees, no vague reports. You get itemized monthly statements, photo documentation, and a direct line to your account manager.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    title: "Uncompromising Trust",
    description:
      "We treat your property as if it were our own. From rigorous tenant vetting to secure rent collection, your asset is in safe hands.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    description:
      "With 15+ years in the Dubai market, our knowledge of area trends, RERA laws, and pricing strategies is unmatched.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "24/7 Peace of Mind",
    description:
      "From midnight plumbing emergencies to AC breakdowns in summer, our maintenance team is always on standby.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function CoreValues() {
  return (
    /* Applied font variables to the section */
    <section className={`${playfair.variable} ${inter.variable} py-20 md:py-28 bg-[#fcfbf9] relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#96683f]" />
            <span className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
              Our Values
            </span>
            <span className="w-8 h-[1px] bg-[#96683f]" />
          </div>
          
          {/* 2. Applied Playfair to Main Heading */}
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-[#111827] leading-[1.15] tracking-tight">
            The principles that <span className="italic text-[#96683f]">guide us</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-7 border border-[#e5e7eb] hover:border-[#96683f]/40 hover:shadow-[0_8px_30px_-12px_rgba(150,104,63,0.15)] transition-all duration-300 flex flex-col"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-7 right-7 h-[2px] bg-gradient-to-r from-transparent via-[#96683f]/0 to-transparent transition-all duration-300 group-hover:via-[#96683f]" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#faf7f3] border border-[#f0e7dc] flex items-center justify-center text-[#96683f] mb-6 transition-colors duration-300 group-hover:bg-[#96683f] group-hover:text-white group-hover:border-[#96683f]">
                {value.icon}
              </div>

              {/* 3. Applied Playfair to Card Titles */}
              <h3 className="font-[family-name:var(--font-playfair)] text-[19px] font-semibold text-[#111827] tracking-tight mb-2.5 transition-colors duration-300 group-hover:text-[#96683f]">
                {value.title}
              </h3>

              {/* Description */}
              <p className={`${inter.className} text-[#6b7280] text-[14px] leading-[1.7]`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}