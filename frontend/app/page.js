import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ConsultationSection from "./components/ConsultationSection";
import Services from "./components/Services";
import EightStepsToSuccess from "./components/EightStepsToSuccess";
import WhatsIncluded from "./components/WhatsIncluded";
import OverviewSection from "./components/OverviewSection";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";
import About from "./components/About";
import Properties from "./components/Properties";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      {/* <ConsultationSection /> */}
      <OverviewSection />
      <Services />
      <EightStepsToSuccess />
      {/* <WhatsIncluded /> */}
      
      <FAQSection />
      <ImageSection />
      {/* <Properties/> */}
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
