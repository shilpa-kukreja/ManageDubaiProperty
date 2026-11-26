"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { useState, useEffect } from "react";

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

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin by understanding your goals, whether you are looking to maximize rental yield, sell, or find your dream home. We listen before we advise.",
    image: "/process/1.jpg",
  },
  {
    step: "02",
    title: "Property Evaluation",
    description: "Our experts conduct a comprehensive market analysis and property appraisal to determine the optimal strategy for your asset in the current climate.",
    image: "/process/2.webp",
  },
  {
    step: "03",
    title: "Strategy & Marketing",
    description: "We craft a tailored plan. For sellers, this means premium photography, cinematic videography, and targeted campaigns to attract the right audience.",
    image: "/process/3.jpg",
  },
  {
    step: "04",
    title: "Client & Tenant Matching",
    description: "We leverage our extensive network to connect you with qualified buyers or high-quality, pre-vetted tenants who align with your requirements.",
    image: "/process/4.webp",
  },
  {
    step: "05",
    title: "Legal & Compliance",
    description: "Our team handles all the meticulous paperwork, including Ejari registration, tenancy contracts, and full RERA compliance, ensuring absolute peace of mind.",
    image: "/process/5.avif",
  },
  {
    step: "06",
    title: "Ongoing Management",
    description: "For property management clients, we take over all daily operations. From rent collection to 24/7 maintenance, your asset is in safe hands.",
    image: "/process/1.jpg",
  },
];

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionElement, setSectionElement] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const sectionRef = (node) => {
    if (node) setSectionElement(node);
  };

  // Intersection Observer for reveal animation
  useEffect(() => {
    if (!sectionElement) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionElement);
    return () => observer.unobserve(sectionElement);
  }, [sectionElement]);

  // Auto-play logic
  useEffect(() => {
    // Only auto-play if the section is visible
    if (!isVisible) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(timer);
  }, [isVisible, activeStep]); // Added activeStep dependency to reset timer on manual click

  return (
    <section
      ref={sectionRef}
      className={`${playfair.variable} ${inter.variable} relative w-full bg-white py-9 md:py-12 overflow-hidden`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div>
            <span className="font-[family-name:var(--font-inter)] text-[11px] font-bold tracking-[0.25em] uppercase text-[#96683f] mb-3 block">
              The Methodology
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#111827] leading-[1.1] tracking-tight">
              Our Process
            </h2>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-gray-500 text-[15px] max-w-md leading-relaxed">
            A seamless, transparent journey from our first conversation to the final handover. We guide you every step of the way.
          </p>
        </div>

        {/* Immersive Image Viewer */}
        {/* Height reduced from 700px to 550px on desktop */}
        <div className={`relative w-full h-[500px] md:h-[550px] rounded-sm overflow-hidden shadow-2xl group transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          
          {/* Image Backgrounds */}
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeStep === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-[4s] ease-out hover:scale-105"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-20 pointer-events-none" />

          {/* Content Container at the Bottom */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 flex flex-col md:flex-row md:items-end justify-between gap-8">
            
            {/* Text Content (Changes based on Active Step) */}
            <div className="max-w-2xl flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-[family-name:var(--font-playfair)] text-[#96683f] text-3xl md:text-4xl font-medium italic">
                  {PROCESS_STEPS[activeStep].step}
                </span>
                <div className="h-[1px] w-12 bg-[#96683f]" />
              </div>
              
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              
              <p className="font-[family-name:var(--font-inter)] text-gray-300 text-[15px] md:text-base leading-relaxed max-w-xl">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            {/* Step Navigation (Numbers) */}
            <div className="flex flex-wrap gap-3 md:gap-4 shrink-0">
              {PROCESS_STEPS.map((step, index) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-sm md:text-base font-medium font-[family-name:var(--font-inter)] transition-all duration-300 backdrop-blur-md ${
                    activeStep === index
                      ? "bg-[#96683f] text-white border-transparent"
                      : "bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {step.step}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}