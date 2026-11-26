"use client";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { useState, useEffect } from "react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Popup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    userType: "owner",
    name: "",
    email: "",
    phone: "",
    propertyType: "Apartment",
    message: ""
  });
  
  const [status, setStatus] = useState("idle");

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
        onClose(); // Close modal on success
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#111827]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-[#e5e7eb] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Accent Line */}
        {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b07e50] to-transparent opacity-80" /> */}

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6b7280] hover:text-[#111827] hover:bg-[#f3f4f6] rounded-full transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <h3 className={`${jakarta.className} text-xl font-semibold text-[#111827] mb-1`}>
            Schedule a Visit
          </h3>
          <p className={`${inter.className} text-[#6b7280] text-sm mb-6`}>
            Fill out the form below and our team will get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* User Type Radio Buttons */}
            <div>
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

            {/* Email & Phone */}
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
          </form>
        </div>
      </div>
    </div>
  );
}