"use client";


import Link from "next/link"
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

export default function ProfessionalCTA() {

  return (
    <>
      <section className={`${playfair.variable} ${inter.variable} py-16 bg-[#FDFCFB]`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Architectural Split Container */}
          <div className="flex flex-col lg:flex-row items-stretch bg-white border border-gray-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
            
            {/* Left: Text (60%) */}
            <div className="w-full lg:w-[60%] p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
              <span className={`${inter.className} text-[#96683f] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4`}>
                Direct Advisory
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-[#1A1A1A] leading-tight mb-4">
                Acquire with confidence. <br />
                Manage with <span className="italic text-[#96683f]">precision.</span>
              </h2>
              <p className={`${inter.className} text-gray-500 text-[14px] leading-relaxed max-w-md`}>
                Connect directly with our senior property advisors for a discreet, 
                data-driven consultation tailored to your portfolio.
              </p>
            </div>

            {/* Right: The Action Bar (40%) */}
            <div className="w-full lg:w-[40%] bg-[#fcfbf9] p-8 md:p-10 flex flex-col justify-center gap-3">
              
              {/* Primary Action (Subtle Solid) */}
              <Link
                href="/contact"
                className={`${inter.className} group w-full flex items-center justify-between bg-[#1A1A1A] hover:bg-[#96683f] text-white px-6 py-4 transition-all duration-300`}
              >
                <span className="text-[12px] font-semibold tracking-[0.1em] uppercase">Request Advisory</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Secondary Actions (Hairline) */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/971000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${inter.className} group flex items-center justify-center gap-2 border border-gray-300 hover:border-[#96683f] hover:text-[#96683f] text-gray-700 px-4 py-3 transition-all duration-300 text-[12px] font-medium`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+971000000000"
                  className={`${inter.className} group flex items-center justify-center gap-2 border border-gray-300 hover:border-[#96683f] hover:text-[#96683f] text-gray-700 px-4 py-3 transition-all duration-300 text-[12px] font-medium`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className={`${inter.className} text-[10px] text-gray-400 uppercase tracking-widest`}>Advisors Online</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}