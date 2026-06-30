import { useState } from "react";
import { GraduationCap, Compass, Building2, Landmark, Award, Search } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface UniversitiesSectionProps {
  onSelectUniversity: (uniName: string) => void;
}

export default function UniversitiesSection({ onSelectUniversity }: UniversitiesSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const universities = [
    { name: "Northumbria University", location: "Newcastle / London, UK", icon: GraduationCap, active: false },
    { name: "University of East London", location: "London, UK", icon: Landmark, active: true }, // Highlighted active matching screenshot style
    { name: "Derby University", location: "Derby, UK", icon: Compass, active: false },
    { name: "Regent College London", location: "London, UK", icon: GraduationCap, active: false },
    { name: "York St John University", location: "London / York, UK", icon: Building2, active: false },
    { name: "Arden University", location: "London / Birmingham / Online", icon: Compass, active: false },
    { name: "University of Law", location: "Multiple UK Campuses", icon: GraduationCap, active: false },
    { name: "BPP University", location: "London / Manchester, UK", icon: Landmark, active: false },
    { name: "Teesside University", location: "Middlesbrough / London, UK", icon: Compass, active: false },
    { name: "Wallbrook Institute London", location: "London, UK", icon: GraduationCap, active: false },
    { name: "University College Birmingham", location: "Birmingham, UK", icon: Landmark, active: false },
    { name: "Ulster University", location: "Northern Ireland / London, UK", icon: Compass, active: false },
    { name: "Greenwich University", location: "London / Kent, UK", icon: Award, active: false },
  ];

  const filteredUniversities = universities.filter((uni) =>
    uni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="universities" className="relative w-full bg-secondary-dark pt-16 pb-28 md:pt-20 md:pb-36 overflow-visible flex flex-col items-center justify-center text-center">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,92,53,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,58,102,0.1),transparent_50%)] pointer-events-none" />

      {/* Main Text Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10 mb-8">
        <p className="text-primary font-extrabold text-xs uppercase tracking-widest bg-primary/10 inline-block px-4 py-2 rounded-full border border-primary/20">
          Top-Tier Partner Universities
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-sans">
          We provide our experts to<br />
          <span className="text-primary italic font-serif font-normal">Secure</span> your admission
        </h2>
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative shadow-md hover:shadow-lg rounded-full overflow-hidden bg-white border border-neutral-border/60 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300 z-10">
          <span className="absolute inset-y-0 left-4 flex items-center text-neutral-textMuted">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search universities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 outline-none text-secondary font-medium text-sm"
          />
        </div>
      </div>

      {/* Overlapping Content (Carousel or Grid) */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 w-full max-w-7xl mx-auto px-12">
        {searchQuery.trim() !== "" ? (
          /* Search Directory Grid view */
          filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-neutral-border/50 shadow-2xl max-h-[360px] overflow-y-auto">
              {filteredUniversities.map((uni, idx) => {
                const Icon = uni.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => onSelectUniversity(uni.name)}
                    className="group flex flex-col items-center justify-center p-5 rounded-xl border border-neutral-border/40 bg-white hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-center min-h-[160px] text-secondary font-bold"
                  >
                    <div className="p-2.5 bg-primary/10 rounded-xl mb-2.5 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs md:text-sm leading-tight tracking-tight font-sans block line-clamp-2 transition-colors duration-300">
                      {uni.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-neutral-border/50 shadow-2xl max-w-md mx-auto text-center">
              <Building2 className="w-12 h-12 text-neutral-textMuted mx-auto mb-3" />
              <p className="text-secondary font-bold text-base">No Universities Found</p>
              <p className="text-xs text-neutral-textMuted mt-1">Try refining your search term.</p>
            </div>
          )
        ) : (
          /* Automatic Autoplay Carousel from shadcn UI */
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {universities.map((uni, idx) => {
                const Icon = uni.icon;
                return (
                  <CarouselItem
                    key={idx}
                    className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
                  >
                    <div
                      onClick={() => onSelectUniversity(uni.name)}
                      className={`group flex flex-col items-center justify-center p-5 rounded-xl border transition-all duration-300 min-h-[175px] hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1.5 cursor-pointer text-center text-secondary font-bold ${uni.active
                          ? "bg-neutral-light border-primary/20"
                          : "bg-white border-neutral-border/40"
                        }`}
                    >
                      <div className="p-2.5 bg-primary/10 rounded-xl mb-2.5 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="text-xs md:text-sm leading-tight tracking-tight font-sans block line-clamp-2 transition-colors duration-300">
                        {uni.name}
                      </span>
                      <p className="text-[10px] text-neutral-textMuted mt-1 font-normal line-clamp-1 group-hover:text-white/80 transition-colors duration-300">{uni.location}</p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-6 md:-left-10 bg-white border border-neutral-border shadow-sm text-secondary hover:bg-neutral-light" />
            <CarouselNext className="-right-6 md:-right-10 bg-white border border-neutral-border shadow-sm text-secondary hover:bg-neutral-light" />
          </Carousel>
        )}
      </div>
    </section>
  );
}
