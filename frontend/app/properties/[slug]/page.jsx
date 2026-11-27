"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { useParams, notFound } from "next/navigation";
import { PROPERTIES } from "../data";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

export default function PropertyDetailsPage() {
  const params = useParams();
  const { slug } = params;

  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    return notFound(); 
  }

  return (
    <>
      <Navbar />
      <main className={`${playfair.variable} ${inter.variable} bg-[#fcfbf9] min-h-screen  pt-24`}>
        
        {/* ================= HERO SECTION (Floating Image) ================= */}
        <section className="relative max-w-9xl mx-auto px-4 md:px-8 ">
          
          <div className="relative w-full h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                
                <div className="max-w-3xl">
                  {/* Breadcrumb */}
                  <div className={`${inter.className} flex items-center gap-2 text-white/60 text-[13px] mb-6`}>
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/properties" className="hover:text-white transition-colors">Properties</Link>
                    <span>/</span>
                    <span className="text-white">{property.title}</span>
                  </div>

                  {/* Tag */}
                  <span className={`${inter.className} inline-block bg-[#96683f] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] rounded-sm mb-4`}>
                    {property.tag}
                  </span>
                  
                  {/* Title */}
                  <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-4">
                    {property.title}
                  </h1>
                  
                  {/* Location */}
                  <div className="flex items-center gap-2 text-white/80">
                    <svg className="w-5 h-5 text-[#96683f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className={`${inter.className} text-base md:text-lg`}>{property.location}</span>
                  </div>
                </div>
                
                {/* Floating Price Box */}
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 p-6 rounded-xl shrink-0">
                  <p className={`${inter.className} text-white/60 text-[11px] uppercase tracking-[0.2em] mb-1`}>Asking Price</p>
                  <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white font-semibold">
                    {property.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DETAILS SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT COLUMN: Description & Features (Spans 8 columns) */}
            <div className="lg:col-span-8">
              
              {/* Overview */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-[#96683f]" />
                  <h2 className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
                    The Overview
                  </h2>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-[#111827] leading-[1.2] mb-6">
                  A closer look at <span className="italic text-[#96683f]">{property.title}</span>
                </h3>
                <p className={`${inter.className} text-[#4b5563] text-[16px] md:text-[17px] leading-[1.8]`}>
                  {property.description}
                </p>
              </div>

              {/* Features Grid */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-[#96683f]" />
                  <h2 className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
                    Amenities
                  </h2>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-[#111827] mb-8">
                  Key Features
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-[#e5e7eb] shadow-sm hover:border-[#96683f]/30 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-[#fcf9f6] flex items-center justify-center text-[#96683f] shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className={`${inter.className} text-[#111827] font-medium text-[15px]`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Sidebar (Spans 4 columns) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                
                {/* Quick Stats Card */}
                <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-8">
                    Property Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className={`${inter.className} text-gray-500 font-medium`}>Bedrooms</span>
                      </div>
                      <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#111827]">{property.beds}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className={`${inter.className} text-gray-500 font-medium`}>Bathrooms</span>
                      </div>
                      <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#111827]">{property.baths}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span className={`${inter.className} text-gray-500 font-medium`}>Area</span>
                      </div>
                      <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#111827]">{property.area}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Agent Card */}
                <div className="relative bg-[#151310] rounded-2xl p-8 overflow-hidden shadow-2xl">
                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#96683f]/20 blur-[60px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="relative z-10">
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-2">
                      Interested in this property?
                    </h3>
                    <p className={`${inter.className} text-white/60 text-sm leading-relaxed mb-6`}>
                      Contact our dedicated agent to schedule a private viewing or request more information.
                    </p>
                    <button className={`${inter.className} w-full bg-[#96683f] hover:bg-[#855b36] text-white py-4 px-6 rounded-sm text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 shadow-lg`}>
                      Contact Agent
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}