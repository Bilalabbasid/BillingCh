"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
}

export function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          {badge && <Badge className="mb-4">{badge}</Badge>}
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
            {title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
