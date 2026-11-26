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
  "/hero/hero.webp",
  // "/hero/hero-2.jpg",
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
    label: "info@binayah.com",
    href: "mailto:info@binayah.com",
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
    <section className={`${inter.variable} ${playfair.variable} relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111827]`}>
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0" />

      {/* ================= MIDDLE CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          {/* Left Side: Heading + Subtext */}
          <div className="max-w-3xl">
            {/* Main Heading using Playfair Display */}
            <h1
              className="font-[family-name:var(--font-playfair)] font-medium text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight mb-6"
            >
              Your Dubai Property, Expertly Looked After While You Get On With Life
            </h1>
            <p
              className={`${inter.className} text-white/70 text-[16px] md:text-[17px] leading-[1.7] max-w-xl mb-8`}
            >
              From finding and vetting tenants to collecting rent, inspecting units, arranging repairs and sending clear reports, Binayah runs the daily work so your property stays let, legally in order and earning steadily, whether you are in Dubai or on another continent.
            </p>

            {/* Contact quick links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`${inter.className} group inline-flex items-center gap-2 text-white/85 hover:text-[#e1c8b4] text-[14px] font-medium transition-colors duration-300`}
                >
                  <span className="text-[#e1c8b4] group-hover:text-white transition-colors duration-300">
                    {c.icon}
                  </span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Address & Buttons */}
          <div className="flex flex-col items-start lg:items-end shrink-0 pb-2">
            <p
              className={`${inter.className} text-[14px] text-white/75 mb-6 tracking-wide`}
            >
              320 40th Street B4, Dubai, UAE 10019
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Button 1: Schedule a Visit */}
              <Link
                href="/propertymanagementservices#consulation"
                className={`${inter.className} inline-flex items-center justify-center h-[46px] px-6 rounded-lg bg-[#b07e50] text-white text-[14px] font-semibold hover:bg-[#96683f] transition-colors duration-300`}
              >
                Schedule a Visit
              </Link>

              {/* Button 2: Explore Property */}
              <Link
                href="/propertymanagementservices#services"
                className={`${inter.className} inline-flex items-center justify-center h-[46px] px-6 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white text-[14px] font-semibold hover:bg-white hover:text-[#111827] hover:border-white transition-colors duration-300`}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FLOATING BOTTOM BOOKING BAR ================= */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden lg:flex w-full h-[80px] bg-[#111827]/30 backdrop-blur-md border-t border-white/10">
        {/* Location */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span
            className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium"
          >
            Years of Dubai property management experience
          </span>
          <div
            className={`flex justify-between items-center text-white text-[16px] font-medium ${inter.className}`}
          >
            <span>Since 2007</span>
          </div>
        </div>

        {/* Property Type */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span
            className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium"
          >
            Licensed and fully compliant
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
              <span>RERA 1162</span>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span
            className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium"
          >
            Licensed maintenance on call
          </span>
          <div
            className={`flex justify-between items-center text-white text-[16px] font-medium ${inter.className}`}
          >
            <span>24/7</span>
          </div>
        </div>

        {/* Budget */}
        <div className="flex-1 flex flex-col justify-center px-8 border-r border-white/10 cursor-pointer group hover:bg-[#b07e50]/10 transition-colors">
          {/* Changed to Playfair Display */}
          <span
            className="font-[family-name:var(--font-playfair)] text-[13px] tracking-wide text-[#e1c8b4] mb-1 font-medium"
          >
            Rated by 119 Google reviewers
          </span>
          <div
            className={`flex justify-between items-center text-white text-[16px] font-medium ${inter.className}`}
          >
            <span>4.5★</span>
          </div>
        </div>

        {/* Action Button */}
        {/* <div className="w-[200px]">
          <button
            className={`${inter.className} w-full h-full bg-[#b07e50] text-white text-[13px] font-semibold hover:bg-[#96683f] transition-colors duration-300`}
          >
            Get Started
          </button>
        </div> */}
      </div>
    </section>
  );
}