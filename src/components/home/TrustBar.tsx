"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { ShieldCheck, Award, Building2, Stethoscope } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: 94, suffix: "%+", label: "First-Pass Claim Rate", icon: ShieldCheck },
  { value: 3, prefix: "<", suffix: "%", label: "Denial Rate", icon: Award },
  { value: 50, suffix: "+", label: "Medical Specialties Served", icon: Stethoscope },
  { value: 500, suffix: "+", label: "Healthcare Practices Nationwide", icon: Building2 },
];

function Counter({ target, prefix, suffix }: { target: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl lg:text-5xl text-teal">
      {prefix}{count}{suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="relative py-16 bg-navy-mid border-y border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-muted mb-4">
                <stat.icon className="w-6 h-6 text-teal" />
              </div>
              <div className="mb-2">
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
