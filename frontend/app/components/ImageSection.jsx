"use client";

import { useEffect, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Popup from "./Popup";

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

export default function SnaggingParallaxSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionElement, setSectionElement] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const sectionRef = (node) => {
    if (node) setSectionElement(node);
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
    <>
      <section
        ref={sectionRef}
        className={`${playfair.variable} ${inter.variable} relative w-full overflow-hidden py-24 md:py-32 flex items-center justify-center`}
      >
        {/* ================= BACKGROUND (Parallax) ================= */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/image/image banner.png')" }}
          >
            {/* Strong dark overlay to ensure text readability over the image */}
            <div className="absolute inset-0 bg-[#0a0a0a]/50" />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div 
            className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            
            {/* LEFT SIDE: Editorial Content */}
            <div className="flex-1 max-w-3xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#96683f]" />
                <span className={`${inter.className} text-white text-[12px] font-bold uppercase tracking-[0.2em]`}>
                  Snagging & Handover
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-white leading-[1.15] tracking-tight mb-6">
                Independent Inspection <br className="hidden md:block" />
                <span className="italic ">Before You Accept The Keys</span>
              </h2>

              {/* Paragraph */}
              <p className={`${inter.className} text-white/70 text-[15px] md:text-[16px] leading-[1.8] max-w-2xl`}>
                A team of engineers, architects and technical inspectors carries out an engineering-based audit of your unit, documenting every defect with photographs and descriptions, then re-checking each one after it is fixed. Available for residential and commercial space.
              </p>
            </div>

            {/* RIGHT SIDE: Premium Price Box */}
            <div className="w-full lg:w-auto shrink-0">
              <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 text-center flex flex-col items-center justify-center min-w-[260px]">
                {/* Price */}
                <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-white/50 mb-2">
                  AED 1.50
                </p>
                
                {/* Subtext */}
                <p className={`${inter.className} text-white/50 text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium mb-8`}>
                  Per Sq. Ft.
                </p>

                {/* Button to trigger Popup */}
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className={`${inter.className} group relative w-full flex items-center justify-center gap-2 bg-[#96683f] hover:bg-[#855b36] text-white py-3.5 px-6 rounded-sm text-[12px] font-bold uppercase tracking-widest transition-all duration-300`}
                >
                  Book Inspection
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Render Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}