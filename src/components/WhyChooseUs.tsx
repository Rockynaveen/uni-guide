import { useState, useEffect } from "react";
import { GraduationCap, CheckCircle2, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChooseUs() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const features = [
    {
      title: "8k+ Successful Student Placements",
      description: "Helping students secure admissions in top universities worldwide.",
      icon: GraduationCap,
    },
    {
      title: "98% Visa Success Rate",
      description: "Expert documentation and interview guidance for smooth approvals.",
      icon: CheckCircle2,
    },
    {
      title: "100% Free Counseling",
      description: "Zero service fees, professional university admissions support.",
      icon: ShieldCheck,
    },
  ];

  // Close modal on Escape key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCertModalOpen(false);
    };
    if (isCertModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isCertModalOpen]);

  return (
    <section className="py-12 md:pt-44 md:pb-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Column: Image */}
        <div className="lg:col-span-5 relative pb-6 lg:pb-0">
          <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] transform -rotate-2 scale-105 pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
            alt="Students working together"
            className="w-full h-[320px] sm:h-[450px] object-cover rounded-[2rem] shadow-2xl relative z-10 border border-neutral-border/30"
          />
          {/* British Council Certified Badge overlapping on bottom right of the image */}
          <div
            onClick={() => setIsCertModalOpen(true)}
            className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-2 rounded-2xl shadow-xl z-20 border border-neutral-border/40 w-36 sm:w-40 hover:scale-105 hover:border-primary/20 transition-all duration-300 cursor-pointer group/badge"
          >
            <img
              src="/british_council_certified.jpg"
              alt="British Council Certified Agent"
              className="w-full h-auto rounded-lg group-hover/badge:opacity-90 transition-opacity"
            />
            <p className="text-[9px] text-center text-secondary font-extrabold mt-1.5 uppercase tracking-wider group-hover/badge:text-primary transition-colors">Certified Agent</p>
          </div>
        </div>

        {/* Right Column: Copy & Feature Cards */}
        <div className="lg:col-span-7 space-y-8 relative">

          {/* Header Copy */}
          <div className="space-y-4">
            <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight tracking-tight">
              Why Students Trust <span className="text-gradient-primary font-serif italic">Uni Guide</span>
            </h2>
            <p className="text-neutral-textMuted text-sm md:text-base leading-relaxed max-w-2xl">
              With proven expertise, global university partnerships, and personalized guidance, we help students confidently achieve their study abroad dreams.
            </p>
          </div>

          {/* SVG dashed loop line running behind the feature cards */}
          <div className="absolute inset-y-0 right-12 w-64 pointer-events-none opacity-20 hidden lg:block select-none z-0">
            <svg className="w-full h-full text-neutral-textMuted/60" fill="none" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
              <path d="M 40,30 C 180,60 120,240 60,280 C 10,310 120,380 140,320" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
              {/* Paper Airplane icon on path */}
              <g transform="translate(136, 330) rotate(-40)">
                <path d="M0,0 L12,-4 L6,8 L4,3 Z" fill="currentColor" />
              </g>
            </svg>
          </div>

          {/* Feature Cards Column */}
          <div className="space-y-4 relative z-10 max-w-xl">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-neutral-border/50 shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 bg-neutral-light text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex items-center justify-center rounded-2xl shrink-0 shadow-inner">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-secondary text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-textMuted text-xs md:text-sm mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Lightbox certificate modal popup */}
      <AnimatePresence>
        {isCertModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertModalOpen(false)}
              className="absolute inset-0 bg-secondary-dark/70 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-xl w-full shadow-2xl relative border border-neutral-border/30 z-10 mx-auto overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="absolute top-4 right-4 bg-neutral-light hover:bg-primary hover:text-white text-secondary p-2 rounded-full transition-all cursor-pointer shadow-sm"
                aria-label="Close certificate"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-primary font-extrabold text-[10px] uppercase tracking-widest">Accredited Representative</p>
                  <h4 className="text-xl md:text-2xl font-extrabold text-secondary font-serif">
                    British Council Certification
                  </h4>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-neutral-border/40 shadow-inner bg-neutral-light/50 p-2 flex items-center justify-center">
                  <img
                    src="/british_council_certified.jpg"
                    alt="British Council Certified Agent Certificate"
                    className="max-h-[50vh] w-auto object-contain rounded-xl shadow-sm"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/600x400?text=British+Council+Certified+Agent";
                    }}
                  />
                </div>

                <p className="text-xs md:text-sm text-neutral-textMuted text-center leading-relaxed font-medium">
                  Uni Guide is officially certified by the British Council. Our academic counselors undergo training and assessment to maintain global standards of integrity and excellence in UK student placement.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
