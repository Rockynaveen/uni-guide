import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Map, Navigation, ArrowRight } from "lucide-react";

export default function BranchesSection() {
  const branches = [
    {
      id: "uk",
      name: "UK Head Office",
      country: "United Kingdom",
      address: "252 - 256 Romford Road Exactly Building Behind Bus Top 3rd Floor Unit 3 E7 9HZ",
      phones: ["07979797734"],
      emails: ["info@uni-guide.co.uk"],
      website: "www.uni-guide.co.uk",
      highlight: "Exactly building behind the bus top - Unit 3, 3rd floor",
      color: "from-blue-600 via-indigo-600 to-indigo-800",
    },
    {
      id: "hyderabad",
      name: "Hyderabad Branch",
      country: "India",
      address: "Himayath Nagar Main Road Near Malabar Gold Showroom Opp Maruti Suzuki Car Showroom GS Tower Suite 203 2nd Floor & 303 3rd Floor Hyderabad 500029 India.",
      phones: ["+919000757786", "+919959571900"],
      emails: ["Hyd@uni-guide.co.uk"],
      highlight: "GS Tower Suite 203 & 303 - Near Malabar Gold",
      color: "from-amber-500 via-orange-600 to-red-600",
    },
    {
      id: "mumbai",
      name: "Mumbai Branch",
      country: "India",
      address: "510 Dheeraj Heritage S.V Road Mumbai Maharashtra 400054 India",
      phones: ["+919989485862", "+919553103125"],
      emails: ["mumbai@uni-guide.co.uk"],
      highlight: "Dheeraj Heritage 5th Floor - S.V Road",
      color: "from-rose-500 via-red-500 to-orange-600",
    },
    {
      id: "delhi",
      name: "Delhi Branch",
      country: "India",
      address: "Kanchanjunga Building 303 3rd Floor 18 Barakhamba Road New Delhi 110001 India.",
      phones: ["+918919870728", "+919912328770"],
      emails: ["delhi@uni-guide.co.uk"],
      highlight: "Kanchanjunga Building 3rd Floor - Barakhamba Road",
      color: "from-teal-500 via-emerald-500 to-emerald-600",
    },
    {
      id: "australia",
      name: "Australia Branch",
      country: "Australia",
      address: "6 Faraday Court Trugnina Victoria Melbourne 3029 Australia",
      phones: ["+61433721957", "+61426040786"],
      emails: ["aus@uni-guide.co.uk"],
      highlight: "6 Faraday Court, Victoria Melbourne",
      color: "from-indigo-600 via-purple-600 to-purple-800",
    },
  ];

  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <section id="branches" className="py-12 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background Soft Blurs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-primary font-extrabold text-xs uppercase tracking-widest bg-primary/10 inline-block px-3.5 py-1.5 rounded-full">
            Our Network
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary tracking-tight">
            Our Global <span className="text-gradient-primary font-serif italic">Office Branches</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-textMuted leading-relaxed">
            With physical consultation hubs across the UK, India, and Australia, our academic representatives are always nearby to support your admission.
          </p>
        </div>

        {/* Global Directory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Branch Tabs Selector */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-xs font-black text-neutral-textMuted uppercase tracking-widest px-2">
              Select Office Location
            </p>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-3 shrink-0 select-scrollbar">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`px-6 py-5 rounded-2xl font-bold text-sm transition-all text-left flex flex-col gap-1.5 shrink-0 cursor-pointer lg:w-full border shadow-sm ${
                    activeBranch.id === branch.id
                      ? "bg-secondary text-white border-secondary shadow-lg scale-[1.02]"
                      : "bg-neutral-light text-secondary border-neutral-border/50 hover:bg-neutral-border/20"
                  }`}
                >
                  <span className={`text-[10px] font-black uppercase tracking-wider ${
                    activeBranch.id === branch.id ? "text-primary" : "text-neutral-textMuted"
                  }`}>
                    {branch.country}
                  </span>
                  <span className="text-base font-extrabold font-sans">
                    {branch.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-8 bg-neutral-light border border-neutral-border/60 rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl relative overflow-hidden animate-fade-in-up hover:border-primary/20 transition-all duration-300">
            
            {/* Accent blob */}
            <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${activeBranch.color} opacity-10 rounded-bl-full pointer-events-none`} />

            {/* Details (Left half of panel) */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black text-primary uppercase tracking-widest">
                  {activeBranch.country} Center
                </span>
                <h3 className="text-2xl font-extrabold text-secondary mt-1 font-serif">
                  {activeBranch.name}
                </h3>
              </div>

              {/* Address card */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-neutral-border/40 shadow-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider">Office Address</p>
                  <p className="text-xs md:text-sm text-neutral-textMuted leading-relaxed font-medium">
                    {activeBranch.address}
                  </p>
                  {activeBranch.highlight && (
                    <span className="inline-block text-[10px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md mt-2">
                      {activeBranch.highlight}
                    </span>
                  )}
                </div>
              </div>

              {/* Contact list */}
              <div className="space-y-4 border-t border-neutral-border/60 pt-4">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-white rounded-xl border border-neutral-border/30 text-primary shadow-sm">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-textMuted uppercase tracking-wider">Call Support</p>
                    <div className="flex flex-wrap gap-x-4">
                      {activeBranch.phones.map((phone, pIdx) => (
                        <a
                          key={pIdx}
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="text-xs md:text-sm text-secondary hover:text-primary transition-colors font-semibold"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-white rounded-xl border border-neutral-border/30 text-primary shadow-sm">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-textMuted uppercase tracking-wider">Email Admissions</p>
                    {activeBranch.emails.map((email, eIdx) => (
                      <a
                        key={eIdx}
                        href={`mailto:${email}`}
                        className="text-xs md:text-sm text-secondary hover:text-primary transition-colors font-semibold"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Website */}
                {activeBranch.website && (
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 bg-white rounded-xl border border-neutral-border/30 text-primary shadow-sm">
                      <Globe className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-textMuted uppercase tracking-wider">Official Domain</p>
                      <a
                        href={`https://${activeBranch.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs md:text-sm text-secondary hover:text-primary transition-colors font-semibold"
                      >
                        {activeBranch.website}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Map Art Card (Right half of panel) */}
            <div className="md:col-span-5 flex flex-col justify-center items-center">
              <div className={`w-full aspect-square rounded-3xl bg-gradient-to-br ${activeBranch.color} p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group`}>
                
                {/* Background grid markings for map feel */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
                {/* Subtle light leak overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />

                <div className="flex justify-between items-start z-10">
                  <Map className="w-8 h-8 opacity-80" />
                  <span className="text-[9px] uppercase font-bold tracking-widest bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-md">
                    Directions API
                  </span>
                </div>

                <div className="space-y-2.5 z-10">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shadow-lg animate-pulse">
                    <Navigation className="w-4 h-4 fill-current rotate-45" />
                  </div>
                  <p className="text-sm font-extrabold tracking-tight">Virtual Navigator Active</p>
                  <p className="text-[10px] text-white/80 leading-relaxed font-medium">
                    Tap below to launch official Google Maps direction route to {activeBranch.name}.
                  </p>
                </div>

                {/* Action button */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    activeBranch.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white text-secondary hover:bg-primary hover:text-white font-extrabold py-3 rounded-2xl text-center text-xs transition-all flex items-center justify-center gap-1.5 z-10 cursor-pointer shadow-md hover:scale-[1.02]"
                >
                  <span>Launch Map Navigation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .select-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .select-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .select-scrollbar::-webkit-scrollbar-thumb {
          background: #ced7e4;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
