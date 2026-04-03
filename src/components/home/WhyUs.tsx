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

export function WhyUs() {
  return (
    <section className="py-24 bg-navy-mid relative noise-overlay">
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            The BillingAlign Difference
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What sets us apart from every other billing company.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentiators.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-muted mb-4">
                  <item.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Compliance badges */}
        <AnimatedSection delay={0.4} className="flex flex-wrap justify-center gap-4">
          {["HIPAA Compliant", "AAPC Certified", "AHIMA Member"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-navy/40"
            >
              <div className="w-2 h-2 rounded-full bg-teal" />
              <span className="text-sm text-gray-400 font-medium">{badge}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
