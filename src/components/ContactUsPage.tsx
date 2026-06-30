import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  PhoneCall,
  CheckCircle,
  Mail,
  MapPin,
  Clock,
  Building2,
  Phone,
  Compass,
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Button } from "./ui/button";

// Form Validation Schema using Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Full name is required" }),
  email: z.string().min(1, { message: "Email address is required" }).email({ message: "Please enter a valid email address" }),
  mobile: z.string().min(1, { message: "Mobile number is required" }).refine((val) => {
    const cleaned = val.replace(/\s+/g, "");
    return /^\+?[0-9\s-]{7,15}$/.test(cleaned);
  }, { message: "Please enter a valid phone number" }),
  university: z.string(),
  degreeLevel: z.string(),
  message: z.string(),
});

interface ContactUsPageProps {
  onBackToHome: () => void;
}

export default function ContactUsPage({ onBackToHome }: ContactUsPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeBranch, setActiveBranch] = useState("uk");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      university: "",
      degreeLevel: "",
      message: "",
    },
  });

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

  const branchOffices = [
    {
      id: "uk",
      name: "UK Head Office",
      city: "London",
      address: "252 - 256 Romford Road, Exactly Building Behind Bus Stop, 3rd Floor Unit 3, E7 9HZ, London, UK",
      phone: "+44 7979 797734",
      email: "london@uniguide.co.uk",
      hours: "Mon - Sat: 9 AM - 6 PM GMT",
    },
    {
      id: "hyderabad",
      name: "Hyderabad Office",
      city: "India",
      address: "Himayath Nagar Main Road, Above Standard Chartered Bank, Hyderabad, Telangana, India",
      phone: "+91 90007 57786",
      email: "hyd@uniguide.co.uk",
      hours: "Mon - Sat: 10 AM - 7 PM IST",
    },
    {
      id: "mumbai",
      name: "Mumbai Office",
      city: "India",
      address: "Dheeraj Heritage, S.V Road, Milan Subway Signal, Santacruz West, Mumbai, India",
      phone: "+91 98200 12345",
      email: "mumbai@uniguide.co.uk",
      hours: "Mon - Sat: 10 AM - 7 PM IST",
    },
    {
      id: "delhi",
      name: "Delhi Office",
      city: "India",
      address: "Kanchanjunga Building, Barakhamba Road, Connaught Place, New Delhi, India",
      phone: "+91 99100 54321",
      email: "delhi@uniguide.co.uk",
      hours: "Mon - Sat: 10 AM - 7 PM IST",
    },
    {
      id: "melbourne",
      name: "Melbourne Office",
      city: "Australia",
      address: "Faraday Court, Victoria Street, Melbourne, VIC 3000, Australia",
      phone: "+61 412 345 678",
      email: "melbourne@uniguide.co.uk",
      hours: "Mon - Fri: 9 AM - 5 PM AEST",
    },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Contact Page Inquiry:", values);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset({
        name: "",
        email: "",
        mobile: "",
        university: "",
        degreeLevel: "",
        message: "",
      });
    }, 1500);
  }

  const selectedBranchData = branchOffices.find((b) => b.id === activeBranch) || branchOffices[0];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#f0f5fb] text-neutral-textDark flex flex-col font-sans">
      <section className="relative bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white py-6 md:py-24 px-4 overflow-hidden border-b border-neutral-border/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-hover/30 rounded-full filter blur-2xl pointer-events-none -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-gray-300 border border-white/10">
            <button onClick={onBackToHome} className="hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0 text-gray-300 font-semibold">
              Home
            </button>
            <span className="text-gray-500">/</span>
            <span className="text-primary font-semibold">Contact Us</span>
          </div>

          <h4 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white font-serif">
            Contact Our Admissions Hub
          </h4>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Have questions about applications, scholarships, or visa eligibility? Get 100% free expert counseling from our dedicated officers.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-extrabold uppercase tracking-widest text-xs">
              <Compass className="w-4 h-4" />
              <span>International Presence</span>
            </div>
            <h3 className="text-2xl font-extrabold text-secondary font-serif">
              Our Branch Networks
            </h3>
            <p className="text-xs md:text-sm text-neutral-textMuted leading-relaxed font-medium">
              We represent candidates globally. Click on any office branch location to display its official address, direct phone, and contact email.
            </p>
          </div>

          {/* Branch Switcher Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {branchOffices.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranch(branch.id)}
                className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm ${activeBranch === branch.id
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-secondary hover:bg-neutral-light border border-neutral-border/40"
                  }`}
              >
                {branch.name.split(" ")[0]} ({branch.city})
              </button>
            ))}
          </div>

          {/* Selected Branch Contact Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBranch}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-secondary-dark to-secondary text-white p-6 md:p-8 rounded-3xl shadow-xl border border-white/5 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 text-primary p-2.5 rounded-xl border border-primary/20">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-white font-serif">{selectedBranchData.name}</h4>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{selectedBranchData.city}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mb-0.5">Office Address</p>
                      <p className="text-xs md:text-sm text-gray-200 leading-relaxed font-medium">{selectedBranchData.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mb-0.5">Contact Call</p>
                      <a
                        href={`tel:${selectedBranchData.phone.replace(/\s+/g, "")}`}
                        className="text-xs md:text-sm text-white hover:text-primary transition-colors font-extrabold"
                      >
                        {selectedBranchData.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mb-0.5">Official Email</p>
                      <a
                        href={`mailto:${selectedBranchData.email}`}
                        className="text-xs md:text-sm text-white hover:text-primary transition-colors font-extrabold"
                      >
                        {selectedBranchData.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mb-0.5">Office Hours</p>
                      <p className="text-xs text-gray-200 font-medium">{selectedBranchData.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={`tel:${selectedBranchData.phone.replace(/\s+/g, "")}`}
                    className="flex-1 bg-primary hover:bg-primary-hover text-white text-center py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-primary/30"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`mailto:${selectedBranchData.email}`}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white text-center py-2.5 px-4 rounded-xl text-xs font-bold border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-neutral-border/40 shadow-xl overflow-hidden p-8 md:p-10 relative">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-3xl pointer-events-none" />

            {isSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6 py-12 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-extrabold text-secondary font-serif">Inquiry Submitted!</h4>
                  <p className="text-xs md:text-sm text-neutral-textMuted max-w-md mx-auto leading-relaxed font-medium">
                    Thank you for reaching out. A dedicated student support counselor from our branch network will review your inquiry details and get in touch within 24 hours.
                  </p>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                  className="hover:bg-primary text-xs font-bold h-auto py-3 px-8 rounded-full shadow-md"
                >
                  Submit another inquiry
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-extrabold text-secondary font-serif">Consultation Intake Form</h4>
                    <p className="text-xs text-neutral-textMuted font-medium">Fields marked with an asterisk (*) are required.</p>
                  </div>

                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. +91 90007 57786" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* University & Degree Preference */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="university"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target University</FormLabel>
                          <FormControl>
                            <Select {...field}>
                              <option value="">Select University (Optional)</option>
                              {universities.map((uni, idx) => (
                                <option key={idx} value={uni}>
                                  {uni}
                                </option>
                              ))}
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="degreeLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Degree</FormLabel>
                          <FormControl>
                            <Select {...field}>
                              <option value="">Select Degree Level (Optional)</option>
                              <option value="Bachelors">Bachelor's Degree</option>
                              <option value="Masters">Master's Degree</option>
                              <option value="MRes">MRes (Master of Research)</option>
                              <option value="DBA">DBA (Doctor of Business Administration)</option>
                              <option value="PhD">PhD (Doctor of Philosophy)</option>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message Details</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell us about your educational background or any questions you have..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="gradient"
                    className="w-full flex items-center justify-center gap-2 py-3.5 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
