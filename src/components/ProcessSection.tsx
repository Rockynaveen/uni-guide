import { FileText, ClipboardCheck, Users, GraduationCap } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Complete Online Form",
      description: "Fill out our quick Apply Now application form with your academic goals and contact details.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Eligibility Review",
      description: "Our advisors review your transcripts, certificates, and scores to check criteria for partner universities.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Admissions Guidance",
      description: "We conduct admission prep, course mapping, and compile your final applications for submission.",
      icon: Users,
    },
    {
      number: "04",
      title: "Admission Letter",
      description: "The university issues your offer. We then support you with visa applications and enrollment stages.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="process" className="py-12 px-4 md:px-8 bg-neutral-light border-y border-neutral-border/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,#003a66_0%,transparent_3%)] opacity-30" />
      <style>{`
        .bg-dashed-line {
          background-image: linear-gradient(to right, #ced7e4 60%, rgba(255,255,255,0) 0%);
          background-position: bottom;
          background-size: 16px 3px;
          background-repeat: repeat-x;
        }
        [data-aos="draw-dashed-line"] {
          width: 0;
          transition-property: width !important;
        }
        [data-aos="draw-dashed-line"].aos-animate {
          width: 76% !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-primary font-extrabold text-xs uppercase tracking-widest bg-primary/10 inline-block px-3.5 py-1.5 rounded-full">
            Our Work Flow
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary tracking-tight">
            Our Simple <span className="text-gradient-primary font-serif italic">4-Step Process</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-textMuted leading-relaxed">
            We make university entry seamless and stress-free. Here is the path from your initial inquiry to your official university acceptance letter.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connector Line (Desktop) */}
          <div
            data-aos="draw-dashed-line"
            data-aos-delay="100"
            data-aos-duration="1200"
            className="absolute top-12 left-[12%] h-[3px] bg-dashed-line hidden lg:block z-0"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
                className="relative z-10 flex flex-col items-center text-center space-y-5 group"
              >

                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-3xl bg-white border border-neutral-border/80 group-hover:border-primary flex items-center justify-center relative shadow-sm group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:animate-float">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-300" />

                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-orange-500 text-white text-xs font-black w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                    {step.number}
                  </span>
                </div>

                {/* Text Info */}
                <div className="space-y-2.5 max-w-[240px] bg-white/40 p-4 rounded-2xl border border-transparent hover:border-neutral-border/40 hover:bg-white/95 transition-all duration-300">
                  <h3 className="font-extrabold text-base md:text-lg text-secondary group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-textMuted leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
