import React, { useState, useEffect } from "react";
import { Send, PhoneCall, GraduationCap, CheckCircle, Mail, AlertCircle } from "lucide-react";

interface ContactFormProps {
  selectedUniversity?: string;
  onClearSelectedUniversity?: () => void;
}

export default function ContactForm({ selectedUniversity = "", onClearSelectedUniversity }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    university: "",
    degreeLevel: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected university from prop
  useEffect(() => {
    if (selectedUniversity) {
      setFormData((prev) => ({ ...prev, university: selectedUniversity }));
    }
  }, [selectedUniversity]);

  const universities = [
    "Northumbria University",
    "University of East London",
    "Derby University",
    "Regent College London",
    "York St John University London",
    "Arden University",
    "University of Law",
    "BPP University",
    "Teesside University",
    "Wallbrook Institute London",
    "University College Birmingham",
    "Ulster University",
    "Greenwich University",
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.mobile.replace(/\s+/g, ""))) {
      newErrors.mobile = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        university: "",
        degreeLevel: "",
        message: "",
      });
      if (onClearSelectedUniversity) onClearSelectedUniversity();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-neutral-light scroll-mt-24 relative overflow-hidden">
      {/* Background Soft Blurs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-3xl border border-neutral-border/60 shadow-2xl overflow-hidden relative z-10 hover:border-primary/10 transition-all duration-500">
        
        {/* Left Side: Information Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <span className="text-xs font-black bg-primary/20 text-primary px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Get In Touch
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-white font-serif">
              Apply Now & Secure Your Admission
            </h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium">
              Our professional academic team provides free assistance. Submit your details, and a dedicated officer will review your qualifications and contact you within 24 hours.
            </p>
          </div>

          {/* Quick numbers/email layout */}
          <div className="space-y-6 border-t border-white/10 pt-8 mt-8 lg:mt-0 relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-2xl text-primary border border-white/5 shadow-inner">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Talk directly to an Agent</p>
                <a href="tel:07979797734" className="text-sm md:text-base font-extrabold text-white hover:text-primary transition-colors">
                  +44 7979 797734
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-2xl text-primary border border-white/5 shadow-inner">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">General Admissions Mail</p>
                <a href="mailto:info@uniguide.co.uk" className="text-sm md:text-base font-extrabold text-white hover:text-primary transition-colors">
                  info@uniguide.co.uk
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-2xl text-primary border border-white/5 shadow-inner">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Free Counseling Service</p>
                <p className="text-xs font-bold text-primary">No hidden service charges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 p-8 md:p-12">
          {isSubmitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-8 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-secondary font-serif">Submission Successful!</h4>
                <p className="text-xs md:text-sm text-neutral-textMuted max-w-md mx-auto leading-relaxed font-medium">
                  Thank you for applying. An expert advisor from your nearest branch has received your profile and will get in touch shortly to assist with course and visa guidance.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-secondary hover:bg-primary text-white text-xs font-bold py-3 px-8 rounded-full transition-colors cursor-pointer shadow-md"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl md:text-2xl font-extrabold text-secondary font-serif">Free Consultation Request</h4>
                <p className="text-xs text-neutral-textMuted font-medium">Please fill in your current academic preferences.</p>
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-secondary uppercase tracking-wider block">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border rounded-2xl outline-none text-sm transition-all focus:ring-4 focus:ring-primary/10 ${
                    errors.name ? "border-red-500 focus:border-red-500" : "border-neutral-border/60 focus:border-primary"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email & Mobile Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-wider block">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className={`w-full px-4 py-3 border rounded-2xl outline-none text-sm transition-all focus:ring-4 focus:ring-primary/10 ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-neutral-border/60 focus:border-primary"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-wider block">Mobile Number *</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="e.g. +91 90007 57786"
                    className={`w-full px-4 py-3 border rounded-2xl outline-none text-sm transition-all focus:ring-4 focus:ring-primary/10 ${
                      errors.mobile ? "border-red-500 focus:border-red-500" : "border-neutral-border/60 focus:border-primary"
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.mobile}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Target University & Degree level row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-wider block">Target University</label>
                  <select
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-border/60 focus:border-primary rounded-2xl outline-none text-sm transition-all focus:ring-4 focus:ring-primary/10 bg-white"
                  >
                    <option value="">Select University (Optional)</option>
                    {universities.map((uni, idx) => (
                      <option key={idx} value={uni}>
                        {uni}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-wider block">Target Degree</label>
                  <select
                    name="degreeLevel"
                    value={formData.degreeLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-border/60 focus:border-primary rounded-2xl outline-none text-sm transition-all focus:ring-4 focus:ring-primary/10 bg-white"
                  >
                    <option value="">Select Degree Level (Optional)</option>
                    <option value="Bachelors">Bachelor's Degree</option>
                    <option value="Masters">Master's Degree</option>
                    <option value="MRes">MRes (Master of Research)</option>
                    <option value="DBA">DBA (Doctor of Business Administration)</option>
                    <option value="PhD">PhD (Doctor of Philosophy)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-secondary uppercase tracking-wider block">Custom Notes / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your educational background or any questions you have..."
                  className="w-full px-4 py-3 border border-neutral-border/60 focus:border-primary rounded-2xl outline-none text-sm transition-all focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-secondary hover:to-secondary-dark text-white font-extrabold py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
