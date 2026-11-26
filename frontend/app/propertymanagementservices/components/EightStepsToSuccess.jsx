"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import Popup from "./Popup";

// 1. Initialize Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const STEPS = [
  {
    number: "1",
    description:
      "Engineers, architects and technical inspectors research, evaluate and report on the physical condition of your property.",
  },
  {
    number: "2",
    description:
      "Expert recommendations for repairs, replacements, upgrades and predicted concerns that could expose you to financial risk.",
  },
  {
    number: "3",
    description:
      "Every defect documented with images and explanations, plus the latest status of each fault before and after correction.",
  },
  {
    number: "4",
    description:
      "Inspections run on our Oracle-based inspection app, built in-house for precise real-time reporting.",
  },
  {
    number: "5",
    description:
      "Authorised developer team members get access to the full database of defect images and descriptions.",
  },
  {
    number: "6",
    description:
      "A comprehensive condition report is issued for your records once the inspection is complete.",
  },
];

export default function DeveloperSnagging() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className={`${playfair.variable} ${inter.variable} py-8 md:py-12 bg-white relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* ================= CENTERED HEADER ================= */}
          <div className="flex flex-col max-w-3xl mb-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#96683f]" />
              <span className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
                For Developers
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-[#111827] leading-[1.15] tracking-tight mb-6">
              Snagging Service <span className="italic text-[#96683f]">For Developers</span>
            </h2>

            {/* Subtext */}
            <p className={`${inter.className} text-[#4b5563] text-[15px] md:text-lg leading-relaxed max-w-2xl mb-8`}>
              Delivering a new development relies on thorough appraisal and inspection. At substantial completion, a full snagging and handover inspection makes sure you receive the development from your contractor in the best possible condition.
            </p>

            {/* Button */}
            <div>
              <button
                onClick={() => setIsPopupOpen(true)}
                className={`inline-flex items-center justify-center h-[48px] px-8 rounded-sm bg-[#96683f] hover:bg-[#855b36] transition-colors ${inter.className} text-[13px] font-semibold text-white uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300`}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* ================= 3-COLUMN CARD GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step, index) => (
              <div 
                key={index}
                className="group bg-white border border-[#e5e7eb] rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_8px_30px_-12px_rgba(150,104,63,0.15)] hover:-translate-y-1 hover:border-[#96683f]/30"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-md bg-[#96683f] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <span className={`${inter.className} text-white text-[15px] font-bold`}>
                    {step.number}
                  </span>
                </div>

                {/* Description */}
                <p className={`${inter.className} text-[#6b7280] text-[15px] leading-[1.7]`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}