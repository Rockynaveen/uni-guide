import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import UniversitiesSection from "./components/UniversitiesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import BranchesSection from "./components/BranchesSection";
import ContactForm from "./components/ContactForm";
import ContactUsPage from "./components/ContactUsPage";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  const [selectedUni, setSelectedUni] = useState("");
  const [currentPage, setCurrentPage] = useState<"home" | "contact">("home");
  const [scrollToTarget, setScrollToTarget] = useState<string | null>(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  // Refresh AOS elements when route view changes
  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  // Core navigation handler coordinating page switches and section scrolling
  const handleNavigate = (page: "home" | "contact", sectionId?: string) => {
    if (page === "contact") {
      setCurrentPage("contact");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      setCurrentPage("home");
      if (sectionId && sectionId !== "home") {
        setScrollToTarget(sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Perform smooth scroll to section after landing page renders
  useEffect(() => {
    if (currentPage === "home" && scrollToTarget) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setScrollToTarget(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, scrollToTarget]);

  const handleSelectUniversity = (uniName: string) => {
    setSelectedUni(uniName);
    handleNavigate("home", "contact");
  };

  return (
    <div className="min-h-screen bg-[#f0f5fb] flex flex-col font-sans">
      {/* Global Navigation Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main className="flex-grow">
        {currentPage === "contact" ? (
          <ContactUsPage onBackToHome={() => handleNavigate("home")} />
        ) : (
          <>
            {/* Hero Banner */}
            <HeroSection
              onApplyNowClick={() => handleNavigate("home", "contact")}
              onExploreClick={() => handleNavigate("home", "universities")}
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
            <CtaSection onApplyNowClick={() => handleNavigate("home", "contact")} />
          </>
        )}
      </main>

      {/* Global Site Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
