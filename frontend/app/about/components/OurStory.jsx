"use client";

import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";

// 1. Initialize Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function OurStory() {
  return (
    /* Apply font variables to the section */
    <section className={`${playfair.variable} ${inter.variable} py-8 md:py-16 bg-white relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Image */}
          <div className="lg:w-1/2 relative w-full">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[4/4] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]">
              <Image
                src="/about/banner.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
              {/* Subtle dark gradient at the bottom */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /> */}
            </div>
          </div>

          {/* RIGHT SIDE: The Editorial Story */}
          <div className="lg:w-1/2">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#96683f]" />
              <span className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
                Our Story
              </span>
            </div>

            {/* 2. Applied Playfair to Main Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-[#111827] leading-[1.15] tracking-tight mb-8">
              A journey built on <span className="italic text-[#96683f]">trust</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-5 border-l-2 border-[#96683f]/30 pl-6 md:pl-8">
              <p className={`${inter.className} text-[#4b5563] text-[16px] leading-[1.75]`}>
                <strong className={`${inter.className} text-[#111827] font-semibold`}>
                  Founded in 2009,
                </strong>{" "}
                Dubai Homes began with a simple observation: overseas investors
                were struggling to manage their properties effectively in the
                rapidly growing Dubai market. They needed a partner they could
                trust implicitly.
              </p>
              <p className={`${inter.className} text-[#6b7280] text-[16px] leading-[1.75]`}>
                Over the last 15 years, we have meticulously built a reputation
                for absolute transparency. We don't just collect rent; we
                protect your asset. From rigorous tenant vetting to proactive
                maintenance and seamless Ejari compliance, every process is
                designed to give you total peace of mind.
              </p>
              <p className={`${inter.className} text-[#6b7280] text-[16px] leading-[1.75]`}>
                Today, managing a portfolio of over 500 premium properties
                across Dubai's most sought-after communities, our commitment
                remains exactly the same as it was on day one: treating your
                property as if it were our own.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}