import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import UniversitiesSection from "./components/UniversitiesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import BranchesSection from "./components/BranchesSection";
import ContactForm from "./components/ContactForm";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  const [selectedUni, setSelectedUni] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectUniversity = (uniName: string) => {
    setSelectedUni(uniName);
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen bg-[#f0f5fb] flex flex-col font-sans">
      {/* Global Navigation Header */}
      <Header onScrollToSection={scrollToSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroSection
          onApplyNowClick={() => scrollToSection("contact")}
          onExploreClick={() => scrollToSection("universities")}
        />

        {/* About Section & Stats */}
        <AboutSection />

        {/* 13 Universities Overlapping Carousel Section */}
        <UniversitiesSection onSelectUniversity={handleSelectUniversity} />

        {/* Why Choose Us Feature Section */}
        <WhyChooseUs />

        {/* Admissions Flow Workflow */}
        <ProcessSection />

        {/* Global Branches & Navigation */}
        <BranchesSection />

        {/* Apply Now Form Request */}
        <ContactForm
          selectedUniversity={selectedUni}
          onClearSelectedUniversity={() => setSelectedUni("")}
        />

        {/* Call to Action Section */}
        <CtaSection onApplyNowClick={() => scrollToSection("contact")} />
      </main>

      {/* Global Site Footer */}
      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
