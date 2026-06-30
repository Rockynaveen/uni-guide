import { ArrowRight, Phone } from "lucide-react";

interface CtaSectionProps {
  onApplyNowClick: () => void;
}

export default function CtaSection({ onApplyNowClick }: CtaSectionProps) {
  return (
    <section className="w-full bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white py-12 md:py-24 relative overflow-hidden border-b-8 border-primary">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full filter blur-3xl pointer-events-none" />
      
      {/* Subtle background overlay elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,92,53,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_35%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-6 text-left flex flex-col items-start relative z-10">
          <span className="text-primary font-extrabold text-xs uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 animate-pulse-subtle">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to Secure Your Admission in a <span className="text-primary">Top Global</span> University?
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            Get 100% free expert counseling, quick course matching, and visa guidance. Our experienced advisors in London, Delhi, Mumbai, and Sydney are here to help you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={onApplyNowClick}
              className="w-full sm:w-auto bg-primary hover:bg-white hover:text-secondary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group cursor-pointer text-sm"
            >
              <span>Speak to an Advisor</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <a
              href="tel:07979797734"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/15 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+44 7979 797734</span>
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group z-10 bg-secondary/50">
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
          <img
            src="/cta_student_group.png"
            alt="Successful Global Students"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Overlay border to make it integrate elegantly */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none z-30" />
        </div>
      </div>
    </section>
  );
}

