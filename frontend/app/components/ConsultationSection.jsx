"use client";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { useState } from "react";


const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });


export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    userType: "owner", // New field for radio button
    name: "",
    email: "",
    phone: "",
    propertyType: "Apartment",
    message: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Connect to your Express Backend (assuming it's running on localhost:5000)
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
        // Reset form
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

  return (
    <section className="py-20 bg-[#fcf9f6] overflow-hidden relative border-t border-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Trust & Value Proposition */}
          <div className="flex-1 w-full">
            <div className="inline-flex mb-6">
              <span className={`${inter.className} bg-[#ffffff] border border-[#e5e7eb] text-[#b07e50] px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider`}>
                Free Consultation
              </span>
            </div>
            
            <h2 className={`${jakarta.className} text-3xl md:text-4xl font-semibold text-[#111827] leading-tight mb-5`}>
              Ready to maximize your <br /> property's potential?
            </h2>
            
            <p className={`${inter.className} text-[#4b5563] text-[15px] leading-relaxed mb-10 max-w-md`}>
              Whether you are an overseas investor or a local landlord, we provide end-to-end property management that guarantees peace of mind and maximum ROI.
            </p>

            {/* Trust Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ffffff] border border-[#e5e7eb] flex items-center justify-center text-[#b07e50]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className={`${jakarta.className} text-[#111827] font-semibold text-[14px] mb-1`}>RERA Certified & Fully Compliant</h4>
                  <p className={`${inter.className} text-[#6b7280] text-[13px] leading-relaxed`}>Legally sound management with zero hidden fees.</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ffffff] border border-[#e5e7eb] flex items-center justify-center text-[#b07e50]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className={`${jakarta.className} text-[#111827] font-semibold text-[14px] mb-1`}>Absolute Transparency</h4>
                  <p className={`${inter.className} text-[#6b7280] text-[13px] leading-relaxed`}>Monthly photo reports, invoices, and 24/7 portal access.</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ffffff] border border-[#e5e7eb] flex items-center justify-center text-[#b07e50]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h4 className={`${jakarta.className} text-[#111827] font-semibold text-[14px] mb-1`}>Dedicated Account Manager</h4>
                  <p className={`${inter.className} text-[#6b7280] text-[13px] leading-relaxed`}>One point of contact who knows your property inside out.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Premium Form */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="bg-[#ffffff] rounded-2xl p-8 border border-[#e5e7eb] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              
              <h3 className={`${jakarta.className} text-xl font-semibold text-[#111827] mb-6`}>
                Request a Call Back
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* NEW: User Type Radio Buttons */}
                <div className="mb-4">
                  <label className={`${inter.className} block text-[12px] font-medium text-[#374151] mb-2`}>I am a...</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="owner" 
                        checked={formData.userType === "owner"} 
                        onChange={handleChange}
                        className="w-4 h-4 text-[#b07e50] border-[#d1d5db] focus:ring-[#b07e50]"
                      />
                      <span className={`${inter.className} text-sm text-[#374151]`}>Property Owner</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="tenant" 
                        checked={formData.userType === "tenant"} 
                        onChange={handleChange}
                        className="w-4 h-4 text-[#b07e50] border-[#d1d5db] focus:ring-[#b07e50]"
                      />
                      <span className={`${inter.className} text-sm text-[#374151]`}>Tenant</span>
                    </label>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className={`${inter.className} block text-[12px] font-medium text-[#374151] mb-1.5`}>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all`}
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`${inter.className} block text-[12px] font-medium text-[#374151] mb-1.5`}>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all`}
                    />
                  </div>
                  <div>
                    <label className={`${inter.className} block text-[12px] font-medium text-[#374151] mb-1.5`}>Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567" 
                      className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all`}
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className={`${inter.className} block text-[12px] font-medium text-[#374151] mb-1.5`}>Property Type</label>
                  <div className="relative">
                    <select 
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] appearance-none focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all cursor-pointer`}
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
                  <label className={`${inter.className} block text-[12px] font-medium text-[#374151] mb-1.5`}>Message</label>
                  <textarea 
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your property..." 
                    className={`${inter.className} w-full bg-[#ffffff] border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:border-[#b07e50] focus:ring-1 focus:ring-[#b07e50] transition-all resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full flex items-center justify-center h-[48px] mt-2 rounded-md bg-[#b07e50] hover:bg-[#96683f] transition-colors ${inter.className} text-[13px] font-semibold text-[#ffffff] disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {status === "loading" ? "Sending..." : "Submit Request"}
                </button>
                
                <p className={`${inter.className} text-center text-[11px] text-[#9ca3af] mt-3`}>
                  We respect your privacy. No spam, guaranteed.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}