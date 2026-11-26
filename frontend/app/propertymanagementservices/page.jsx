import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ConsultationSection from "./components/ConsultationSection";
import Services from "./components/Services";
import EightStepsToSuccess from "./components/EightStepsToSuccess";
import WhatsIncluded from "./components/WhatsIncluded";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ConsultationSection />
      <WhyChooseUs/>
      <Services />
       <ImageSection />
      <EightStepsToSuccess />
      <WhatsIncluded />
     
      <FAQSection />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
