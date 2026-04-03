"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "Switching to BillingAlign cut our denial rate from 12% to under 3% in the first 90 days. Their team is incredibly responsive.",
    name: "Dr. Sarah Mitchell",
    practice: "Family Practice",
    location: "Austin, TX",
    providers: "8 providers",
    initials: "SM",
  },
  {
    quote:
      "We were losing $40K/month to billing errors before BillingAlign. They fixed our revenue cycle completely within 60 days.",
    name: "Dr. James Okafor",
    practice: "Internal Medicine",
    location: "Chicago, IL",
    providers: "4 providers",
    initials: "JO",
  },
  {
    quote:
      "The real-time dashboard is a game changer. I can see exactly where every claim is at any point. Absolute transparency.",
    name: "Maria Chen",
    practice: "Pacific Orthopedics",
    location: "Seattle, WA",
    providers: "Practice Manager",
    initials: "MC",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Practices That Trust BillingAlign
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from real healthcare practices.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <Card hover={false} className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-teal-muted flex items-center justify-center">
                    <span className="text-teal text-sm font-bold font-display">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-400 text-xs">
                      {t.practice}, {t.location} — {t.providers}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
