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
    question: "Why Should I Choose Professional Property Management Instead of Managing My Property Myself?",
    answer:
      "Managing a rental property involves more than simply finding tenants. It requires consistent attention to marketing, tenant selection, rental payments, legal documentation, property inspections and ongoing maintenance. A professional property management team handles these responsibilities efficiently, allowing you to enjoy the benefits of property ownership without dealing with everyday management challenges.",
  },
   {
    question: "Can a Property Management Company Collect Rent and Issue Tenancy Notices on My Behalf?",
    answer:
      "Yes. An authorised property management company can collect rental payments, coordinate tenancy-related communications, arrange property maintenance and manage other rental responsibilities on behalf of the landlord. Any formal notices or legal actions must comply with applicable Dubai tenancy laws and the terms of the owner's authorisation.",
  },
  {
    question: "How Can I Find Tenants for My Property More Quickly?",
    answer:
      "Finding the right tenant requires effective marketing, strong industry connections and an in-depth understanding of the local rental market. Working with an experienced property management company gives your property access to a wider audience, professional agents and established tenant networks, helping attract potential renters and reduce vacancy periods.",
  },
  {
    question: "How Much Time Does It Usually Take to Rent Out a Property?",
    answer:
      "The rental timeline depends on several factors, including location, property condition, pricing and current market demand. To improve your chances of securing a tenant quickly, we promote properties through leading real estate platforms such as Property Finder, Bayut and Dubizzle, alongside our professional network of rental partners.",
  },
  {
    question: "How Can I Determine the Right Rental Price for My Property?",
    answer:
      "Setting the right rental value starts with understanding current market conditions. We evaluate similar properties, neighbourhood demand, location advantages and recent rental trends to recommend a competitive asking price. Our approach helps property owners attract genuine tenants while achieving a strong rental return.",
  },
  {
    question: "Who Regulates Property Management Businesses in Dubai?",
    answer:
      "Property management activities in Dubai fall under the regulatory framework of the Real Estate Regulatory Agency (RERA), which operates under the Dubai Land Department (DLD). Property management companies are expected to follow applicable regulations, maintain transparent business practices, protect their clients' interests and conduct transactions professionally.",
  },
  {
    question: "What Services Are Included in Professional Property Management?",
    answer:
      "Property management involves looking after your real estate investment while ensuring a smooth rental experience. Typical responsibilities include property advertising, tenant verification, lease administration, rent collection, routine inspections, maintenance coordination, repair management and regular financial updates for property owners.",
  },
  {
    question: "What Is the Process of Hiring a Property Management Company?",
    answer:
      "Getting started is straightforward. First, contact our team and share the basic details of your property. We will guide you through the required paperwork and documentation. Once everything has been reviewed, you can proceed with signing a property management agreement and completing the applicable service fee. Our team will then take care of the agreed management responsibilities.",
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