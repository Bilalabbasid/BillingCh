"use client";

import { CalendarCheck, Cog, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Schedule Your Free Consultation",
    description: "We learn about your practice, specialties, payer mix, and pain points to design a custom solution.",
    icon: CalendarCheck,
    color: "teal",
  },
  {
    number: "02",
    title: "We Handle the Setup",
    description: "Our team manages credentialing, onboarding, and system integration. Go live in as little as 48 hours.",
    icon: Cog,
    color: "indigo",
  },
  {
    number: "03",
    title: "Watch Revenue Grow",
    description: "Real-time reporting, faster payments, and fewer denials — all managed by your dedicated team.",
    icon: Rocket,
    color: "teal",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/20 bg-teal/[0.05] text-teal text-[0.7rem] font-semibold tracking-widest uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-teal" />
            How It Works
          </div>
          <h2
            className="font-display font-bold text-white leading-[1.08]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            Get Started in 3 Simple Steps
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-[3.25rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-teal/20 via-indigo-500/20 to-teal/20 hidden md:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="group relative rounded-2xl p-8 border border-white/[0.07] overflow-hidden transition-all duration-300 hover:border-teal/30 hover:-translate-y-1"
                  style={{ background: "rgba(11,22,40,0.8)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                  {/* Gradient top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[0.7rem] font-bold tracking-[0.15em] text-[#475569] uppercase">
                      Step {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center group-hover:shadow-[0_0_14px_rgba(0,201,177,0.2)] transition-all duration-300">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                  </div>

                  <h3
                    className="font-semibold text-white mb-3"
                    style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-[1.75] group-hover:text-[#94A3B8] transition-colors">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

