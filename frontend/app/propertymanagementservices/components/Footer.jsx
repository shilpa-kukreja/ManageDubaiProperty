"use client";

import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";

// 1. Initialize Fonts
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

// 👈 2. Define your custom links here
const EXPLORE_LINKS = [
  { name: "Home", href: "/propertymanagementservices" },
  { name: "Why Choose Us", href: "#whychooseus" },
  { name: "Services", href: "#services" },
  { name: "FAQs", href: "#faq" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      if (response.ok) {
        setStatus("success");
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
      alert("Failed to connect. Please try again.");
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer
      className={`${playfair.variable} ${inter.variable} bg-[#0f0d0b] text-white pt-16 pb-24 lg:pb-8 px-6 md:px-12 lg:px-24 selection:bg-[#96683f] selection:text-white`}
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION: Newsletter & Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-12 border-b border-white/10">
          <div className="max-w-md">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium tracking-tight leading-[1.2] mb-3">
              Stay <span className="italic text-[#96683f]">informed</span>
            </h2>
            <p
              className={`${inter.className} text-white/60 text-[15px] leading-[1.7]`}
            >
              Subscribe for market insights, new listings, and property
              management updates from our team.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inter.className} w-full sm:w-80 bg-transparent border-b border-white/20 px-2 py-3.5 text-[15px] focus:outline-none focus:border-[#96683f] transition-colors placeholder:text-white/40 text-white`}
            />
            <button
              onClick={handleSubscribe}
              disabled={status === "loading"}
              className={`${inter.className} bg-[#96683f] text-white px-6 py-3 rounded-sm text-[13px] font-semibold hover:bg-[#855b36] transition-colors duration-300 disabled:opacity-70 tracking-wide uppercase`}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION: Links & Brand Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-10 py-8 lg:py-14">
          {/* Brand Info */}
          <div className="lg:col-span-1 flex flex-col items-start py-6 lg:py-0 border-b border-white/10 lg:border-none">
            <Link
              href="/"
              className="flex flex-col items-start gap-2 mb-6 group"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#96683f] transition-colors duration-300"
              >
                <circle cx="12" cy="4" r="1.5" />
                <circle cx="8" cy="9" r="1.5" />
                <circle cx="12" cy="9" r="1.5" />
                <circle cx="16" cy="9" r="1.5" />
                <circle cx="6" cy="14" r="1.5" />
                <circle cx="12" cy="14" r="1.5" />
                <circle cx="18" cy="14" r="1.5" />
                <circle cx="10" cy="19" r="1.5" />
                <circle cx="14" cy="19" r="1.5" />
              </svg>
              <span className="font-[family-name:var(--font-playfair)] text-xl tracking-wide font-semibold mt-1">
                Dubai Homes
              </span>
            </Link>
            <p
              className={`${inter.className} text-white/50 text-[14px] leading-[1.7] mt-1`}
            >
              A trusted partner for premium property management, luxury living,
              and seamless ownership across Dubai.
            </p>
          </div>

          {/* Navigation (Accordion on Mobile) */}
          <div className="border-b border-white/10 lg:border-none">
            <button
              onClick={() => toggleSection("explore")}
              className="w-full flex items-center justify-between py-5 lg:py-0 lg:cursor-default"
            >
              <h4
                className={`${inter.className} text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase lg:mb-6`}
              >
                Explore
              </h4>
              <svg
                className={`w-4 h-4 text-white/50 transition-transform lg:hidden ${openSection === "explore" ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 lg:block ${openSection === "explore" ? "max-h-48 pb-5" : "max-h-0 lg:max-h-full"}`}
            >
              <ul className="space-y-3">
                {/* 👈 3. Map through your custom links */}
                {EXPLORE_LINKS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`${inter.className} text-[14px] text-white/70 hover:text-[#96683f] transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact (Accordion on Mobile) */}
          <div className="border-b border-white/10 lg:border-none">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full flex items-center justify-between py-5 lg:py-0 lg:cursor-default"
            >
              <h4
                className={`${inter.className} text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase lg:mb-6`}
              >
                Contact
              </h4>
              <svg
                className={`w-4 h-4 text-white/50 transition-transform lg:hidden ${openSection === "contact" ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 lg:block ${openSection === "contact" ? "max-h-48 pb-5" : "max-h-0 lg:max-h-full"}`}
            >
              <ul
                className={`${inter.className} space-y-3 text-[14px] text-white/70`}
              >
                <li className="leading-[1.6]">
                  Downtown Dubai
                  <br />
                  UAE
                </li>
                <li>
                  <a
                    href="tel:+971123456789"
                    className="hover:text-[#96683f] transition-colors"
                  >
                    +971 12 345 6789
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@dubaihomes.com"
                    className="hover:text-[#96683f] transition-colors"
                  >
                    hello@dubaihomes.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials & Legal (Accordion on Mobile) */}
          <div className="border-b border-white/10 lg:border-none">
            <button
              onClick={() => toggleSection("connect")}
              className="w-full flex items-center justify-between py-5 lg:py-0 lg:cursor-default"
            >
              <h4
                className={`${inter.className} text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase lg:mb-6`}
              >
                Connect
              </h4>
              <svg
                className={`w-4 h-4 text-white/50 transition-transform lg:hidden ${openSection === "connect" ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 lg:block ${openSection === "connect" ? "max-h-96 pb-5" : "max-h-0 lg:max-h-full"}`}
            >
              <div className="flex gap-2.5 mb-8">
                <a
                  href="#"
                  className="w-9 h-9 rounded-sm border border-white/15 flex items-center justify-center hover:border-[#96683f] hover:bg-[#96683f] hover:text-white transition-all duration-300 text-white/70"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-sm border border-white/15 flex items-center justify-center hover:border-[#96683f] hover:bg-[#96683f] hover:text-white transition-all duration-300 text-white/70"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-sm border border-white/15 flex items-center justify-center hover:border-[#96683f] hover:bg-[#96683f] hover:text-white transition-all duration-300 text-white/70"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
              {/* <ul className={`${inter.className} space-y-2.5 text-[13px] text-white/50`}>
                <li><Link href="/privacy-policy" className="hover:text-[#96683f] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#96683f] transition-colors">Terms of Service</Link></li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div
          className={`${inter.className} pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] text-white/40`}
        >
          <p>© {currentYear} Dubai Homes. All rights reserved.</p>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
