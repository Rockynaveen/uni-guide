import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import logoImg from "../assets/uniguide logo.jpeg";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "Home", id: "home" },
    { name: "Universities", id: "universities" },
    { name: "About Us", id: "about" },
    { name: "Our Process", id: "process" },
    { name: "Our Branches", id: "branches" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-border/40"
      : "bg-white"
      }`}>
      {/* Header Container */}
      <div className={`w-full flex items-center justify-between transition-all duration-300 px-4 md:px-8 max-w-7xl mx-auto ${
        isScrolled ? "h-16" : "h-20 md:h-24"
      }`}>
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group shrink-0" onClick={() => handleLinkClick("home")}>
          <img
            src={logoImg}
            alt="Uni Guide Logo"
            className={`w-auto object-contain rounded-md transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
            }`}
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/200x80?text=Uni+Guide";
            }}
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center gap-8 px-4">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-secondary font-bold text-sm hover:text-primary transition-colors cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2.5px] after:bg-primary after:transition-all hover:after:w-8"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Phone Call Card on Desktop */}
        <div className="hidden lg:flex items-center">
          {/* Telephone Pill Card (Truvik home-2 style) */}
          <div className="flex items-stretch h-12 bg-primary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 bg-secondary flex items-center justify-center text-white shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="px-4 bg-primary flex flex-col justify-center text-white whitespace-nowrap">
              <p className="text-[9px] uppercase tracking-wider font-semibold opacity-90">UK Office</p>
              <a href="tel:07979797734" className="text-xs md:text-sm font-extrabold hover:underline">
                07979 797734
              </a>
            </div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex items-center lg:hidden gap-4">
          {/* Mobile phone direct link */}
          <a
            href="tel:07979797734"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
            aria-label="Call office"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-secondary p-1.5 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-neutral-border/20 px-6 py-5 absolute left-0 right-0 shadow-xl animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-secondary font-bold text-base py-2 border-b border-neutral-light hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-neutral-light">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-neutral-textMuted uppercase tracking-wider">UK Head Office</p>
                  <a href="tel:07979797734" className="text-secondary font-extrabold text-sm">
                    +44 7979 797734
                  </a>
                </div>
              </div>

              <div className="flex gap-2 pt-2 justify-center">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#e1306c] text-white rounded-full" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1877f2] text-white rounded-full" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1da1f2] text-white rounded-full" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#0077b5] text-white rounded-full" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
