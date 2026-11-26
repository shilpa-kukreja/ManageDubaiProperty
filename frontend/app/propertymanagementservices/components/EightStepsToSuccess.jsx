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
    number: "01",
    title: "Property Inspection",
    description:
      "Engineers, architects and technical inspectors examine the building, assess its physical condition and prepare a written report.",
  },
  {
    number: "02",
    title: "Market Valuation",
    description:
      "You receive professional advice on repairs, replacements, improvements and likely future problems that might otherwise create financial exposure.",
  },
  {
    number: "03",
    title: "Professional Marketing",
    description:
      "Each defect is captured with photographs and explanations, and its status is recorded both before and after it is fixed.",
  },
  {
    number: "04",
    title: "Tenant Screening",
    description:
      "Every inspection runs through our own Oracle-based inspection app, designed in-house to deliver accurate, real-time reporting.",
  },
  {
    number: "05",
    title: "Lease Negotiation",
    description:
      "Approved members of the developer’s team can browse the complete library of defect photos and descriptions.",
  },
  {
    number: "06",
    title: "Ejari & Compliance",
    description:
      "When the inspection ends, we issue a full condition report for your files.",
  },
 
];

export default function EightStepsToSuccess() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Applied font variables to the section */}
      <section
        className={`${playfair.variable} ${inter.variable} py-20 bg-[#151310] relative overflow-hidden selection:bg-[#96683f] selection:text-white`}
      >
        {/* Subtle Ambient Light */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#96683f]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* LEFT SIDE: Sticky Editorial Header */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#96683f]" />
                <span
                  className={`${inter.className} text-[#96683f] text-[12px] font-semibold uppercase tracking-[0.12em]`}
                >
                  Built for Developers
                </span>
              </div>

              {/* 2. Applied Playfair to Main Heading */}
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.15] tracking-tight mb-6">
                Snagging Solutions for{" "}
                <span className="italic text-[#96683f]">Developers</span>
              </h2>

              <p
                className={`${inter.className} text-[#ffffff]/60 text-[16px] leading-[1.75] mb-8 max-w-md`}
              >
                A successful project handover starts with careful assessment and
                inspection. Once construction reaches substantial completion, a
                complete snagging and handover inspection helps you accept the
                development from the contractor in the best possible state.
              </p>

              

              {/* Button */}
              <div>
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className={`inline-flex items-center justify-center h-[48px] px-8 rounded-sm bg-[#96683f] hover:bg-[#855b36] transition-colors ${inter.className} text-[13px] font-semibold text-white uppercase tracking-wider`}
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: The Grid */}
            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
                {STEPS.map((step, index) => (
                  <div key={index} className="group relative flex flex-col">
                    {/* Top accent line that expands on hover */}
                    <div className="w-full h-[1px] bg-[#ffffff]/10 mb-6 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-0 bg-[#96683f] transition-all duration-500 ease-out group-hover:w-full" />
                    </div>

                    <div className="flex items-baseline gap-4 mb-3">
                      {/* 3. Applied Playfair to Numbers */}
                      <span className="font-[family-name:var(--font-playfair)] text-[28px] font-medium text-[#ffffff]/20 transition-colors duration-300 group-hover:text-[#96683f]">
                        {step.number}
                      </span>

                      {/* 4. Applied Playfair to Step Titles */}
                      {/* <h3 className="font-[family-name:var(--font-playfair)] text-[20px] font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-[#96683f]">
                        {step.title}
                      </h3> */}
                    </div>

                    {/* Description */}
                    <p
                      className={`${inter.className} text-[#ffffff]/55 text-[15px] leading-[1.7] transition-colors duration-300 group-hover:text-[#ffffff]/80`}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
