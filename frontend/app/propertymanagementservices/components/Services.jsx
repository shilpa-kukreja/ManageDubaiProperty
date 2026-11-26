"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import Popup from "./Popup"; // 👈 1. Import Popup

// 1. Initialize Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"] 
});

const SERVICES = [
  {
    id: "01",
    title: "Prequalifying Tenants",
    subtitle: "Screening before they sign",
    description: "Verification of passport and residency status. Verification of employment, funds and banking history. Processing of all tenant documentation. Security deposit collection. Ejari registration and validation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Managing Tenants",
    subtitle: "Your day-to-day point of contact",
    description: "Your tenants and property are handled wherever in the world you are. Our team communicates directly with tenants on any concern. Full accounting handled on your behalf. Periodic updates whenever regulations change.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Property Snagging",
    subtitle: "Get exactly what you paid for",
    description: "Independent inspection for new property owners before you accept handover. Available for both residential and commercial spaces. Every defect logged with photos and descriptions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Maintenance & Repairs",
    subtitle: "Asset Preservation Service",
    description: "Maintenance requests coordinated directly with your tenants. Preventative maintenance planned on a regular schedule. 24/7 licensed maintenance provider for routine checks or emergencies. Tailored to the specific needs of your property.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Property Handover",
    subtitle: "From title transfer to keys",
    description: "Assistance with property title transfer when buying or selling. Comprehensive snagging service carried out at handover. Engineering-based audit by engineers, architects and technical inspectors. Defect reports with images showing status before and after treatment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Property Marketing",
    subtitle: "Maximum exposure, faster lets",
    description: "Listings created and managed to drive serious lead generation. Promoted across Google Ads, Instagram, Facebook, X and email campaigns. UHD photography, professional films and 360° virtual tours. Syndicated to Property Finder, Bayut and Dubizzle.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Performance Reporting",
    subtitle: "Full transparency, always",
    description: "Clear communication on the status of your listing or property. Maintenance reports delivered as work is completed. Payment proofs and recent transaction data. Market performance insights for your unit.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    id: "08",
    title: "Rent Collection",
    subtitle: "On time, every time",
    description: "Never miss a rent collection again — we handle it for you. You choose the payment intervals, typically two or four cheques a year. Forward-dated cheques deposited into your account on schedule.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function WhatsIncluded() {
  const [openId, setOpenId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 👈 2. Add popup state

  const toggleService = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section id="whats-included" className={`${playfair.variable} ${inter.variable} py-8 md:py-12 bg-[#fcfbf9]`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* ================= CENTERED HEADER ================= */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1px] w-8 bg-[#96683f]" />
              <span className={`${inter.className} text-[#96683f] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em]`}>
                What's Included
              </span>
              <span className="h-[1px] w-8 bg-[#96683f]" />
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-[#111827] leading-[1.15] tracking-tight mb-4">
              Everything We <span className="italic text-[#96683f]">Handle For You</span>
            </h2>

            <p className={`${inter.className} text-[#6b7280] text-[15px] md:text-base leading-relaxed`}>
              Tap any service to see exactly what it covers.
            </p>
          </div>

          {/* ================= 2-COLUMN ACCORDION GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 items-start">
            {SERVICES.map((service) => {
              const isOpen = openId === service.id;

              return (
                <div 
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`group flex flex-col bg-white border cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${
                    isOpen 
                      ? "border-[#96683f]/40 shadow-[0_4px_20px_-4px_rgba(150,104,63,0.1)]" 
                      : "border-[#e5e7eb] shadow-sm hover:border-[#d6c4b0]"
                  }`}
                >
                  {/* Accordion Header (Always Visible) */}
                  <div className="flex items-center gap-4 p-5">
                    {/* Icon Square */}
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-[#96683f] text-white" : "bg-[#fcf9f6] text-[#96683f]"
                    }`}>
                      {service.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-playfair)] text-[17px] md:text-lg font-semibold text-[#111827] mb-0.5">
                        {service.title}
                      </h3>
                      <p className={`${inter.className} text-[#6b7280] text-[13px]`}>
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Plus / Minus Indicator */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-[#96683f] text-white rotate-45" : "bg-[#f3f4f6] text-[#6b7280]"
                    }`}>
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>

                  {/* Accordion Body (Expands on Click) */}
                  <div 
                    className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-2">
                      <p className={`${inter.className} text-[#4b5563] text-[14px] leading-[1.7] border-t border-gray-100 pt-4`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 👈 3. Add Popup Button below the grid */}
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setIsPopupOpen(true)} 
              className="group relative flex items-center justify-center h-[48px] px-8 rounded-sm bg-[#96683f] hover:bg-[#855b36] transition-all duration-300 text-white hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              <span className={`${inter.className} text-[13px] font-bold uppercase tracking-widest`}>
                Schedule a Consultation
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* 👈 4. Render the Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}