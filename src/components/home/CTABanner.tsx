"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const specialties = [
  "Family Practice", "Internal Medicine", "Cardiology", "Orthopedics",
  "Dermatology", "Neurology", "Psychiatry", "Urology", "Radiology",
  "General Surgery", "Urgent Care", "Pediatrics", "OB/GYN",
  "Gastroenterology", "Ophthalmology", "Oncology", "Pain Management",
  "Rheumatology", "Pulmonology", "ENT", "Other",
];

const inputClass =
  "flex-1 h-11 px-3.5 rounded-lg bg-[#0B1628] border border-[#1E3A5F] text-white text-[0.9375rem] placeholder:text-[#4A6080] focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,201,177,0.12)] transition-all";

export function CTABanner() {
  const [formData, setFormData] = useState({ name: "", email: "", specialty: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-20 bg-[#070E1A] border-t border-[#1E3A5F]">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-10 max-w-2xl mx-auto">
          <h2
            className="font-display font-bold text-white leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-[#94A3B8] text-base leading-[1.7]">
            Join 500+ practices that trust BillingAlign to manage their revenue cycle.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Work email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
            <select
              value={formData.specialty}
              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="">Specialty</option>
              {specialties.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <Button variant="primary" size="md" type="submit">
              Get Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-center text-xs text-[#94A3B8] mt-4">
            No contracts &middot; HIPAA compliant &middot; Setup in 48 hours
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

