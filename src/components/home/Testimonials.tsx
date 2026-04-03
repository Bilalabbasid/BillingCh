"use client";

import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "Switching to BillingAlign cut our denial rate from 12% to under 3% in the first 90 days. Their team is incredibly responsive.",
    name: "Dr. Sarah Mitchell",
    practice: "Family Practice",
    location: "Austin, TX",
    initials: "SM",
  },
  {
    quote:
      "We were losing $40K/month to billing errors before BillingAlign. They fixed our revenue cycle completely within 60 days.",
    name: "Dr. James Okafor",
    practice: "Internal Medicine",
    location: "Chicago, IL",
    initials: "JO",
  },
  {
    quote:
      "The real-time dashboard is a game changer. I can see exactly where every claim is at any point. Absolute transparency.",
    name: "Maria Chen",
    practice: "Pacific Orthopedics",
    location: "Seattle, WA",
    initials: "MC",
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <AnimatedSection className="mb-12">
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-teal mb-3">
            Testimonials
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
          >
            Practices That Trust BillingAlign
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.05}>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-7 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#94A3B8] text-sm leading-[1.7] mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center shrink-0">
                    <span className="text-teal text-xs font-bold font-display">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-[#94A3B8] text-xs">
                      {t.practice} &middot; {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
