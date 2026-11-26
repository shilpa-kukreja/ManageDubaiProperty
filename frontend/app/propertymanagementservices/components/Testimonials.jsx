"use client";

import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Popup from "./Popup"; // 👈 2. Import Popup (adjust path if needed)


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TESTIMONIALS = [
  {
    quote:
      "Managing my property from London used to be a nightmare. Dubai Homes completely changed that. Their monthly reports and proactive maintenance mean I haven't had to worry about a thing in over two years.",
    author: "James Whitfield",
    role: "Property Owner, London",
    initials: "JW",
  },
  {
    quote:
      "The level of transparency is unmatched. From the initial snagging inspection to tenant screening, every step was documented. It's rare to find a property manager that treats your asset like their own.",
    author: "Sarah Al Maktoum",
    role: "Investor, Dubai",
    initials: "SA",
  },
  {
    quote:
      "As an overseas investor, I needed someone reliable. Their team handled the entire Ejari registration, upgraded the AC system, and secured a long-term tenant within weeks. Highly recommended.",
    author: "Michael Chen",
    role: "Portfolio Investor, Singapore",
    initials: "MC",
  },
  {
    quote:
      "The communication is flawless. Whenever there is an issue with the villa, I get a WhatsApp message with a quote and photos before any work is done. It takes all the stress out of ownership.",
    author: "Emma Thompson",
    role: "Villa Owner, Dubai Hills",
    initials: "ET",
  },
  {
    quote:
      "I've worked with three property managers in Dubai over the last decade. None of them come close to the level of professionalism and market knowledge that this team possesses. They truly maximize ROI.",
    author: "Omar Al Fayed",
    role: "Commercial Landlord, DIFC",
    initials: "OA",
  },
  {
    quote:
      "Finding a tenant was fast, but keeping them happy has been the real win. The 24/7 maintenance team means small issues get resolved before they become big problems. Absolutely seamless service.",
    author: "Chloe Dubois",
    role: "Apartment Owner, Paris",
    initials: "CD",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


  const AUTOSCROLL_TIME = 2000;

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTOSCROLL_TIME);

    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  return (
    <>
    
    <section
    id="testimonials"
      className="py-12 bg-[#faf7f3] overflow-hidden relative selection:bg-[#b07e50] selection:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#b07e50]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex mb-6">
            <span
              className={`${inter.className} bg-white border border-[#f0e7dc] text-[#96683f] px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.12em]`}
            >
              Client Testimonials
            </span>
          </div>
          <h2
            className={`${inter.className} text-3xl md:text-5xl font-semibold text-[#111827] leading-[1.15] tracking-[-0.01em] mb-4`}
          >
            Trusted by property owners worldwide
          </h2>
          {/* <p
            className={`${inter.className} text-[#6b7280] text-[16px] leading-[1.75] max-w-lg`}
          >
            Discover why property owners across the globe trust us to manage
            their most valuable assets with absolute discretion.
          </p> */}



          {/* 👈 4. Add the CTA Button below the steps */}
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setIsPopupOpen(true)}
              className={`inline-flex items-center justify-center h-[48px] px-8 rounded-md bg-[#b07e50] hover:bg-[#96683f] transition-colors ${inter.className} text-[13px] font-semibold text-[#ffffff]`}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* Auto-scroll Progress Bar */}
        <div className="w-full max-w-[200px] mx-auto h-[2px] bg-[#e5e7eb] mb-12 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#b07e50] transition-all duration-300 ease-linear"
            style={{
              width: `${((activeIndex + 1) / TESTIMONIALS.length) * 100}%`,
            }}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative h-[360px] md:h-[320px] w-full max-w-4xl mx-auto flex items-center justify-center">
          {TESTIMONIALS.map((testimonial, index) => {
            let position = index - activeIndex;
            if (position < -2) position += TESTIMONIALS.length;
            if (position > 2) position -= TESTIMONIALS.length;

            const isActive = position === 0;
            const isLeft = position === -1;
            const isRight = position === 1;

            return (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive
                    ? "z-30 opacity-100 scale-100 translate-x-[-50%] shadow-[0_20px_40px_-15px_rgba(176,126,80,0.15)]"
                    : isLeft
                    ? "z-20 opacity-30 scale-90 translate-x-[-115%] blur-[1px] cursor-pointer hover:opacity-50"
                    : isRight
                    ? "z-20 opacity-30 scale-90 translate-x-[15%] blur-[1px] cursor-pointer hover:opacity-50"
                    : "z-10 opacity-0 scale-75 translate-x-[-50%] pointer-events-none"
                }`}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                  {/* Top Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b07e50] to-transparent opacity-80" />

                  {/* Quote Mark */}
                  <svg
                    className="absolute top-6 right-6 w-12 h-12 text-[#faf7f3] -z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#b07e50] mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote
                    className={`${inter.className} text-[#374151] text-[15px] leading-[1.7] mb-6 min-h-[90px]`}
                  >
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-5 border-t border-[#f3f4f6]">
                    <div
                      className={`w-10 h-10 rounded-full bg-[#b07e50] flex items-center justify-center ${inter.className} font-semibold text-white text-[13px]`}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4
                        className={`${inter.className} text-[#111827] text-[14px] font-semibold tracking-[-0.01em]`}
                      >
                        {testimonial.author}
                      </h4>
                      <p
                        className={`${inter.className} text-[#96683f] text-[11px] font-medium uppercase tracking-[0.08em] mt-0.5`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="group w-10 h-10 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center hover:border-[#b07e50] hover:bg-[#b07e50] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 text-[#6b7280] group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-5 bg-[#b07e50]"
                    : "w-1.5 bg-[#d1d5db] hover:bg-[#9ca3af]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group w-10 h-10 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center hover:border-[#b07e50] hover:bg-[#b07e50] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 text-[#6b7280] group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
     {/* 👈 5. Render Popup */}
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
    
  );
}