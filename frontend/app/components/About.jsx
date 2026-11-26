"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";

// Added Playfair Display for the elegant serif headings seen in the screenshot
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionElement, setSectionElement] = useState(null);

  const sectionRef = (node) => {
    if (node) setSectionElement(node);
  };

  useEffect(() => {
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionElement);

    return () => observer.unobserve(sectionElement);
  }, [sectionElement]);

  return (
    <section
    id="about"
      ref={sectionRef}
      className={`${plusJakarta.variable} ${inter.variable} ${playfair.variable} relative w-full bg-[#fcf9f6] py-20 md:py-28 overflow-hidden`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ---------- LEFT: CONTENT ---------- */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Eyebrow label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-[family-name:var(--font-plus-jakarta)] text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#96683f]">
                About Key Shore
              </span>
            </div>

            {/* Heading - Using Playfair Display for that premium serif look */}
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-black leading-[1.1] tracking-tight mb-8">
              LOCAL <span className="text-[#96683f]">KNOWLEDGE.</span> <br />
              GLOBAL <span className="text-[#96683f]">PERSPECTIVE.</span>
            </h2>

            {/* Paragraphs */}
            <div className="font-[family-name:var(--font-inter)] text-gray-500 text-sm md:text-base leading-relaxed space-y-4 mb-10">
              <p>
                Key Shore Real Estate is a Dubai-based brokerage built on trust, expertise, and a commitment to our clients.
              </p>
              <p>
                We provide tailored real estate solutions for individuals, investors, and families looking to buy, invest, or relocate in Dubai.
              </p>
              <p>
                Our focus is simple — understand your goals, guide you with clarity and help you make confident real estate decisions.
              </p>
            </div>
          </div>

          {/* ---------- RIGHT: LANDSCAPE IMAGE COMPOSITION ---------- */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-200 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* 
              Image Container with Gold Border Effect
              Using aspect-video for a perfect 16:9 landscape ratio
            */}
            <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden">
              
              {/* The actual image */}
              <Image
                src="/about/about-retina.webp" // 👈 Replace with your Dubai landscape image
                alt="Dubai Skyline with Museum of the Future"
                fill
                className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Dark gradient overlay to blend image slightly with dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Premium Gold Frame Border (Offset) */}
            <div className="absolute -inset-2 md:-inset-3 border border-[#d4af37]/50 pointer-events-none" />
            
            {/* Small Gold Accent Detail (top-right corner style) */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4af37]" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[#d4af37]" />

          </div>

        </div>
      </div>
    </section>
  );
}