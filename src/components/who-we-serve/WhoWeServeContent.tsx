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
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
  },
];

export function WhoWeServeContent() {
  return (
    <>
      {/* Organization Types */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {organizationTypes.map((org, i) => {
          const Icon = orgIconMap[org.iconName] ?? Building2;
          return (
            <AnimatedSection key={org.title} delay={i * 0.08}>
              <Card hover={false} className="h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                      {org.title}
                    </h3>
                    <Badge variant="outline" className="text-[10px]">
                      {org.badge}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {org.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {org.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-dark transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      <div className="section-divider my-16" />

      {/* Specialties */}
      <AnimatedSection className="text-center mb-12">
        <Badge className="mb-4">By Specialty</Badge>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
          Expertise Across Every Medical Specialty
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our certified coders have deep specialty-specific expertise in the billing complexity
          of your practice area.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {specialties.map((spec, i) => {
          const Icon = specialtyIconMap[spec.iconName] ?? Stethoscope;
          return (
            <AnimatedSection key={spec.name} delay={(i % 8) * 0.05}>
              <div className="glass-card p-4 rounded-xl flex items-start gap-3 group hover:-translate-y-1 transition-transform duration-200">
                <div className="w-9 h-9 rounded-lg bg-teal-muted flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                  <Icon className="w-4 h-4 text-teal" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium font-display mb-0.5">
                    {spec.name}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection className="text-center mt-10">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-teal text-sm font-medium hover:text-teal-dark transition-colors group"
        >
          Don&apos;t see your specialty? We cover 50+ — contact us
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </AnimatedSection>
    </>
  );
}
