"use client";

import Link from "next/link";
import { useState } from "react";

import { Playfair_Display, Inter } from "next/font/google";
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
  variable: "--font-inter",
});

export default function CTASection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section
        className={`${playfair.variable} ${inter.variable} py-20 bg-white relative overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Floating Premium Panel */}
          <div className="relative bg-[#151310] rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] border border-white/5">
            {/* Ambient Bronze Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#96683f]/15 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#96683f]/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-12">
              {/* Left Side: Editorial Text */}
              <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-10 h-[1px] bg-[#96683f]" />
                  <span
                    className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}
                  >
                    Dubai Property Management
                  </span>
                </div>

                {/* 2. Applied Playfair Display with an italic accent */}
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.1] tracking-tight mb-6">
                  Ready to <br className="hidden md:block" />
                  hand over the{" "}
                  <span className="italic text-[#96683f]">keys?</span>
                </h2>

                <p
                  className={`${inter.className} text-white/60 text-[16px] leading-[1.75] max-w-xl`}
                >
                  Need professional property management services in Dubai you
                  can trust? Connect with our experienced property management
                  team to discuss your requirements.
                </p>
              </div>

              {/* Right Side: Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-[320px] shrink-0">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/971000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between w-full px-6 py-4 rounded-sm bg-[#96683f] text-white transition-all duration-300 hover:bg-[#855b36] hover:-translate-y-1 shadow-lg overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                  <div className="relative z-10 flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span
                      className={`${inter.className} font-semibold text-[14px] tracking-wide`}
                    >
                      Chat on WhatsApp
                    </span>
                  </div>
                  <svg
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                {/* Call Button */}
                <a
                  href="tel:+971000000000"
                  className="group relative flex items-center justify-between w-full px-6 py-4 rounded-sm bg-white/[0.03] border border-white/10 text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-[#96683f]/50 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span
                      className={`${inter.className} font-semibold text-[14px] tracking-wide`}
                    >
                      Call Us Directly
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#96683f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                {/* Message Button */}
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="group relative flex items-center justify-between w-full px-6 py-4 rounded-sm bg-white text-[#111827] transition-all duration-300 hover:bg-[#96683f] hover:text-white hover:-translate-y-1 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span
                      className={`${inter.className} font-semibold text-[14px] tracking-wide`}
                    >
                      Send a Message
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
