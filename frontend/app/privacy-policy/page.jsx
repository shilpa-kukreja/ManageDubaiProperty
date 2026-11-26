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

export default function PrivacyPolicyPage() {
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
            Privacy <span className="italic text-[#96683f]">Policy</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <div className={`${inter.className} space-y-8 text-[#4b5563] text-[15px] md:text-[16px] leading-[1.8]`}>
            
            <p className="text-lg text-[#111827] font-medium leading-relaxed">
              Manage Dubai Properties is committed to protecting the privacy of the users of its web site.
            </p>

            <p>
              This statement discloses our privacy practices. The purpose of this statement is to inform you:
            </p>

            <ul className="list-none space-y-3 pl-0 border-l-2 border-[#96683f]/30 pl-6">
              <li className="relative">
                What kinds of information we collect from users of the Manage Dubai Properties website at www.managedubaiproperties.com and how such information is collected;
              </li>
              <li>How the information is used by us;</li>
              <li>Whether we disclose any user information to third parties;</li>
              <li>How you can access, update or delete any information that we collect about you.</li>
              <li>The security procedures which we use to protect your personal information.</li>
            </ul>

            <p>
              By using the Web Site, you signify your assent to the Manage Dubai Properties Privacy Policy. We reserve the right to change, modify, add, or remove portions of our Privacy Policy at any time. If so, any such changes will be posted on this page. Please check this page periodically for changes. Your continued use of this Web Site following the posting of changes to the Manage Dubai Properties Privacy Policy will mean you accept those changes.
            </p>

            {/* Section 1 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                How We Collect Information
              </h2>
              <p>
                Generally, you can visit the Web Site without revealing any personal information. Like many websites, our web servers collect the Internet Protocol addresses, but not the e-mail addresses, of visitors. This information can measure the number of visits, average time spent on the site, pages viewed, and other such statistics. In addition, in order for us to provide certain services to you, you may be asked for information that identifies you, including your name, e-mail address, mailing address, telephone number, fax etc. You may also elect to provide such information to us by sending or responding to e-mails regarding certain listings or services offered on our Web Site. Additionally, you may ask us to store information concerning the type, price, location and features of properties that you are interested in.
              </p>
            </div>

            {/* Section 2 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                How We Use and Disclose Your Information
              </h2>
              <p className="mb-4">
                We collect, generate, retain and use your Personal Information for our own internal purposes in connection with the facilitation, recording and processing of any requests, communications, or interactions you may have with our Web Site. We also automatically collect and store statistics and other information about you and your online activities on an aggregated, non-personally identifiable basis and in a manner that may allow us or our affiliated or related entities to improve our services to you.
              </p>
              <p>
                In addition, your Personal Information may be also be used by us to provide you with information regarding our products and services. For example, we may use your e-mail address to send you special announcements and notifications of new real estate listings, services or promotions that may be of interest to you.
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Cookies
              </h2>
              <p>
                Cookies are small pieces of information that are stores by your browser on your computer's hard drive. Cookies allow web sites to recognize you when you return and can keep track of information specific to you. Consistent with standard practices in the Internet industry, you may occasionally receive cookies from third parties to which you link from our Web Site. We do not control these third party cookies, and they are not subject to this Privacy Policy. If you prefer, you may set your browser to ask for your permission before your receive a cookie.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="mb-6">
                Information about our customers is important to our business, and we are not in the business of selling it to others. We share customer information only with our related or affiliated entities and or in the circumstances described below:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#111827] mb-2">Agents</h3>
                  <p>We may share your information with our experienced team of Manage Dubai Properties Agents, who may use this information to contact you about our sales, leasing, financing and other services.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#111827] mb-2">Business Transfers</h3>
                  <p>Over time, it is possible that a portion or all of our business may be sold. Customer information is generally one of the transferred assets. In the unlikely event that substantially all of our asserts are acquired, your customer information may be transferred, subject to all applicable laws and governmental regulations regarding the transfer and sale of such personal data.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#111827] mb-2">Affiliated Businesses</h3>
                  <p>To the extent that you have provided information indicating that services of our affiliated businesses might be useful to you, we may share such information with such businesses.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#111827] mb-2">Protection of the Company and Others</h3>
                  <p>We release personal information when we believe such release is necessary to comply with law; enforce our Terms and Conditions of Use; or protect the rights, property, or safety of Manage Dubai Properties, its and their officers, directors, employees, agents, and others.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#111827] mb-2">With Your Consent</h3>
                  <p>Other than as set out above, you will receive notice when your Personal Information may be shared with third parties, and you will have the opportunity to elect not to share such information.</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#111827] mb-4">
                Data Security
              </h2>
              <p className="mb-4">
                Data security is critical to us and thus all Personal Information is held in a secured database. While it is impossible to guarantee the complete security of any computer system and the data contained therein, our vendors are required to maintain and implement robust security policies and procedures that combine with available technologies in accordance with prevailing industry standards, all of which are designed to protect the confidentiality, integrity, and availability of your Personal Information. To the extent we are provided with social security numbers or personal financial information, we comply with all applicable regulations regarding the confidentiality and safe disposal of such information.
              </p>
              <p>
                We use Google APIs, including the YouTube Data API, to power features of our platform. For more information on how Google collects and processes data, please see the Google Privacy Policy.
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