"use client";

import { Eye, Award, Target, Headphones } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const differentiators = [
  {
    title: "Full Transparency",
    description: "Real-time dashboard access to every queue, every claim, every dollar. No black boxes.",
    icon: Eye,
  },
  {
    title: "AAPC-Certified Coders",
    description: "Every code submitted by credentialed professionals with AAPC and AHIMA certifications.",
    icon: Award,
  },
  {
    title: "94%+ First-Pass Rate",
    description: "Our billing rule engine scrubs every claim against payer-specific rules before submission.",
    icon: Target,
  },
  {
    title: "White-Glove Onboarding",
    description: "Dedicated implementation team gets you live in 48 hours with zero disruption to your practice.",
    icon: Headphones,
  },
];

const badges = ["HIPAA Compliant", "AAPC Certified", "AHIMA Member", "SOC 2 Compliant"];

export function WhyUs() {
  return (
    <section className="py-20 bg-[#070E1A]">
      <div className="container mx-auto">
        <AnimatedSection className="mb-12">
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-teal mb-3">
            Why BillingAlign
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            The BillingAlign Difference
          </h2>
        </AnimatedSection>

        <div className="border border-[#1E3A5F] rounded-2xl overflow-hidden mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E3A5F]">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.05}>
                  <div className="bg-[#070E1A] p-8 h-full">
                    <div className="w-10 h-10 rounded-lg bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <h3
                      className="font-semibold text-white mb-2"
                      style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Compliance badges */}
        <AnimatedSection delay={0.15} className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1E3A5F]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-sm text-[#94A3B8]">{badge}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
