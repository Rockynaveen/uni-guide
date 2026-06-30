import { Phone, Mail, MapPin, Send, GraduationCap } from "lucide-react";
import logoImg from "../assets/uniguide logo.jpeg";

interface FooterProps {
  onNavigate: (page: "home" | "contact", sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Home", id: "home", page: "home" as const },
    { name: "Universities", id: "universities", page: "home" as const },
    { name: "About Us", id: "about", page: "home" as const },
    { name: "Our Process", id: "process", page: "home" as const },
    { name: "Our Branches", id: "branches", page: "home" as const },
    { name: "Contact & Apply", id: "contact", page: "contact" as const },
  ];

  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Column 1: Brand Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-3 rounded-lg inline-block">
            <img src={logoImg} alt="Uni Guide Logo" className="h-10 w-auto" />
          </div>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Uni Guide is a professional university representative dedicated to helping international students enroll in leading UK, Australian, and global colleges. Our counseling is 100% free.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-300" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-300" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-300" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-300" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onNavigate(link.page, link.id)}
                  className="text-xs md:text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer text-left"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: UK Head Office Contacts */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
            UK Head Office
          </h4>
          <div className="space-y-3.5 text-xs md:text-sm text-gray-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                252 - 256 Romford Road, Exactly Building Behind Bus Stop, 3rd Floor Unit 3, E7 9HZ, London, UK
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:07979797734" className="hover:text-primary transition-colors">
                07979797734
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:info@uniguide.co.uk" className="hover:text-primary transition-colors">
                info@uniguide.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary border-l-2 border-primary pl-2">
            Newsletter
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Subscribe to our newsletter to receive updates on international intake periods, scholarships, and fee waivers.
          </p>
          <div className="flex rounded-xl overflow-hidden bg-white/5 border border-white/10 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-none py-2.5 px-3 outline-none text-xs text-white"
            />
            <button className="bg-primary hover:bg-primary-hover px-4 flex items-center justify-center transition-colors cursor-pointer text-white" aria-label="Subscribe">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 Uni Guide. All Rights Reserved. Licensed University Representatives.</p>
        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span>Bridging Student Success Internationally</span>
        </div>
      </div>
    </footer>
  );
}
