"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/contact" },
];

const FONT_HEADING = "[font-family:var(--font-inter),system-ui,sans-serif]";
const FONT_BODY = "[font-family:var(--font-inter),system-ui,sans-serif]";

const SHADOW_PREMIUM = "[box-shadow:0_4px_20px_rgba(176,126,80,0.08)]";

const EASE = "ease-[cubic-bezier(0.25,1,0.5,1)]";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // On non-home pages the navbar should always be full-width (no floating pill).
  // On the home page it floats until the user scrolls, then snaps full-width.
  const fullWidth = !isHome || scrolled;

  // rAF-throttled scroll listener
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-[padding] duration-500 ${EASE} ${
          fullWidth ? "pt-0" : "pt-4 sm:pt-6 px-4"
        }`}
      >
        <div
          className={`relative flex h-[72px] w-full items-center justify-between transition-[border-radius,box-shadow,background-color,border-color,padding] duration-500 ${EASE} will-change-[border-radius,box-shadow] ${
            fullWidth
              ? `rounded-none border-b border-[#e5e7eb] bg-white/95 backdrop-blur-xl px-4 sm:px-80 ${SHADOW_PREMIUM}`
              : `max-w-7xl rounded-md border border-[#f0e7dc] bg-white px-4 sm:px-6 ${SHADOW_PREMIUM}`
          }`}
        >
          {/* ---- Logo ---- */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="text-[#b07e50] group-hover:text-[#96683f] transition-colors duration-300">
              <svg
                width="28"
                height="32"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 10V26H22V10L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 26V16H16V26"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className={`${FONT_HEADING} font-semibold text-[19px] text-[#111827] tracking-[-0.01em]`}
            >
              Dubai<span className="text-[#b07e50]">Homes</span>
            </span>
          </Link>

          {/* ---- Desktop Nav ---- */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg ${FONT_BODY} text-[14px] font-bold transition-colors duration-300 ${
                      active
                        ? "text-[#96683f] bg-[#faf7f3]"
                        : "text-[#4b5563] hover:text-[#96683f] hover:bg-[#faf7f3]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ---- Desktop CTA (flat) ---- */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className={`${FONT_BODY} inline-flex items-center justify-center h-[42px] px-5 rounded-lg bg-[#b07e50] text-white text-[14px] font-semibold hover:bg-[#96683f] transition-colors duration-300`}
            >
              Schedule a Visit
            </Link>
          </div>

          {/* ---- Mobile Toggle ---- */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#faf7f3] text-[#b07e50] hover:bg-[#f0e7dc] transition-colors duration-300"
            aria-label="Open menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ============ MOBILE DRAWER ============ */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#111827]/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white [box-shadow:0_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col transition-transform duration-500 ${EASE} will-change-transform ${
            mobileOpen
              ? "[transform:translate3d(0,0,0)]"
              : "[transform:translate3d(100%,0,0)]"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#f3f4f6]">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <div className="text-[#b07e50]">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 10V26H22V10L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 26V16H16V26"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                className={`${FONT_HEADING} font-semibold text-[17px] text-[#111827] tracking-[-0.01em]`}
              >
                Dubai<span className="text-[#b07e50]">Homes</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#faf7f3] text-[#b07e50] hover:bg-[#f0e7dc] transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3.5 ${FONT_BODY} text-[15px] font-medium transition-colors duration-300 ${
                      active
                        ? "bg-[#faf7f3] text-[#96683f]"
                        : "text-[#4b5563] hover:bg-[#faf7f3] hover:text-[#96683f]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Drawer Footer CTA */}
          <div className="border-t border-[#f3f4f6] p-6">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`${FONT_BODY} flex items-center justify-center h-[50px] w-full rounded-lg bg-[#b07e50] text-white text-[14px] font-semibold hover:bg-[#96683f] transition-colors duration-300`}
            >
              Schedule a Visit
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}