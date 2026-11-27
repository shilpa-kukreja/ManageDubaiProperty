"use client";

import { useEffect, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter"
});

export default function ParallaxImageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionElement, setSectionElement] = useState(null);

  const sectionRef = (node) => {
    if (node) {
      setSectionElement(node);
    }
  };

  useEffect(() => {
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, [sectionElement]);

  return (
    <div
      ref={sectionRef}
      className={`${playfair.variable} ${inter.variable} relative w-full overflow-hidden h-[500px] md:h-[650px] flex items-center justify-center`}
    >
      {/* ================= BACKGROUND (Parallax) ================= */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/image/image banner.png')" }}
        >
          {/* Deepened the overlay slightly to make the white text pop more */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        {/* Premium Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 bg-[#96683f]" />
          <span className="font-[family-name:var(--font-inter)] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#96683f]">
            Premium Properties in Dubai
          </span>
          <span className="h-[1px] w-8 bg-[#96683f]" />
        </div>

        {/* Serif Heading with Italic Accent */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-[1.15] tracking-tight drop-shadow-xl">
          Discover Your Ideal <br className="hidden md:block" />
          <span className="italic text-[#96683f]">Home in Dubai </span>
        </h1>

        {/* Clean Subtext */}
        <p className="font-[family-name:var(--font-inter)] text-white/80 text-sm md:text-lg mb-10 max-w-2xl font-light tracking-wide leading-relaxed">
          Explore exceptional residential properties in Dubai that bring together modern design, everyday comfort and desirable locations. 
        </p>

        {/* Premium Button (Bronze) */}
        <button className="group relative font-[family-name:var(--font-inter)] bg-[#96683f] hover:bg-[#855b36] text-white text-sm md:text-base font-semibold py-4 px-10 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-xl overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            View Properties
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          {/* Subtle shine effect on hover */}
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
      </div>
    </div>
  );
}