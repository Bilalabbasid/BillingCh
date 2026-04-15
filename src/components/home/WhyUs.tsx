"use client";

import { Eye, Award, Target, Headphones, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const differentiators = [
  {
    title: "Full Transparency",
    description: "Real-time dashboard access to every queue, every claim, every dollar. No black boxes.",
    icon: Eye,
    stat: "100%",
    statLabel: "Claim visibility",
  },
  {
    title: "AAPC-Certified Coders",
    description: "Every code submitted by credentialed professionals with AAPC and AHIMA certifications.",
    icon: Award,
    stat: "100%",
    statLabel: "Certified staff",
  },
  {
    title: "94%+ First-Pass Rate",
    description: "Our billing rule engine scrubs every claim against payer-specific rules before submission.",
    icon: Target,
    stat: "94%+",
    statLabel: "First-pass rate",
  },
  {
    title: "White-Glove Onboarding",
    description: "Dedicated implementation team gets you live in 48 hours with zero disruption to your practice.",
    icon: Headphones,
    stat: "48h",
    statLabel: "Time to go live",
  },
];

const badges = ["HIPAA Compliant", "AAPC Certified", "AHIMA Member", "SOC 2 Compliant"];

export function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/20 bg-teal/[0.05] text-teal text-[0.7rem] font-semibold tracking-widest uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-teal" />
            Why BillingAlign
          </div>
          <h2
            className="font-display font-bold text-white leading-[1.08]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            The BillingAlign Difference
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="group relative rounded-2xl p-6 border border-white/[0.07] overflow-hidden transition-all duration-300 hover:border-teal/30 hover:-translate-y-1"
                  style={{ background: "rgba(11,22,40,0.8)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-teal/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top stat badge */}
                  <div className="text-[1.75rem] font-display font-extrabold text-teal mb-1 leading-none"
                    style={{ textShadow: "0 0 12px rgba(0,201,177,0.3)" }}>
                    {item.stat}
                  </div>
                  <div className="text-[0.7rem] text-[#64748B] uppercase tracking-wider mb-5">{item.statLabel}</div>

                  <div className="w-9 h-9 rounded-xl bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center mb-4 group-hover:shadow-[0_0_14px_rgba(0,201,177,0.2)] transition-all">
                    <Icon className="w-4.5 h-4.5 text-teal" />
                  </div>
                  <h3 className="font-semibold text-white text-[0.9375rem] mb-2" style={{ letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-[1.7] group-hover:text-[#94A3B8] transition-colors">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Compliance badges */}
        <AnimatedSection delay={0.2} className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] hover:border-teal/25 hover:bg-teal/[0.04] transition-all duration-200 cursor-default"
            >
              <CheckCircle className="w-3.5 h-3.5 text-teal" />
              <span className="text-[#94A3B8] text-xs font-medium">{badge}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

