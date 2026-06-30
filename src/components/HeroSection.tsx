import { useState, useEffect } from "react";
import { ArrowRight, Award, GraduationCap, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onApplyNowClick: () => void;
  onExploreClick: () => void;
}

export default function HeroSection({ onApplyNowClick, onExploreClick }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Shape Your Future with a UK or Global Degree",
      subtitle: "Thinking of pursuing a second Master's, Bachelor's, MRes, DBA, or PhD?",
      description: "Our expert team is here to assist you with all your university admission queries, from eligibility reviews and course selection to visa and enrollment guidance.",
      highlight: "Admission Representative",
      image: "/hero_campus_background.png",
    },
    {
      title: "Direct Admission & Quick Processing Times",
      subtitle: "Get admission in top-ranked global universities with full guidance",
      description: "We work directly with major UK and international universities. Fast-track your application and secure your spot today with our 100% free counseling services.",
      highlight: "Direct University Admission",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Expert Assistance at Every Step of the Way",
      subtitle: "Course selection, eligibility check, and application preparation",
      description: "Don't navigate the complex process alone. Let our professional consultants in London, Hyderabad, Delhi, Mumbai, and Australia manage your entry workflow.",
      highlight: "100% Free Counseling",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative w-full h-[600px] md:h-[680px] overflow-hidden bg-secondary">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 via-secondary/85 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-6000 ease-out"
          />
          
          {/* Content Container */}
          <div className="absolute inset-0 z-20 flex items-center pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="w-full lg:w-2/3 text-white space-y-6 animate-fade-in-up">
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                {slide.highlight}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white font-serif">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-primary font-medium">
                  {slide.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onApplyNowClick}
                  className="bg-primary hover:bg-white hover:text-secondary text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <button
                  onClick={onExploreClick}
                  className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-6 md:px-8 rounded-full border-2 border-white/20 hover:border-white transition-all duration-300 cursor-pointer"
                >
                  Explore Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/35 hover:bg-primary text-white transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/35 hover:bg-primary text-white transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 h-6" />
      </button>

      {/* Floating Info Panel (Bottom of Hero) */}
      <div className="absolute bottom-0 right-0 left-0 bg-secondary-dark/90 backdrop-blur-sm py-4 border-t border-white/10 z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 gap-6 text-white text-sm">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold text-gray-200">100% Free Guidance</p>
              <p className="text-xs text-gray-400">Zero service fees, pure support</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-x border-white/10 px-6">
            <Award className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold text-gray-200">Official Representative</p>
              <p className="text-xs text-gray-400">Direct link to partner universities</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold text-gray-200">All Degree Levels</p>
              <p className="text-xs text-gray-400">Bachelors, Masters, PhD, DBA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
