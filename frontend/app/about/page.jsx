import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutBanner from "./components/AboutBanner";
import WhoWeAre from "./components/WhoWeAre";
import CoreValues from "./components/CoreValues";
import OurStory from "./components/OurStory";
import CTA from "./components/CTA"
import WhyChooseUs from "./components/WhyChooseUs"

export const metadata = {
  title: "About Us — Dubai Homes",
  description: "Learn more about Dubai Homes, your trusted partner for premium property management in Dubai.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#ffffff]">
        <AboutBanner />
        <OurStory />
        <CoreValues />
        <WhyChooseUs/>
      </main>
      <CTA/>
      <Footer />
    </>
  );
}