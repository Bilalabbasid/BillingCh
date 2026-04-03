"use client";

import Link from "next/link";
import { TrendingUp, FileText, Code2, ShieldCheck, BadgeCheck, LayoutDashboard, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceCards = [
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
    <section className="py-24 relative">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4">What We Do</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Everything Your Revenue Cycle Needs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From claim submission to collections, we handle every step with certified experts and proven processes.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <Card className="h-full group">
                <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <service.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-dark transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-teal font-medium hover:text-teal-dark transition-colors"
          >
            View all 21 services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
