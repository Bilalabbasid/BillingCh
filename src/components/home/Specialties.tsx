"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { specialties } from "@/lib/specialties-data";
import { ArrowRight, type LucideIcon,
  Stethoscope, Heart, Activity, Bone, Sparkles,
  Brain, SmilePlus, CircleDot, Scan, Scissors,
  Clock, Baby, Users, Pill, Eye,
  Radiation, Zap, Wind, Ear, Flame,
  Footprints, Syringe, Dumbbell, AlignVerticalSpaceAround
} from "lucide-react";

const specialtyIconMap: Record<string, LucideIcon> = {
  Stethoscope, Heart, Activity, Bone, Sparkles,
  Brain, SmilePlus, CircleDot, Scan, Scissors,
  Clock, Baby, Users, Pill, Eye,
  Radiation, Zap, Wind, Ear, Flame,
  Footprints, Syringe, Dumbbell, AlignVerticalSpaceAround,
};

export function Specialties() {
  const displaySpecialties = specialties.slice(0, 20);

  return (
    <section className="py-24 bg-navy-mid relative noise-overlay">
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Built for Your Specialty
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Serving 50+ medical specialties with tailored billing expertise.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {displaySpecialties.map((spec, i) => {
            const Icon = specialtyIconMap[spec.iconName] ?? Stethoscope;
            return (
              <AnimatedSection key={spec.name} delay={i * 0.03}>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-navy/40 border border-white/5 hover:border-teal/30 hover:bg-teal-muted transition-all duration-300 cursor-pointer group">
                  <Icon className="w-4 h-4 text-teal shrink-0" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors truncate">
                    {spec.name}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-8">
          <Link
            href="/who-we-serve"
            className="inline-flex items-center gap-2 text-teal font-medium hover:text-teal-dark transition-colors"
          >
            And 30+ more specialties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
