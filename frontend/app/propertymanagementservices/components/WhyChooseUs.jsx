"use client";

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
      title: "Late Or Missed Rent",
      description: "Chasing payments across time zones eats your time and your cash flow.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Unexpected Repairs",
      description: "A small leak becomes a big bill when nobody is on the ground to catch it.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      title: "Legal Paperwork",
      description: "Ejari, tenancy contracts and RERA compliance are easy to get wrong.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Managing From Abroad",
      description: "Overseas owners lose control of viewings, handovers and tenant issues.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="whychooseus" className={`${playfair.variable} ${inter.variable} py-8 md:py-12 bg-white scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ================= CENTERED HEADER ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#96683f]" />
            <span className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
              The Problem
            </span>
            <span className="h-[1px] w-8 bg-[#96683f]" />
          </div>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-[#111827] leading-[1.15] tracking-tight mb-6">
            Why Owners <span className="italic text-[#96683f]">Need A Manager</span>
          </h2>

          {/* Subtext */}
          <p className={`${inter.className} text-[#6b7280] text-[15px] md:text-lg leading-relaxed max-w-2xl`}>
            Most owners underestimate how demanding management is. Small issues turn into costly ones fast when nobody is watching.
          </p>
        </div>

        {/* ================= 4-COLUMN CARD GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white border border-[#e5e7eb] rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(150,104,63,0.15)] hover:-translate-y-1"
            >
              {/* Icon Container - Soft rounded square matching the reference */}
              <div className="w-12 h-12 rounded-2xl bg-[#f9f4f2] flex items-center justify-center mb-6 text-[#c08575] group-hover:bg-[#f4e8e5] transition-colors duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-[19px] font-semibold text-[#111827] mb-2.5">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className={`${inter.className} text-[#6b7280] text-[14px] leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA BUTTON ================= */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => setIsPopupOpen(true)} 
            className="group relative flex items-center justify-center h-[48px] px-8 rounded-sm bg-[#96683f] hover:bg-[#855b36] transition-colors duration-300 text-white"
          >
            <span className={`${inter.className} text-[12px] font-bold uppercase tracking-widest`}>
              Schedule a Visit
            </span>
          </button>
        </div>

      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}