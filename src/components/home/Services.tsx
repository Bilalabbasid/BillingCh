"use client";

import Link from "next/link";
import {
  TrendingUp, FileText, Code2, ShieldCheck, BadgeCheck, LayoutDashboard,
  ArrowRight, type LucideIcon
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceCards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Revenue Cycle Management",
    description: "Full end-to-end RCM from claim submission to payment posting and reporting.",
    icon: TrendingUp,
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
    <section className="py-20">
      <div className="container mx-auto">
        <AnimatedSection className="mb-12">
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-teal mb-3">
            What We Do
          </p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2
                className="font-display font-bold text-white leading-[1.1] mb-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
              >
                Everything Your Revenue Cycle Needs
              </h2>
              <p className="text-[#94A3B8] text-base leading-[1.7] max-w-lg">
                From claim submission to collections, we handle every step with certified experts and proven processes.
              </p>
            </div>
            <Link
              href="/services"
              className="text-[0.875rem] text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1.5 shrink-0 group"
            >
              View all 21 services
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Divided grid */}
        <div className="border border-[#1E3A5F] rounded-2xl overflow-hidden">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E3A5F]">
            {serviceCards.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={Math.min(i, 3) * 0.05}>
                  <div className="bg-[#0F1E35] p-8 h-full group hover:bg-[#0d2040] transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <h3
                      className="font-semibold text-white mb-2"
                      style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-[1.7]">
                      {service.description}
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
