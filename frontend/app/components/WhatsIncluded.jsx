"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import Popup from "./Popup"; // 👈 Import the Popup (adjust path if needed)

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const FEATURES = [
  {
    id: "tenant",
    number: "01",
    title: "Tenant Sourcing",
    description:
      "We deploy professional photography and premium listings on Property Finder, Bayut, and Dubizzle. Every applicant undergoes a rigorous background check, verifying employment, income, and previous landlord references to ensure you get a reliable tenant.",
    stats: ["Property Finder", "Bayut", "Dubizzle"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "rent",
    number: "02",
    title: "Rent Collection",
    description:
      "Automated invoicing and secure collection of rent cheques. We ensure your income is deposited on time, every time, and provide detailed monthly financial statements directly to your inbox.",
    stats: ["Automated Invoicing", "Secure Transfers", "Monthly Reports"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "maintenance",
    number: "03",
    title: "24/7 Maintenance",
    description:
      "A dedicated team of licensed contractors on standby. From AC servicing to emergency plumbing, we handle minor fixes instantly and provide you with a quote for major repairs before any work begins.",
    stats: ["Licensed Contractors", "Emergency Response", "Pre-approved Quotes"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "legal",
    number: "04",
    title: "Ejari & Legal",
    description:
      "We manage the entire Ejari registration process, tenancy contract renewals, and RERA compliance. You stay 100% legally protected without ever having to visit a government office.",
    stats: ["Ejari Registration", "RERA Compliant", "Tenancy Renewals"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "inspections",
    number: "05",
    title: "Property Inspections",
    description:
      "Routine, photo-documented inspections to ensure your property is being well-maintained by the tenant. We identify potential issues early before they become expensive problems.",
    stats: ["Photo Documentation", "Routine Checks", "Early Detection"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

export default function WhatsIncluded() {
  // 👈 Add state for popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#b07e50]" />
                <span
                  className={`${inter.className} text-[#96683f] text-[12px] font-semibold uppercase tracking-[0.12em]`}
                >
                  What's Included
                </span>
              </div>
              <h2
                className={`${inter.className} text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#111827] leading-[1.15] tracking-[-0.01em]`}
              >
                Everything we handle for you
              </h2>
            </div>
            <p
              className={`${inter.className} text-[#6b7280] text-[16px] leading-[1.75] max-w-sm pb-1`}
            >
              Explore our comprehensive suite of services. From finding the tenant
              to fixing the tap, we manage it all.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="group relative flex flex-col bg-white border border-[#e5e7eb] rounded-xl p-7 transition-all duration-300 hover:border-[#d6c4b0] hover:shadow-[0_8px_30px_-12px_rgba(176,126,80,0.15)]"
              >
                {/* Title */}
                <h3
                  className={`${inter.className} text-[18px] font-semibold text-[#111827] tracking-[-0.01em] mb-3`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`${inter.className} text-[#6b7280] text-[14px] leading-[1.7] mb-6 flex-1`}
                >
                  {feature.description}
                </p>

                {/* Stat Tags */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-[#f3f4f6]">
                  {feature.stats.map((stat, i) => (
                    <span
                      key={i}
                      className={`${inter.className} inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#faf7f3] text-[#96683f] text-[11px] font-medium`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA card (Updated Content & Popup Trigger) */}
            <div className="relative flex flex-col justify-between bg-[#151310] rounded-xl p-7 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b07e50]/20 via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#b07e50] mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h3
                  className={`${inter.className} text-[18px] font-semibold text-white tracking-[-0.01em] mb-3`}
                >
                  Need something else?
                </h3>
                <p
                  className={`${inter.className} text-white/60 text-[14px] leading-[1.7]`}
                >
                  Our property managers handle bespoke requests too. Get in touch
                  to discuss your specific requirements.
                </p>
              </div>
              
              {/* Converted to Button to trigger Popup */}
              <button
                onClick={() => setIsPopupOpen(true)}
                className={`${inter.className} relative z-10 mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#b07e50] hover:text-white transition-colors duration-300`}
              >
                Contact our team
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 👈 Render Popup at the bottom */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}