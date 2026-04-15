"use client";

import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
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
  "flex-1 h-11 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-[#475569] focus:outline-none focus:border-teal/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(0,201,177,0.1)] transition-all duration-200";

export function CTABanner() {
  const [formData, setFormData] = useState({ name: "", email: "", specialty: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.06] via-transparent to-indigo-500/[0.05]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="blob blob-teal w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/25 bg-teal/[0.06] text-teal text-xs font-semibold tracking-wide uppercase mb-6">
            <Zap className="w-3 h-3" />
            Get Started Today
          </div>
          <h2
            className="font-display font-bold text-white leading-[1.08] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            Ready to Stop Leaving{" "}
            <span className="gradient-text">Money on the Table?</span>
          </h2>
          <p className="text-[#64748B] text-base leading-[1.7]">
            Join 500+ practices that trust BillingAlign to manage their revenue cycle.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl p-1 border border-white/[0.08]" style={{ background: "rgba(11,22,40,0.6)", backdropFilter: "blur(12px)" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal/[0.04] to-indigo-500/[0.04] rounded-2xl" />
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2 p-3">
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
              <Button variant="glow" size="md" type="submit" className="shrink-0 whitespace-nowrap">
                Get Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
          <p className="text-center text-xs text-[#475569] mt-4">
            No contracts &middot; HIPAA compliant &middot; Setup in 48 hours
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

