"use client";

import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function TermsOfUsePage() {
  return (
    <>
    <Navbar/>
    <main className={`${playfair.variable} ${inter.variable} bg-[#fcfbf9] min-h-screen`}>
      
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 bg-[#151310] overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#96683f]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#96683f]" />
            <span className={`${inter.className} text-[#96683f] text-[12px] font-bold uppercase tracking-[0.2em]`}>
              Legal Information
            </span>
            <span className="w-8 h-[1px] bg-[#96683f]" />
          </div>
          
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight">
            Terms of <span className="italic text-[#96683f]">Use</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <div className={`${inter.className} space-y-8 text-[#4b5563] text-[15px] md:text-[16px] leading-[1.8]`}>
            
            <p className="text-lg text-[#111827] font-medium leading-relaxed">
              Welcome to the Manage Dubai Properties website. Manage Dubai Properties provides the managedubaiproperties.com web site and related services to you, subject to the following terms and conditions of use ("Terms and Conditions"). Please read the Terms and Conditions carefully before accessing or using the Web Site.
            </p>

            <p>
              By accessing or using the Website, you agree to be bound by the Terms and Conditions. If you do not agree with the terms and conditions, you may not access or otherwise use the web site.
            </p>

            {/* Section 1 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Privacy
              </h2>
              <p>
                Please review our <Link href="/privacy" className="text-[#96683f] hover:underline transition-all">Privacy Policy</Link>, which governs the protection and use of any personal information you may provide to us.
              </p>
            </div>

            {/* Section 2 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Copyright
              </h2>
              <p>
                All content on this Web Site, including sales listings, text, graphics, photographs, logos, images, audio clips, video clips, digital downloads, and data compilations is the property of Broker or its third party content suppliers and licensors and is protected by copyright laws. All software used on this site is the property of Broker or its software suppliers and is protected by copyright laws.
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Trademarks
              </h2>
              <p>
                The name Manage Dubai Properties and its related logos, are registered trademarks of Manage Dubai Properties. They may not be used in conjunction with any product or service which is not offered by Broker, is likely to cause confusion among customers, or in any manner that disparages or discredits Broker. Any other trademarks not owned by Broker that appear on this Web Site are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Broker.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Scope of Use
              </h2>
              <p>
                This Website and its Content, including the sales listings on it, is solely intended to assist individual customers and real estate brokers in contacting Broker and its agents concerning Listings and other services of Broker. You may not contact a Listings' owner directly. You may not sell, copy, distribute, license, transfer, publish, display, link to another website, transmit, download, store, post, enter into a database or in any way exploit the Content, including the Listings, in whole or in part. No person, including without limitation any real estate broker or real estate professional, may market or make commercial use of Broker's Listings or Content in any way, including without limitation, advertising Broker's Listings, copying Broker's Listings for its own commercial use or use on other websites or in marketing materials, or contacting directly Broker's customers or Listings' owners. Any real estate broker who uses an individual Listing for its customer must first enter into Co-Brokerage Agreement or Referral Agreement with Broker.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                No Warranties
              </h2>
              <div className="space-y-4">
                <p>
                  All information on the Web Site is provide to Users on an "as is", "as available", and "believed accurate" basis without warranty of any kind either express or implied, including but not limited to the implied warranties merchantability, fitness for a particular purpose, non-infringement or availability. All information is subject to errors, or change or withdrawal without notice.
                </p>
                <p>
                  Broker does not warrant or make representations regarding the results that may be obtained by using the Web Site or as to the reliability, accuracy or currency of any information, content or service acquired by use of the Web Site. Listings may be withdrawn from the market at any time and are subject to errors, omissions, and prior sale without notice. Broker does not warrant that the Web Site, its servers, or e-mail transmitted by Broker is free of viruses or other harmful components.
                </p>
                <p>
                  Content may be updated, changed, modified, or withdrawn at any time. Use of the Web Site and the Content is at your sole risk. Neither Broker, the Content providers, or any person involved in the creation, production, distribution of this Web Site warrant that the functions contained in this Web Site will be uninterrupted or error-free, that defects will be corrected, or that the server that makes the Content available will be free of viruses or other harmful components.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Limitation of Liability
              </h2>
              <p>
                Broker, its directors, officers, employees, agents, vendors, and suppliers shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with access to or use of the Web Site or the Listings, even if Broker has been advised of the possibility of such damages.
              </p>
            </div>

            {/* Section 7 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Indemnification
              </h2>
              <p>
                You agree to indemnify, defend and hold harmless Broker, its officers, directors, employees, affiliates, and agents, from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from your violation of these Terms and Conditions.
              </p>
            </div>

            {/* Section 8 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Third Party Rights
              </h2>
              <p>
                These Terms and Conditions are for the sole benefit of Broker, its officers, directors, employees, affiliates, and agents. No other person, including any user of the Website, shall have the right to assert a claim under these Terms and Conditions.
              </p>
            </div>

            {/* Section 9 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Modifications to Terms of Use and Content
              </h2>
              <p>
                Broker reserves the right, in its sole discretion, to modify, alter or otherwise update these Terms and Conditions at any time. By using this Web Site after Broker has posted notice of such modifications, alterations or updates, you agree to be bound by such revised Terms and Conditions. In addition, Broker reserves the right to make improvements and/or changes in the Content of the Web Site at any time.
              </p>
            </div>

            {/* Section 10 */}
            <div className="pt-6 pb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Violations of Terms and Conditions of Use
              </h2>
              <p>
                Broker reserves the right to seek all remedies available at law and in equity for violations of the Terms and Conditions set forth in the Web Site, including the right to block access from a particular Internet address to the Web Site.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
    
  );
}