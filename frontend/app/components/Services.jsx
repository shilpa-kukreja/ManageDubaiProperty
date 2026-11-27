"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { useState, useEffect } from "react";

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

const SERVICES = [
  {
    id: "01",
    title: "Property Management",
    description: "End-to-end management of your asset. We handle tenant sourcing, rent collection, and 24/7 maintenance so you can enjoy passive income.",
    image: "/services/1.jpg", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Sales & Acquisitions",
    description: "Whether you are buying your first home or expanding your portfolio, our experts provide data-driven advice to secure the best assets.",
    image: "/services/2.jpg", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Holiday Homes",
    description: "Maximize your short-term rental yields with our premium holiday home management. From dynamic pricing to guest concierge services.",
    image: "/services/3.jpg", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Investment Advisory",
    description: "Strategic guidance for optimal ROI. We analyze market trends, projected capital appreciation, and rental yields to build your wealth.",
    image: "/services/4.jpg", 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
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
      { threshold: 0.15 }
    );
    observer.observe(sectionElement);
    return () => observer.unobserve(sectionElement);
  }, [sectionElement]);

  return (
    <section
       id="services"
      ref={sectionRef}
      className={`${playfair.variable} ${inter.variable} relative w-full bg-[#fcf9f6] py-8 md:py-12 overflow-hidden`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-bl from-[#96683f]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[400px] bg-gradient-to-tr from-[#96683f]/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#96683f]" />
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase text-[#96683f]">
                Our Property Management Expertise
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] tracking-tight">
              Premium Services. <br />
              <span className="italic text-[#96683f]">Exceptional Results.</span>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
            We offer professional property management services in Dubai designed to simplify property ownership and protect your real estate investment. 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group relative border border-black/10 transition-all duration-700 ease-out flex flex-col justify-end min-h-[400px] cursor-pointer overflow-hidden rounded-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>

              {/* Normal State Overlay (Subtle, keeps image clear) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover State Overlay (Strong, makes text pop) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Gold Top Border (Animated on hover) */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#96683f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-20" />

              {/* Content Container */}
              <div className="relative z-20 p-6 md:p-8 w-full">
                
                {/* Number (Top Right) */}
                <span className="absolute top-6 right-6 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white/30 group-hover:text-[#96683f] transition-colors duration-500">
                  {service.id}
                </span>

                {/* Icon (Only visible on hover) */}
                <div className="text-[#96683f] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mb-4">
                  {service.icon}
                </div>

                {/* Title (Always visible) */}
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h3>

                {/* Description & Link (Hidden by default, slide up on hover) */}
                <div className="overflow-hidden">
                  <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="font-[family-name:var(--font-inter)] text-gray-300 text-[14px] leading-relaxed mb-6 pt-2">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-[#96683f]">
                        Discover More
                      </span>
                      <svg className="w-4 h-4 text-[#96683f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}