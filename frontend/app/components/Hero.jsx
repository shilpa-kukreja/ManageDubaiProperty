"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

// 1. Initialize Fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const HERO_IMAGES = [
  "/hero/01.png",
  "/hero/hero.webp",
  // "/hero/hero-3.jpg",
];

const CONTACT_LINKS = [
  {
    label: "+971 55 509 9157",
    href: "tel:+971555099157",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp us",
    href: "https://wa.me/971555099157",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "managedubaiproperty@gmail.com",
    href: "mailto:managedubaiproperty@gmail.com",
    icon: (
      <svg
        width="16"
        height="16"
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
    ),
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* Apply the font variables to the main wrapper */
    <section
      className={`${inter.variable} ${playfair.variable} relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111827]`}
    >
      {/* ================= CAROUSEL BACKGROUND ================= */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Dubai Property ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* GRADIENT OVERLAYS */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0" /> */}

      {/* ================= MIDDLE CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          {/* Left Side: Heading + Subtext */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#96683f]" />
              <span
                className={`${inter.className} text-[#96683f] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em]`}
              >
                Professional Property Management Services in &middot; Dubai
              </span>
            </div>
            {/* Main Heading using Playfair Display */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[4rem] font-medium text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
              Professional Property Management in Dubai,{" "}
              <span className="italic text-[#96683f]">
                Your Property, Our Responsibility
              </span>
            </h1>

            {/* Subtext */}
            <p
              className={`${inter.className} text-white/70 text-[15px] md:text-lg leading-relaxed max-w-2xl mb-10`}
            >
              Own a property in Dubai but don't have the time to manage it
              yourself? Our professional Dubai property management services make
              property ownership simple, convenient and stress-free. From tenant
              screening and rent collection to property maintenance, snagging
              inspections and financial reporting, we take care of every detail.
            </p>

            {/* Contact Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              {CONTACT_LINKS.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className={`${inter.className} group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] md:text-[14px] font-semibold transition-all duration-300 ${
                    contact.primary
                      ? "bg-[#96683f] text-white hover:bg-[#855b36] shadow-lg"
                      : "bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40"
                  }`}
                >
                  <span
                    className={`${contact.primary ? "text-white" : "text-[#96683f]"}`}
                  >
                    {contact.icon}
                  </span>
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FLOATING BOTTOM BOOKING BAR ================= */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:flex w-full h-[80px] bg-[#111827]/30 backdrop-blur-md border-t border-white/10">
        {/* Location */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium">
           Dubai Property Management
          </span>
          <div
            className={`flex justify-between items-center text-white text-[16px] font-medium ${inter.className}`}
          >
            <span>19+ Years of Experience</span>
          </div>
        </div>

        {/* Property Type */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium">
            Fully Compliant Property Management
          </span>
          <div
            className={`flex justify-between items-center text-white text-[16px] font-medium ${inter.className}`}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#e1c8b4]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span>RERA Registered – 1162</span>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium">
            Professional Maintenance Support
          </span>
          <div
            className={`flex justify-between items-center text-white text-[16px] font-medium ${inter.className}`}
          >
            <span>24/7 Tenant Support</span>
          </div>
        </div>

        {/* Budget */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium">
            119 Google reviews
          </span>
          <div
            className={`flex justify-between items-center text-white text-[16px] font-medium ${inter.className}`}
          >
            <span>4.5-Star Rating</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-[200px]">
          <button
            href="/contact"
            className={`${inter.className} w-full h-full bg-[#b07e50] text-white text-[16px] font-semibold hover:bg-[#96683f] transition-colors duration-300`}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
