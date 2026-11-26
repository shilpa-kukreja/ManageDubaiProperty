"use client";

import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
// Initialize Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CHECKLIST_ITEMS = [
  "Deep understanding of the Dubai property market",
  "Honest, open communication and fair terms",
  "Access to exclusive and off-market listings",
  "A history of happy, returning clients",
  "Support from the first viewing to completion",
  "Complete RERA compliance and licensing",
];

export default function WhyChooseUsSection() {

    

  return (
    <>
      <section className={`${playfair.variable} ${inter.variable} py-8 md:py-12 bg-white relative overflow-hidden`}>
        {/* Subtle Background Decoration */}
        {/* <div className="absolute top-0 left-0 w-1/3 h-full bg-[#96683f]/[0.02] pointer-events-none" /> */}

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE: Editorial Content & Checklist */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#96683f]" />
                <span className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
                  Making the Right Choice
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-[#111827] leading-[1.15] tracking-tight mb-6">
                What to Look for in a  <span className="italic text-[#96683f]">Property Partner</span>
              </h2>

              {/* Paragraphs */}
              {/* <div className={`${inter.className} text-gray-500 text-[15px] md:text-base leading-relaxed space-y-4 mb-10`}>
                <p>
                    Buying or letting well in Dubai takes more than scrolling through listings. You need an adviser who knows the market, respects your objectives, saves you effort and safeguards your money from the first viewing right through to signing.
                </p>
                <p>
                  Binayah is a RERA-certified agency, so strict rules and open dealings apply to every transaction. Your property is handled lawfully, ethically and efficiently, and the same standard covers tenant management, maintenance and financial reporting.
                </p>
              </div> */}

              {/* 2-Column Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {CHECKLIST_ITEMS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg 
                        className="w-4 h-4 text-[#96683f]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className={`${inter.className} text-[#4b5563] text-[14px] leading-snug`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Premium CTA Card */}
            <div className="relative">
              {/* Card Background with subtle gradient to match your dark sections */}
              <div className="relative bg-[#151310] rounded-2xl p-8 md:p-10 overflow-hidden shadow-2xl">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#96683f]/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
                
                <div className="relative z-10">
                  {/* Card Eyebrow */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-[1px] bg-[#96683f]" />
                    <span className={`${inter.className} text-[#96683f] text-[11px] font-bold uppercase tracking-[0.15em]`}>
                      Why Choose Us
                    </span>
                  </div>

                  {/* Card Heading */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium text-white leading-[1.2] mb-4">
                    A Smooth Solution For <span className="italic text-[#96683f]">Managing Your Property</span>
                  </h3>

                  {/* Card Paragraph */}
                  <p className={`${inter.className} text-white/60 text-[14px] leading-relaxed mb-8`}>
                    Every step, from tenant placement to rent collection and maintenance, is handled seamlessly. Whether you live in Dubai or abroad, your property is cared for, your tenants are looked after and your returns stay consistent.
                  </p>

                  {/* Card Button */}
                  <Link
                    href="/contact"
                    
                    className={`${inter.className} w-full flex items-center justify-center gap-2 bg-[#96683f] text-white py-3.5 px-6 rounded-sm text-[13px] font-semibold uppercase tracking-wider hover:bg-[#855b36] transition-all duration-300 hover:-translate-y-1`}
                  >
                    Talk to a Manager
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Optional: Decorative frame behind the card */}
              <div className="absolute -inset-3 border border-[#96683f]/20 rounded-2xl -z-10 hidden md:block" />
            </div>

          </div>
        </div>
      </section>

    </>
  );
}