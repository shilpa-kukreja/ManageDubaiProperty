"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { useState, useEffect } from "react"; // 👈 1. Import useState and useEffect

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

// 👈 2. Add your array of background images here
const HERO_IMAGES = [
  "/hero/01.png",
  // "/hero/hero.webp",
];

const CONTACT_LINKS = [
  {
    label: "+971 55 509 9157",
    href: "tel:+971555099157",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    primary: true,
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
];

const STATS = [
  { value: "Since 2007", label: "Managing Dubai Property" },
  { value: "RERA 1162", label: "Fully Compliant" },
  { value: "24/7", label: "Licensed Maintenance" },
  { value: "4.5★", label: "119 Google Reviews" },
];

export default function ServiceHero() {
  // 👈 3. State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // 👈 4. useEffect to handle the auto-scroll timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${playfair.variable} ${inter.variable} relative w-full pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden`}>
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
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
              className="object-cover object-center"
            />
          </div>
        ))}
        
        {/* Dark gradient overlay to ensure text readability across all images */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className={`${inter.className} flex items-center gap-2 text-[12px] md:text-[13px] tracking-wide mb-8`}>
          <Link href="/" className="text-white/60 hover:text-[#96683f] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/services" className="text-white/60 hover:text-[#96683f] transition-colors">Services</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">Property Management</span>
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#96683f]" />
          <span className={`${inter.className} text-[#96683f] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em]`}>
            Property Management &middot; Dubai
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[4rem] font-medium text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
          No Matter Where You Are, <span className="italic text-white">Your Property Is In Safe Hands</span>
        </h1>

        {/* Subtext */}
        <p className={`${inter.className} text-white/70 text-[15px] md:text-lg leading-relaxed max-w-2xl mb-10`}>
          Let the professionals manage it. We handle tenants, rent collection, snagging, maintenance and reporting so your Dubai property stays occupied, compliant and profitable, whether you live here or overseas.
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
              <span className={`${contact.primary ? "text-white" : "text-[#96683f]"}`}>
                {contact.icon}
              </span>
              {contact.label}
            </a>
          ))}
        </div>

        {/* Glassmorphic Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
          {STATS.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/[0.05] border border-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 hover:bg-white/[0.08] transition-colors duration-300"
            >
              <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-white mb-1">
                {stat.value}
              </p>
              <p className={`${inter.className} text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.1em] font-medium`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}