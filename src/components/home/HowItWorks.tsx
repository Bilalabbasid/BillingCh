"use client";

import { CalendarCheck, Cog, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Schedule Your Free Consultation",
    description: "We learn about your practice, specialties, payer mix, and pain points to design a custom solution.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "We Handle the Setup",
    description: "Our team manages credentialing, onboarding, and system integration. Go live in as little as 48 hours.",
    icon: Cog,
  },
  {
    number: "03",
    title: "Watch Revenue Grow",
    description: "Real-time reporting, faster payments, and fewer denials — all managed by your dedicated team.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From consultation to cash flow in days, not months.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Dotted connector line */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-teal/30" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15} className="text-center relative">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-muted mb-4 relative">
                    <step.icon className="w-7 h-7 text-teal" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-teal text-navy text-xs font-bold flex items-center justify-center font-display">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
