"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";

// Initialize Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"] 
});

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    userType: "owner",
    name: "",
    email: "",
    phone: "",
    propertyType: "Apartment",
    message: ""
  });
  
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        alert("Thank you! Your request has been sent. We will contact you shortly.");
        setFormData({
          userType: "owner",
          name: "",
          email: "",
          phone: "",
          propertyType: "Apartment",
          message: ""
        });
      } else {
        setStatus("error");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      alert("Failed to connect to the server.");
    }
  };

  const badges = [
    "RERA-certified agency",
    "Overseas owners welcome",
    "Transparent reporting"
  ];

  return (
    <section id="consultation" className={`${playfair.variable} ${inter.variable} py-8 md:py-12 bg-[#fcfbf9] overflow-hidden relative border-t border-[#f3f4f6]`}>
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#96683f]/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Editorial Content */}
          <div className="flex-1 w-full">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#96683f]" />
              <span className={`${inter.className} text-[#96683f] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em]`}>
                Overview
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium text-[#111827] leading-[1.15] tracking-tight mb-6">
              Property Management <span className="italic text-[#96683f]">In Dubai</span>
            </h2>

            {/* Paragraphs */}
            <div className={`${inter.className} text-[#4b5563] text-[15px] leading-relaxed space-y-5 mb-10 max-w-xl`}>
              <p>
                Managing property in Dubai takes more than collecting rent. It demands strategy, attention and commitment, which is why investors choose us. We go beyond routine management by protecting your asset, improving rental value and keeping the property in top condition all year round.
              </p>
              <p>
                Our approach combines proven systems, experienced managers and real market insight, so landlords see consistent growth. Whether you own a single rental unit or a full portfolio, your property is treated as a long-term asset rather than just another unit on a list.
              </p>
              <p>
                The result is a secure, income-generating asset that runs quietly in the background while you focus on everything else.
              </p>
            </div>

            {/* Checklist Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-full px-4 py-2 shadow-sm"
                >
                  <svg 
                    className="w-3.5 h-3.5 text-[#96683f]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className={`${inter.className} text-[#374151] text-[12px] md:text-[13px] font-medium`}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Premium Form */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
            
            <div className="bg-[#ffffff] rounded-2xl border border-[#e5e7eb] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
              
              {/* Top Bronze Accent Line */}
              <div className="h-1 w-full bg-[#96683f]" />

              <div className="p-8 md:p-10">
                {/* Form Eyebrow */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-[1px] bg-[#96683f]" />
                  <span className={`${inter.className} text-[#96683f] text-[10px] font-bold uppercase tracking-[0.15em]`}>
                    Free Consultation
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#111827] mb-2">
                  Request A Call Back
                </h3>
                <p className={`${inter.className} text-[#6b7280] text-[13px] mb-6`}>
                  Tell us about your property and a manager will call you back, usually within the hour.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* User Type Radio Buttons */}
                  <div className="bg-[#fcfbf9] rounded-md p-2 flex gap-4 mb-2 border border-[#f3f4f6]">
                    <label className="flex items-center gap-2 cursor-pointer flex-1 pl-2">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="owner" 
                        checked={formData.userType === "owner"} 
                        onChange={handleChange}
                        className="w-4 h-4 text-[#96683f] border-[#d1d5db] focus:ring-[#96683f]"
                      />
                      <span className={`${inter.className} text-[13px] text-[#111827] font-medium`}>I'm a property owner</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer flex-1">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="tenant" 
                        checked={formData.userType === "tenant"} 
                        onChange={handleChange}
                        className="w-4 h-4 text-[#96683f] border-[#d1d5db] focus:ring-[#96683f]"
                      />
                      <span className={`${inter.className} text-[13px] text-[#4b5563]`}>I'm a tenant</span>
                    </label>
                  </div>

                  {/* Name */}
                  <div>
                    <label className={`${inter.className} block text-[11px] font-bold text-[#6b7280] uppercase tracking-wider mb-1.5`}>Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#96683f] focus:ring-1 focus:ring-[#96683f] transition-all`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`${inter.className} block text-[11px] font-bold text-[#6b7280] uppercase tracking-wider mb-1.5`}>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com" 
                      className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#96683f] focus:ring-1 focus:ring-[#96683f] transition-all`}
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div>
                    <label className={`${inter.className} block text-[11px] font-bold text-[#6b7280] uppercase tracking-wider mb-1.5`}>Phone</label>
                    <div className="flex w-full">
                      <div className="flex items-center justify-center bg-gray-50 border border-r-0 border-[#d1d5db] rounded-l-md px-3 text-sm text-[#4b5563]">
                        🇦🇪 +971
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="50 123 4567" 
                        className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-r-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#96683f] focus:ring-1 focus:ring-[#96683f] transition-all`}
                      />
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className={`${inter.className} block text-[11px] font-bold text-[#6b7280] uppercase tracking-wider mb-1.5`}>Property Type</label>
                    <div className="relative">
                      <select 
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] appearance-none focus:outline-none focus:border-[#96683f] focus:ring-1 focus:ring-[#96683f] transition-all cursor-pointer`}
                      >
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Commercial">Commercial / Retail</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#6b7280]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`${inter.className} block text-[11px] font-bold text-[#6b7280] uppercase tracking-wider mb-1.5`}>Message</label>
                    <textarea 
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Where is the property, and what do you need help with?" 
                      className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#96683f] focus:ring-1 focus:ring-[#96683f] transition-all resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full flex items-center justify-center h-[50px] mt-4 rounded-md bg-[#96683f] hover:bg-[#855b36] transition-all duration-300 ${inter.className} text-[13px] font-bold text-[#ffffff] uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg`}
                  >
                    {status === "loading" ? "Sending..." : "Request A Call"}
                  </button>
                  
                  <p className={`${inter.className} text-center text-[12px] text-[#6b7280] mt-4`}>
                    Free consultation. No obligation.
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}