"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import Popup from "./Popup";

// 1. Swapped Plus Jakarta Sans for Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function OverviewSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const features = [
    {
      title: "Delayed Rent Payments",
      description:
        "Following up on overdue rent can be stressful, especially for overseas property owners. Professional rent collection and payment monitoring help maintain consistent cash flow and reduce the time spent dealing with payment delays.",
      iconSrc: "/overview/1.png",
      // iconSrc: "/process/1.jpg",
    },
    {
      title: "Unexpected repairs",
      description:
        "A small leak becomes a big bill when nobody is on the ground to catch it.",
      iconSrc: "/overview/2.png",
    },
    {
      title: "Legal paperwork",
      description:
        "Ejari, tenancy contracts and RERA compliance are easy to get wrong.",
      iconSrc: "/overview/3.png",
    },
    {
      title: "Managing from abroad",
      description:
        "Overseas owners lose control of viewings, handovers and tenant issues.",
      iconSrc: "/overview/4.png",
    },
  ];

  return (
    /* Apply font variables to the section wrapper */
    <section
      className={`${playfair.variable} ${inter.variable} py-12 bg-[#ffffff]`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Text Content */}
          <div className="flex-1 lg:max-w-lg flex flex-col justify-center">
            <div className="inline-flex mb-8">
              <span
                className={`${inter.className} bg-[#fcf9f6] text-[#96683f] px-4 py-1.5 rounded text-[13px] font-medium tracking-wide`}
              >
                Property Management Challenges
              </span>
            </div>

            {/* 2. Main Heading updated to Playfair Display */}
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[2.75rem] font-medium text-[#111827] leading-[1.15] mb-6 tracking-tight">
              Why Dubai Property Owners Need Professional Management
            </h2>

            <p
              className={`${inter.className} text-[#6b7280] text-[15px] leading-relaxed mb-10`}
            >
              Managing a property in Dubai requires time, attention and local
              expertise. From delayed rent payments and unexpected maintenance
              issues to tenant concerns and legal documentation, even small
              problems can become expensive without proper supervision.{" "}
            </p>

            {/* Button */}
            <div>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group relative flex h-[48px] w-[280px] [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                  {/* Front Face */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-sm bg-[#b07e50] [backface-visibility:hidden] ${inter.className} text-[12px] font-bold uppercase tracking-widest text-[#ffffff]`}
                  >
                    Book a Property Consultation
                  </div>

                  {/* Back Face */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-sm bg-[#96683f] [backface-visibility:hidden] [transform:rotateX(180deg)] ${inter.className} text-[12px] font-bold uppercase tracking-widest text-[#ffffff]`}
                  >
                    Schedule a Visit
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-6 h-16 flex items-end rounded-full">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* 3. Feature Card Titles updated to Playfair Display */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#111827] mb-3">
                  {feature.title}
                </h3>

                <p
                  className={`${inter.className} text-[#6b7280] text-[15px] leading-relaxed`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render the Popup Component */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
