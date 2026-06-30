import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Award,
  Target,
  Eye,
  GraduationCap,
  Globe,
} from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationFrame: number;

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easedProgress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      cancelAnimationFrame(animationFrame);
      setCount(0);
      animationFrame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          cancelAnimationFrame(animationFrame);
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const benefits = [
    "Expert course and university matching",
    "Detailed eligibility and transcript review",
    "Direct liaison with university admission officers",
    "Comprehensive guidance on visa & financial planning",
    "Pre-departure briefing and accommodation assistance",
    "Second Master's & specialized PhD/DBA pathway guidance",
  ];

  const stats = [
    {
      targetValue: 25,
      suffix: "+",
      label: "Offices Worldwide",
      icon: Globe,
      color: "text-primary",
    },
    {
      targetValue: 100,
      suffix: "%",
      label: "Free Counseling",
      icon: GraduationCap,
      color: "text-orange-400",
    },
    {
      targetValue: 86,
      suffix: "K+",
      label: "Admissions Guided",
      icon: CheckCircle2,
      color: "text-amber-400",
    },
    {
      targetValue: 8,
      suffix: "+",
      label: "Countries Represented",
      icon: Award,
      color: "text-red-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 py-24 md:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-3">
              <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary">
                About Our Agency
              </p>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary md:text-5xl">
                Trusted University <br />
                <span className="font-serif italic text-gradient-primary">
                  Admission Representatives
                </span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-neutral-textMuted md:text-base">
              For years, Uni Guide has been helping students bridge the gap
              between their aspirations and world-class academic institutions.
              We represent multiple top-tier universities across the UK and
              other major international destinations.
            </p>

            <p className="text-sm leading-relaxed text-neutral-textMuted">
              Thinking of pursuing a second Master's, Bachelor's, MRes, DBA, or
              PhD? Our expert team is happy to assist you with all your
              university admission queries, including course selection,
              eligibility, application guidance, and the admissions process. Get
              in touch with us today—we're here to help!
            </p>

            <div className="grid grid-cols-1 gap-4 border-t border-neutral-light pt-4 md:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-sm font-semibold text-secondary"
                >
                  <span className="mt-0.5 shrink-0 rounded-full bg-primary/10 p-1 text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative space-y-6 rounded-3xl border border-neutral-border/60 bg-neutral-light p-6 transition-all duration-500 hover:shadow-xl md:p-8 lg:col-span-5">
            <div className="flex rounded-2xl bg-gray-200/50 p-1">
              <button
                onClick={() => setActiveTab("mission")}
                className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${activeTab === "mission"
                    ? "scale-[1.02] bg-white text-secondary shadow-md"
                    : "text-neutral-textMuted hover:text-secondary"
                  }`}
              >
                <Target className="h-4 w-4 text-primary" />
                <span>Our Mission</span>
              </button>

              <button
                onClick={() => setActiveTab("vision")}
                className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${activeTab === "vision"
                    ? "scale-[1.02] bg-white text-secondary shadow-md"
                    : "text-neutral-textMuted hover:text-secondary"
                  }`}
              >
                <Eye className="h-4 w-4 text-primary" />
                <span>Our Vision</span>
              </button>
            </div>

            <div className="flex min-h-[180px] flex-col justify-center rounded-2xl border border-neutral-border/40 bg-white p-6 shadow-sm">
              {activeTab === "mission" ? (
                <div className="space-y-4 animate-fade-in-up">
                  <h3 className="font-serif text-lg font-extrabold text-secondary">
                    Empowering Student Dreams
                  </h3>

                  <p className="text-xs leading-relaxed text-neutral-textMuted md:text-sm">
                    Our mission is to democratize access to premium
                    international education. We aim to provide transparent,
                    accurate, and completely free application processing and
                    advisory support so that every student can study at their
                    dream university without friction.
                  </p>

                  <p className="border-l-2 border-primary pl-3 text-xs font-bold italic text-primary">
                    "Guiding you step-by-step from eligibility verification to
                    university enrollment."
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in-up">
                  <h3 className="font-serif text-lg font-extrabold text-secondary">
                    Connecting Global Knowledge
                  </h3>

                  <p className="text-xs leading-relaxed text-neutral-textMuted md:text-sm">
                    We envision a future where borders do not limit education.
                    By building deep, direct relationships with global academic
                    boards, we plan to expand our university network to support
                    hundreds of programs, including advanced professional DBAs
                    and custom PhD tracks.
                  </p>

                  <p className="border-l-2 border-primary pl-3 text-xs font-bold italic text-primary">
                    "Creating a global bridge of certified academic
                    representation."
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 border-t border-neutral-border pt-6">
              <div className="relative flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-border/40 bg-secondary shadow-md">
                <img
                  src="/british_council_certified.jpg"
                  alt="British Council Certified Agent"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-extrabold text-secondary">
                  Official University Representative
                </p>
                <p className="text-[11px] leading-relaxed text-neutral-textMuted">
                  Directly certified by the British Council and leading
                  institutional boards to facilitate UK university admissions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark p-8 text-white shadow-xl lg:grid-cols-4 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ff5c35_0%,transparent_50%)] opacity-10" />

          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <div
                key={idx}
                className="group relative z-10 flex flex-col items-center space-y-2.5 text-center"
              >
                <div className="rounded-2xl bg-white/5 p-4 text-white shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>

                <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                  <AnimatedCounter
                    end={stat.targetValue}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </h3>

                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 md:text-xs">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}