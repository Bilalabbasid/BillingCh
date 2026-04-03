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
    <section className="py-20">
      <div className="container mx-auto">
        <AnimatedSection className="mb-12">
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-teal mb-3">
            How It Works
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Get Started in 3 Simple Steps
          </h2>
        </AnimatedSection>

        <div className="border border-[#1E3A5F] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-px bg-[#1E3A5F]">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={i * 0.08}>
                  <div className="bg-navy p-8 h-full">
                    <div className="text-[0.75rem] font-bold tracking-[0.12em] text-[#94A3B8] mb-5">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <h3
                      className="font-semibold text-white mb-3"
                      style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-[1.7]">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
