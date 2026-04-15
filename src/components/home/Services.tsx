"use client";

import Link from "next/link";
import {
  TrendingUp, FileText, Code2, ShieldCheck, BadgeCheck, LayoutDashboard,
  ArrowRight, type LucideIcon
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceCards: { title: string; description: string; icon: LucideIcon; accent?: string }[] = [
  {
    title: "Revenue Cycle Management",
    description: "Full end-to-end RCM from claim submission to payment posting and reporting.",
    icon: TrendingUp,
    accent: "teal",
  },
  {
    title: "Medical Billing Services",
    description: "Transparent billing with real-time tracking and 1M+ payer network access.",
    icon: FileText,
  },
  {
    title: "Medical Coding",
    description: "AAPC/AHIMA certified coders for CPT, ICD-10, and HCPCS across 50+ specialties.",
    icon: Code2,
  },
  {
    title: "Denial Management",
    description: "Root-cause analysis and automated appeals to permanently reduce denials.",
    icon: ShieldCheck,
  },
  {
    title: "Physician Credentialing",
    description: "Full enrollment with all major payers to prevent payment delays.",
    icon: BadgeCheck,
  },
  {
    title: "Practice Management",
    description: "Integrated scheduling, staff management, and real-time analytics dashboards.",
    icon: LayoutDashboard,
  },
];

export function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/20 bg-teal/[0.05] text-teal text-[0.7rem] font-semibold tracking-widest uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-teal" />
            What We Do
          </div>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2
                className="font-display font-bold text-white leading-[1.08] mb-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                Everything Your Revenue Cycle Needs
              </h2>
              <p className="text-[#64748B] text-base leading-[1.7] max-w-lg">
                From claim submission to collections, we handle every step with certified experts and proven processes.
              </p>
            </div>
            <Link
              href="/services"
              className="group text-sm text-teal hover:text-white transition-colors flex items-center gap-2 shrink-0 font-medium"
            >
              View all 21 services
              <span className="w-6 h-6 rounded-full border border-teal/30 flex items-center justify-center group-hover:bg-teal/10 transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
            {serviceCards.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={Math.min(i, 3) * 0.06}>
                  <div
                    className="group relative p-8 h-full transition-all duration-300 cursor-pointer overflow-hidden"
                    style={{ background: "rgba(11,22,40,0.95)" }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-teal/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-xl bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center mb-6 group-hover:bg-teal/[0.14] group-hover:border-teal/25 group-hover:shadow-[0_0_16px_rgba(0,201,177,0.15)] transition-all duration-300">
                        <Icon className="w-5 h-5 text-teal" />
                      </div>
                      <h3
                        className="font-semibold text-white mb-2.5 group-hover:text-teal transition-colors duration-200"
                        style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#64748B] text-sm leading-[1.75] group-hover:text-[#94A3B8] transition-colors duration-200">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-teal/0 group-hover:text-teal/70 transition-all duration-200 text-xs font-medium">
                        Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
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

