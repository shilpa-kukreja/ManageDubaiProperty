"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import Popup from "./Popup"; // 👈 1. Import the Popup component

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
    question: "Why shouldn’t I manage my property myself?",
    answer:
      "Running a property well is a full-time job: advertising, finding suitable tenants, administration, collecting payments, leasing inspections, maintenance and repairs. Our team takes care of every part of it so ownership stays profitable without the strain.",
  },
  {
    question: "What can I do to get my home rented faster?",
    answer:
      "Choose a management service with a proven client base, strong agents across different areas and real credibility in the market. That combination is what gets a unit let quickly and keeps occupancy high.",
  },
  {
    question: "How long will it take to rent my home?",
    answer:
      "Your property needs proper market exposure to minimise vacancy. We list across the major portals including Property Finder, Bayut and Dubizzle, and work with trusted partners to reach a wide pool of tenants.",
  },
  {
    question: "How much will my home rent for?",
    answer:
      "Alongside professional marketing we give you a realistic market price so you get the maximum possible return. We analyse the market constantly to keep your property performing at its full potential.",
  },
  {
    question: "How are property management companies regulated in Dubai?",
    answer:
      "They are regulated by RERA, the UAE’s real estate regulatory body. A company must act in its clients’ best interests, stay transparent in all dealings, be honest in its recommendations and treat every party fairly.",
  },
  {
    question: "What are the core duties of a property manager?",
    answer:
      "Protecting and maintaining the value of your investment while giving you hassle-free ownership. That covers marketing, tenant screening, rent collection, maintenance and financial reporting.",
  },
  {
    question: "What are the procedures to get started?",
    answer:
      "Submit a contact request so we can connect, email us the necessary documents, then sign our tailored management agreement and settle the fee. After that your passive income runs stress-free.",
  },
  {
    question: "Can a management company collect rent and serve notice?",
    answer:
      "Yes. Where the landlord has appointed the company to manage the property, it can collect rent, serve notice, maintain the property and handle issues with the tenancy on the owner’s behalf.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 👈 2. Add state for popup

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <section id="faq" className={`${playfair.variable} ${inter.variable} py-16 bg-white overflow-hidden relative`}>
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

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#111827] leading-[1.15] tracking-tight mb-6">
              Frequently asked questions
            </h2>

            {/* 👈 3. New Premium Popup Button below the heading */}
            <button
              onClick={() => setIsPopupOpen(true)}
              className={`${inter.className} group inline-flex items-center gap-3 bg-[#96683f] text-white px-8 py-3.5 rounded-sm font-semibold text-[12px] uppercase tracking-[0.1em] hover:bg-[#855b36] transition-all duration-300 hover:-translate-y-1 shadow-md`}
            >
              Still have questions? Ask us
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
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

      {/* 👈 4. Render the Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}