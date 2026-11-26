"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";

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

const FAQS = [
  {
    question: "What is included in your full property management service?",
    answer:
      "Our full management service covers everything from tenant sourcing and rigorous background checks to rent collection, 24/7 maintenance coordination, Ejari registration, and regular property inspections. We act as your single point of contact, handling all the day-to-day operations so you don't have to.",
  },
  {
    question: "I live overseas. Can I still manage my Dubai property through you?",
    answer:
      "Absolutely. A large portion of our clients are overseas investors. We provide monthly photo and financial reports, use secure digital payment gateways for rent transfers, and handle all physical aspects of the property. You can manage everything from your phone, no matter your timezone.",
  },
  {
    question: "How do you screen potential tenants?",
    answer:
      "We employ a strict vetting process which includes verifying employment status, checking previous landlord references, reviewing credit history where applicable, and ensuring all identification and visa documents are valid and authentic before signing any lease.",
  },
  {
    question: "What are your management fees?",
    answer:
      "Our fees are highly competitive and transparent. We typically charge a percentage of the annual rent, which covers all standard management duties. There are no hidden costs; any maintenance or specialized services are quoted and approved by you beforehand.",
  },
  {
    question: "How do you handle property maintenance and repairs?",
    answer:
      "We have a network of licensed, trusted contractors. For minor repairs, we handle them immediately to prevent further damage. For major repairs or replacements, we provide you with a detailed quote and photo evidence for your approval before any work begins.",
  },
  {
    question: "What happens if a tenant stops paying rent?",
    answer:
      "We follow a strict follow-up procedure. If a cheque bounces, we immediately notify you and initiate the legal process through the Rental Dispute Center (RDC) if necessary. We handle all communications and legal paperwork to protect your investment.",
  },
];

export default function FAQSection() {
  // Changed initial state to -1 so no FAQ is open by default
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={`${playfair.variable} ${inter.variable} py-12 bg-white overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header — centered */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex mb-6">
            <span
              className={`${inter.className} bg-[#faf7f3] border border-[#f0e7dc] text-[#96683f] px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.12em]`}
            >
              Common Questions
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#111827] leading-[1.15] tracking-tight mb-4">
            Frequently asked questions
          </h2>
        </div>

        {/* 2-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#e5d9cc] bg-[#faf7f3]"
                    : "border-[#e5e7eb] bg-white hover:border-[#d6c4b0]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left focus:outline-none"
                >
                  <span
                    className={`${inter.className} text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                      isOpen ? "text-[#96683f]" : "text-[#111827]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus icon */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#96683f] text-white"
                        : "bg-[#f3f4f6] text-[#6b7280]"
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`${inter.className} text-[#6b7280] text-[14px] leading-[1.75] pt-4 border-t border-[#ece3d8]`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}