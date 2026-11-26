"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Connect to the /api/contact route we just created
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        alert("Thank you! Your message has been sent successfully.");

        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      alert("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f3]">
        {/* ================= 1. FULL-WIDTH BANNER ================= */}
        <section className="relative w-full h-[40vh] md:h-[40vh] bg-[#151310]">
          <Image
            src="/contact/banner1.jpg"
            alt="Contact Dubai Homes"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/50 to-transparent" />
        </section>

        {/* ================= 2. FORM & CONTACT DETAILS ================= */}
        <section className="py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#b07e50]" />
                <span
                  className={`${inter.className} text-[#96683f] text-[12px] font-semibold uppercase tracking-[0.12em]`}
                >
                  Get in Touch
                </span>
                <span className="w-8 h-[1px] bg-[#b07e50]" />
              </div>
              <h1
                className={`${inter.className} text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#111827] leading-[1.15] tracking-[-0.01em]`}
              >
                We'd love to hear from you
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
              {/* LEFT SIDE: Premium Form */}
              <div className="lg:w-[60%]">
                <div className="h-full bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(176,126,80,0.1)] border border-[#f0e7dc] relative overflow-hidden">
                  {/* Subtle Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b07e50] to-transparent opacity-80" />

                  <h2
                    className={`${inter.className} text-[22px] font-semibold text-[#111827] tracking-[-0.01em] mb-8`}
                  >
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        className={`${inter.className} block text-[12px] font-semibold text-[#374151] uppercase tracking-[0.08em] mb-2`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`${inter.className} w-full  border border-[#ece3d8] rounded-lg px-4 py-3.5 text-[15px] text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all`}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className={`${inter.className} block text-[12px] font-semibold text-[#374151] uppercase tracking-[0.08em] mb-2`}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`${inter.className} w-full  border border-[#ece3d8] rounded-lg px-4 py-3.5 text-[15px] text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all`}
                        />
                      </div>
                      <div>
                        <label
                          className={`${inter.className} block text-[12px] font-semibold text-[#374151] uppercase tracking-[0.08em] mb-2`}
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          className={`${inter.className} w-full  border border-[#ece3d8] rounded-lg px-4 py-3.5 text-[15px] text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all`}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className={`${inter.className} block text-[12px] font-semibold text-[#374151] uppercase tracking-[0.08em] mb-2`}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your property requirements..."
                        className={`${inter.className} w-full  border border-[#ece3d8] rounded-lg px-4 py-3.5 text-[15px] text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all resize-none`}
                      />
                    </div>

                    {/* Submit Button — flat, professional */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`${inter.className} w-full h-[52px] mt-2 rounded-lg bg-[#b07e50] text-white text-[14px] font-semibold hover:bg-[#96683f] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

              {/* RIGHT SIDE: Contact Details */}
              <div className="lg:w-[40%]">
                <div className="h-full bg-white rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(176,126,80,0.1)] border border-[#f0e7dc] relative overflow-hidden flex flex-col justify-between">
                  {/* Subtle Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b07e50] to-transparent opacity-80" />

                  <div>
                    <h2
                      className={`${inter.className} text-[22px] font-semibold text-[#111827] tracking-[-0.01em] mb-8`}
                    >
                      Contact Information
                    </h2>

                    <div className="space-y-7">
                      {/* Phone */}
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-lg bg-[#faf7f3] border border-[#f0e7dc] flex items-center justify-center text-[#b07e50] shrink-0 transition-colors duration-300 group-hover:bg-[#b07e50] group-hover:text-white group-hover:border-[#b07e50]">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className={`${inter.className} text-[#111827] font-semibold text-[16px] tracking-[-0.01em] mb-1`}
                          >
                            Call Us
                          </h4>
                          <p
                            className={`${inter.className} text-[#6b7280] text-[14px] mb-2`}
                          >
                            Mon–Sat, 9am to 6pm
                          </p>
                          <a
                            href="tel:+971000000000"
                            className={`${inter.className} text-[#b07e50] font-semibold text-[14px] hover:text-[#96683f] transition-colors`}
                          >
                            +971 XX XXX XXXX
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-lg bg-[#faf7f3] border border-[#f0e7dc] flex items-center justify-center text-[#b07e50] shrink-0 transition-colors duration-300 group-hover:bg-[#b07e50] group-hover:text-white group-hover:border-[#b07e50]">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className={`${inter.className} text-[#111827] font-semibold text-[16px] tracking-[-0.01em] mb-1`}
                          >
                            Email Us
                          </h4>
                          <p
                            className={`${inter.className} text-[#6b7280] text-[14px] mb-2`}
                          >
                            Our team is here to help
                          </p>
                          <a
                            href="mailto:info@dubaihomes.com"
                            className={`${inter.className} text-[#b07e50] font-semibold text-[14px] hover:text-[#96683f] transition-colors`}
                          >
                            info@dubaihomes.com
                          </a>
                        </div>
                      </div>

                      {/* Office */}
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-lg bg-[#faf7f3] border border-[#f0e7dc] flex items-center justify-center text-[#b07e50] shrink-0 transition-colors duration-300 group-hover:bg-[#b07e50] group-hover:text-white group-hover:border-[#b07e50]">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className={`${inter.className} text-[#111827] font-semibold text-[16px] tracking-[-0.01em] mb-1`}
                          >
                            Visit Us
                          </h4>
                          <p
                            className={`${inter.className} text-[#6b7280] text-[14px] mb-2`}
                          >
                            Come say hello at our office
                          </p>
                          <p
                            className={`${inter.className} text-[#b07e50] font-semibold text-[14px]`}
                          >
                            Downtown Dubai, UAE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="mt-10 pt-8 border-t border-[#f3f4f6]">
                    <p
                      className={`${inter.className} text-[11px] font-semibold text-[#9ca3af] uppercase tracking-[0.12em] mb-4`}
                    >
                      Follow Us
                    </p>
                    <div className="flex gap-2.5">
                      {["instagram", "facebook", "linkedin", "twitter"].map(
                        (social) => (
                          <a
                            key={social}
                            href="#"
                            className="w-9 h-9 rounded-full bg-[#faf7f3] border border-[#f0e7dc] flex items-center justify-center text-[#6b7280] hover:text-[#b07e50] hover:border-[#b07e50] hover:bg-white transition-colors duration-300"
                          >
                            <span className="sr-only">{social}</span>
                            {social === "instagram" && (
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                              </svg>
                            )}
                            {social === "facebook" && (
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                              </svg>
                            )}
                            {social === "linkedin" && (
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                              </svg>
                            )}
                            {social === "twitter" && (
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            )}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. GOOGLE MAP ================= */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_20px_50px_-20px_rgba(176,126,80,0.1)] border border-[#f0e7dc] flex flex-col lg:flex-row overflow-hidden">
              {/* Left Side: Address Details */}
              <div className="lg:w-1/3 p-8 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#f3f4f6]">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-[#b07e50]" />
                  <span
                    className={`${inter.className} text-[#96683f] text-[12px] font-semibold uppercase tracking-[0.12em]`}
                  >
                    Visit Us
                  </span>
                </div>

                <h2
                  className={`${inter.className} text-2xl md:text-3xl font-semibold text-[#111827] leading-[1.2] tracking-[-0.01em] mb-8`}
                >
                  Find our Dubai office
                </h2>

                <div className="space-y-6">
                  {/* Company Name */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#faf7f3] border border-[#f0e7dc] flex items-center justify-center text-[#b07e50] shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className={`${inter.className} text-[#111827] font-semibold text-[15px] mt-2 tracking-[-0.01em]`}
                      >
                        Binayah Properties
                      </h4>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#faf7f3] border border-[#f0e7dc] flex items-center justify-center text-[#b07e50] shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className={`${inter.className} text-[#6b7280] text-[14px] leading-[1.7]`}
                      >
                        Mezzanine Floor, Liberty Building,
                        <br />
                        Al Quoz 3, Sheikh Zayed Road,
                        <br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direction Link */}
                <a
                  href="https://maps.google.com/?q=Liberty+Building+Al+Quoz+3+Sheikh+Zayed+Road+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${inter.className} inline-flex items-center gap-2 mt-8 text-[#b07e50] font-semibold text-[13px] hover:text-[#96683f] transition-colors group`}
                >
                  Get Directions
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Right Side: Map */}
              <div className="lg:w-2/3 h-[400px] lg:h-auto relative bg-[#e5e7eb] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.67876518669!2d55.2401414!3d25.1392479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d5a7c6f6d5b%3A0x6b6f6d5a7c6f6d5b!2sAl%20Quoz%203%2C%20Al%20Quoz%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(100%) contrast(1.1) opacity(0.95)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Binayah Properties Office Location"
                />
                <div className="absolute inset-0 pointer-events-none bg-[#b07e50]/5 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
