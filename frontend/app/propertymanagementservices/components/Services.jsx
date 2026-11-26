"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import Popup from "./Popup";

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

const STEPS = [
  {
    number: "01",
    title: "Tenant Screening ",
    description: "Verification of passport and residency status. Verification of employment, funds and banking history. Processing of all tenant documentation. Security deposit collection. Ejari registration and validation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tenant Relations ",
    description: "Your tenants and property are handled wherever in the world you are. Our team communicates directly with tenants on any concern .Full accounting handled on your behalf. Periodic updates whenever regulations change.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Snagging Inspections ",
    description: "Independent inspection for new property owners before you accept handover. Available for both residential and commercial spaces. Every defect logged with photos and descriptions",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Maintenance & Repairs ",
    description: "Maintenance requests coordinated directly with your tenants. Preventative maintenance planned on a regular schedule. 24/7 licensed maintenance provider for routine checks or emergencies. Tailored to the specific needs of your property",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
   {
    number: "05",
    title: "Handover Support",
    description: "Assistance with property title transfer when buying or selling. Comprehensive snagging service carried out at handover. Engineering-based audit by engineers, architects and technical inspectors. Defect reports with images showing status before and after treatment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Property Marketing ",
    description: "Listings created and managed to drive serious lead generation. Promoted across Google Ads, Instagram, Facebook, X and email campaigns. UHD photography, professional films and 360° virtual tours. Syndicated to Property Finder, Bayut and Dubizzle",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Owner Reporting",
    description: "Clear communication on the status of your listing or property. Maintenance reports delivered as work is completed. Payment proofs and recent transaction data. Market performance insights for your unit",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Rent Collection",
    description: "Never miss a rent collection again — we handle it for you. You choose the payment intervals, typically two or four cheques a year. Forward-dated cheques deposited into your account on schedule",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Applied font variables to the section */}
      <section id="services" className={`${playfair.variable} ${inter.variable} py-16 bg-[#fcf9f6]`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#96683f]" />
              <span className={`${inter.className} text-[#96683f] text-[11px] font-medium uppercase tracking-[0.15em]`}>
                Our Services
              </span>
              <span className="w-6 h-[1px] bg-[#96683f]" />
            </div>
            
            {/* 2. Applied Playfair to Main Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-7xl md:text-[2.5rem] font-medium text-[#111827] leading-[1.15] tracking-tight mb-4">
              A Complete Service, Handled End to End
            </h2>
            
            {/* <p className={`${inter.className} text-[#6b7280] text-sm md:text-[15px] leading-relaxed max-w-lg`}>
              A seamless, transparent process from the first conversation to the day you receive your rental income.
            </p> */}
          </div>

          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {STEPS.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col border border-gray-300 p-6 rounded-xl bg-transparent hover:bg-white transition-colors duration-300">
                {/* Icon Block */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#f0e8e0] flex items-center justify-center text-[#96683f] shadow-sm">
                    {step.icon}
                  </div>
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-gray-200">
                    {step.number}
                  </span>
                </div>

                {/* 3. Applied Playfair to Step Titles */}
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#111827] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`${inter.className} text-[#6b7280] text-[13px] leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsPopupOpen(true)}
              className={`inline-flex items-center justify-center h-[48px] px-8 rounded-md bg-[#96683f] hover:bg-[#855b36] transition-colors ${inter.className} text-[13px] font-semibold text-[#ffffff] uppercase tracking-wider`}
            >
              Schedule a Consultation
            </button>
          </div>

        </div>
      </section>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}