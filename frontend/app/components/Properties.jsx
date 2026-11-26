"use client";

import Image from "next/image";
import Link from "next/link";
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

const PROPERTIES = [
  {
    id: 1,
    title: "The Marina Penthouse",
    location: "Dubai Marina",
    price: "AED 12,500,000",
    beds: 4,
    baths: 5,
    area: "4,200 sq.ft",
    image: "/services/1.jpg", 
    tag: "Exclusive",
  },
  {
    id: 2,
    title: "Palm Jumeirah Villa",
    location: "Palm Jumeirah",
    price: "AED 28,000,000",
    beds: 6,
    baths: 7,
    area: "8,500 sq.ft",
    image: "/services/2.jpg",
    tag: "Signature",
  },
  {
    id: 3,
    title: "Downtown Skyline Loft",
    location: "Downtown Dubai",
    price: "AED 4,800,000",
    beds: 2,
    baths: 3,
    area: "1,850 sq.ft",
    image: "/services/3.jpg",
    tag: "New",
  },
  {
    id: 4,
    title: "Emirates Hills Estate",
    location: "Emirates Hills",
    price: "AED 45,000,000",
    beds: 7,
    baths: 8,
    area: "12,000 sq.ft",
    image: "/services/4.jpg",
    tag: "Ultra-Prime",
  },
  {
    id: 5,
    title: "Jumeirah Bay Island",
    location: "Jumeirah Bay",
    price: "AED 18,200,000",
    beds: 5,
    baths: 6,
    area: "6,000 sq.ft",
    image: "/services/2.jpg",
    tag: "Waterfront",
  },
  {
    id: 6,
    title: "DIFC Luxury Residence",
    location: "DIFC",
    price: "AED 7,500,000",
    beds: 3,
    baths: 4,
    area: "2,900 sq.ft",
    image: "/services/1.jpg",
    tag: "Investor Pick",
  },
];

export default function FeaturedListingsSection() {
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
      { threshold: 0.1 }
    );
    observer.observe(sectionElement);
    return () => observer.unobserve(sectionElement);
  }, [sectionElement]);

  return (
    <section
      ref={sectionRef}
      className={`${playfair.variable} ${inter.variable} relative w-full bg-white py-24 md:py-32 overflow-hidden`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#96683f]" />
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.2em] uppercase text-[#96683f]">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#111827] leading-[1.1] tracking-tight">
              Exclusive <span className="italic text-[#96683f]">Properties</span>
            </h2>
          </div>
          
          <Link 
            href="/properties"
            className={`${inter.className} group flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#111827] hover:text-[#96683f] transition-colors pb-2`}
          >
            View All Listings
            <div className="w-8 h-[1px] bg-[#111827] group-hover:bg-[#96683f] group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property, index) => (
            <Link 
              href={`/properties/${property.id}`} 
              key={property.id}
              className={`group flex flex-col bg-white transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm mb-5">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`${inter.className} bg-white/90 backdrop-blur-sm text-[#111827] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] rounded-sm`}>
                    {property.tag}
                  </span>
                </div>

                {/* Hover Action Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <div className="bg-white text-[#111827] w-12 h-12 rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="flex flex-col flex-grow">
                {/* Price & Location */}
                <div className="flex justify-between items-start mb-2">
                  <p className={`${inter.className} text-[#96683f] font-semibold text-lg`}>
                    {property.price}
                  </p>
                </div>
                
                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-[#111827] mb-1 group-hover:text-[#96683f] transition-colors duration-300">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 mb-5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className={`${inter.className} text-gray-500 text-sm`}>
                    {property.location}
                  </span>
                </div>

                {/* Divider */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  {/* Beds */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className={`${inter.className} text-gray-700 text-xs font-medium`}>{property.beds} Beds</span>
                  </div>
                  
                  {/* Baths */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className={`${inter.className} text-gray-700 text-xs font-medium`}>{property.baths} Baths</span>
                  </div>

                  {/* Area */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span className={`${inter.className} text-gray-700 text-xs font-medium`}>{property.area}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}