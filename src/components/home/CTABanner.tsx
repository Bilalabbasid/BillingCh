"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const specialties = [
  "Family Practice",
  "Internal Medicine",
  "Cardiology",
  "Orthopedics",
  "Dermatology",
  "Neurology",
  "Psychiatry",
  "Urology",
  "Radiology",
  "General Surgery",
  "Urgent Care",
  "Pediatrics",
  "OB/GYN",
  "Gastroenterology",
  "Ophthalmology",
  "Oncology",
  "Pain Management",
  "Rheumatology",
  "Pulmonology",
  "ENT",
  "Other",
];

export function CTABanner() {
  const [formData, setFormData] = useState({ name: "", email: "", specialty: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-navy-mid to-navy" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join 500+ practices that trust BillingAlign to manage their revenue cycle.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 h-12 px-4 rounded-lg bg-navy border border-white/10 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal transition-colors"
            />
            <input
              type="email"
              placeholder="Work email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 h-12 px-4 rounded-lg bg-navy border border-white/10 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal transition-colors"
            />
            <div className="relative flex-1">
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full h-12 px-4 pr-10 rounded-lg bg-navy border border-white/10 text-white text-sm appearance-none focus:outline-none focus:border-teal transition-colors cursor-pointer"
              >
                <option value="" className="bg-navy-mid">Practice Specialty</option>
                {specialties.map((s) => (
                  <option key={s} value={s} className="bg-navy-mid">{s}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="h-12 px-6 rounded-lg bg-teal text-navy font-semibold text-sm hover:bg-teal-dark transition-colors flex items-center gap-2 justify-center shrink-0 shadow-lg shadow-teal/20"
            >
              Get My Free Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-4">
            No commitment required &bull; HIPAA-safe &bull; Response within 24 hours
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
