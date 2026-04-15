"use client";

import {
  type LucideIcon,
  Building2, Users, GraduationCap, Hospital, Briefcase,
  Stethoscope, Heart, Activity, Bone, Sparkles,
  Brain, SmilePlus, CircleDot, Scan, Scissors,
  Clock, Baby, Pill, Eye, Radiation,
  Zap, Wind, Ear, Flame, Footprints,
  Syringe, Dumbbell, AlignVerticalSpaceAround, ArrowRight, CheckCircle
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { specialties } from "@/lib/specialties-data";
import Link from "next/link";

const orgIconMap: Record<string, LucideIcon> = {
  Building2, Users, GraduationCap, Hospital, Briefcase,
};

const specialtyIconMap: Record<string, LucideIcon> = {
  Stethoscope, Heart, Activity, Bone, Sparkles,
  Brain, SmilePlus, CircleDot, Scan, Scissors,
  Clock, Baby, Users, Pill, Eye,
  Radiation, Zap, Wind, Ear, Flame,
  Footprints, Syringe, Dumbbell, AlignVerticalSpaceAround,
};

const organizationTypes = [
  {
    iconName: "Users",
    title: "Small Medical Practices",
    badge: "Solo to 5 Providers",
    description:
      "Affordable, flexible billing solutions tailored for independent physicians and small group practices. We handle the entire billing lifecycle so you can focus on patient care without the overhead of an in-house billing team.",
    bullets: [
      "No minimum volume requirements",
      "Month-to-month agreements",
      "Dedicated billing specialist",
      "Setup and live in 48 hours",
    ],
    gradient: "from-teal/20 to-emerald-500/10",
  },
  {
    iconName: "Building2",
    title: "Large Medical Groups",
    badge: "6–100+ Providers",
    description:
      "Scalable RCM infrastructure for multi-specialty and multi-location group practices. Our enterprise billing platform handles high claim volumes with real-time analytics across all providers and locations.",
    bullets: [
      "Multi-provider and multi-location support",
      "Real-time analytics dashboards",
      "Dedicated account management team",
      "Custom payer contract management",
    ],
    gradient: "from-indigo-500/20 to-purple-500/10",
  },
  {
    iconName: "GraduationCap",
    title: "Academic Institutions",
    badge: "Teaching Hospitals",
    description:
      "Complex payer mix expertise for academic medical centers and teaching hospitals. We navigate the unique billing challenges of academic practices — including faculty billing, resident supervision modifiers, and complex payer contracts.",
    bullets: [
      "Faculty and resident billing expertise",
      "Complex payer mix management",
      "Supervision modifier compliance",
      "Research and grant billing support",
    ],
    gradient: "from-teal/15 to-cyan-500/10",
  },
  {
    iconName: "Hospital",
    title: "Health Systems",
    badge: "Multi-Site Enterprise",
    description:
      "End-to-end RCM strategy and technology for multi-site health systems. From strategic RCM assessments to full billing outsourcing and interoperability consulting, we scale with your enterprise needs.",
    bullets: [
      "Enterprise-level RCM outsourcing",
      "HL7 FHIR data interoperability",
      "Hospital RCM consulting",
      "Robotic Process Automation (RPA)",
    ],
    gradient: "from-indigo-500/15 to-blue-500/10",
  },
  {
    iconName: "Briefcase",
    title: "Medical Billing Companies",
    badge: "White-Label Support",
    description:
      "White-label billing support and technology for third-party billing companies looking to expand capacity, add specialty expertise, or enhance their technology stack without adding overhead.",
    bullets: [
      "White-label billing support",
      "Specialty coding expertise",
      "Technology platform access",
      "Staff augmentation options",
    ],
    gradient: "from-teal/20 to-indigo-500/10",
  },
];

export function WhoWeServeContent() {
  return (
    <>
      {/* Organization Types */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {organizationTypes.map((org, i) => {
          const Icon = orgIconMap[org.iconName] ?? Building2;
          return (
            <AnimatedSection key={org.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl p-7 h-full flex flex-col border border-white/[0.07] overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1"
                style={{ background: "rgba(11,22,40,0.8)", backdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${org.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-teal/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Header */}
                <div className="relative flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center shrink-0 group-hover:bg-teal/[0.12] group-hover:shadow-[0_0_16px_rgba(0,201,177,0.15)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[1.0625rem] text-white mb-2 leading-tight" style={{ letterSpacing: "-0.015em" }}>
                      {org.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-teal/20 bg-teal/[0.06] text-teal text-[0.7rem] font-semibold tracking-wide">
                      {org.badge}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="relative text-[#64748B] text-sm leading-[1.8] mb-5 flex-1 group-hover:text-[#94A3B8] transition-colors">
                  {org.description}
                </p>

                {/* Bullets */}
                <ul className="relative space-y-2 mb-6">
                  {org.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#64748B] group-hover:text-[#94A3B8] transition-colors">
                      <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-white transition-colors group/link"
                >
                  Get started
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Section divider */}
      <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Specialties */}
      <AnimatedSection className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/20 bg-teal/[0.05] text-teal text-[0.7rem] font-semibold tracking-widest uppercase mb-5">
          <span className="w-1 h-1 rounded-full bg-teal" />
          By Specialty
        </div>
        <h2
          className="font-display font-bold text-white mb-4 leading-[1.05]"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
        >
          Expertise Across Every Medical Specialty
        </h2>
        <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-[1.7]">
          Our certified coders have deep specialty-specific expertise in the billing complexity
          of your practice area.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {specialties.map((spec, i) => {
          const Icon = specialtyIconMap[spec.iconName] ?? Stethoscope;
          return (
            <AnimatedSection key={spec.name} delay={(i % 8) * 0.04}>
              <div className="group relative p-4 rounded-xl border border-white/[0.06] overflow-hidden transition-all duration-200 hover:border-teal/25 hover:-translate-y-0.5 cursor-default"
                style={{ background: "rgba(11,22,40,0.6)" }}>
                <div className="absolute inset-0 bg-teal/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal/[0.07] border border-teal/[0.12] flex items-center justify-center shrink-0 group-hover:bg-teal/[0.12] transition-colors">
                    <Icon className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-0.5 group-hover:text-teal transition-colors" style={{ letterSpacing: "-0.01em" }}>
                      {spec.name}
                    </p>
                    <p className="text-[#475569] text-xs leading-snug group-hover:text-[#64748B] transition-colors">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection className="text-center mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-teal text-sm font-medium hover:text-white transition-colors"
        >
          Don&apos;t see your specialty? We cover 50+ — contact us
          <span className="w-6 h-6 rounded-full border border-teal/30 flex items-center justify-center group-hover:bg-teal/10 transition-colors">
            <ArrowRight className="w-3 h-3" />
          </span>
        </Link>
      </AnimatedSection>
    </>
  );
}
