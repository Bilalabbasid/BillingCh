"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
}

export function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 bg-hero-mesh" />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/25 bg-teal/[0.06] text-teal text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              {badge}
            </div>
          )}
          <h1
            className="font-display font-bold text-white mb-5 leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.035em" }}
          >
            {title}
          </h1>
          <p className="text-[#64748B] text-lg leading-[1.75] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
