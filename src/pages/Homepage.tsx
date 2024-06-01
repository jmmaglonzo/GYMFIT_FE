import Benefits from "../components/Benefits";
import ContactSection from "../components/ContactSection";
import CtaSection from "../components/CtaSection";
import Feature from "../components/Feature";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Goals />
      <FeatureList />
      <Benefits />
      <Testimonials />
      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Homepage;
