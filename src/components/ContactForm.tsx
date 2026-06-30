import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, PhoneCall, GraduationCap, CheckCircle, Mail } from "lucide-react";

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

// Define Form Validation Schema with Zod
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

interface ContactFormProps {
  selectedUniversity?: string;
  onClearSelectedUniversity?: () => void;
}

export default function ContactForm({ selectedUniversity = "", onClearSelectedUniversity }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Sync selected university from prop
  useEffect(() => {
    if (selectedUniversity) {
      form.setValue("university", selectedUniversity);
    }
  }, [selectedUniversity, form]);

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Log form values to resolve the unused variable warning
    console.log("Inquiry Submitted:", values);
    setIsSubmitting(true);

    // Simulate API Submission
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
      if (onClearSelectedUniversity) onClearSelectedUniversity();
    }, 1500);
  }

  return (
    <section id="contact" className="py-12 px-4 md:px-8 bg-neutral-light scroll-mt-24 relative overflow-hidden">
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
                  07979797734
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-3 rounded-2xl text-primary border border-white/5 shadow-inner">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">General Admissions Mail</p>
                <a href="mailto:info@uni-guide.co.uk" className="text-sm md:text-base font-extrabold text-white hover:text-primary transition-colors">
                  info@uni-guide.co.uk
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
                  <h4 className="text-xl md:text-2xl font-extrabold text-secondary font-serif">Free Consultation Request</h4>
                  <p className="text-xs text-neutral-textMuted font-medium">Please fill in your current academic preferences.</p>
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

                {/* Email & Mobile Row */}
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

                {/* Target University & Degree level row */}
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
                      <FormLabel>Custom Notes / Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={3}
                          placeholder="Tell us about your educational background or any questions you have..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gradient"
                  className="w-full"
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
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
