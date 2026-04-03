"use client";

import { Check, ArrowRight } from "lucide-react";
import {
  TrendingUp, FileText, Code2, ShieldCheck, BadgeCheck, LayoutDashboard,
  FileEdit, Monitor, Activity, HeartPulse, Users,
  Video, Phone, UserPlus, FolderSearch, BarChart3, Building2,
  Server, Network, Bot, type LucideIcon
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Service } from "@/lib/services-data";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, FileText, Code2, ShieldCheck, BadgeCheck, LayoutDashboard,
  FileEdit, Monitor, Activity, HeartPulse, Users,
  Video, Phone, UserPlus, FolderSearch, BarChart3, Building2,
  Server, Network, Bot,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.iconName] ?? TrendingUp;

  return (
    <AnimatedSection delay={Math.min(index, 3) * 0.05}>
      <div className="bg-[#0F1E35] border border-[#1E3A5F] rounded-2xl p-8 h-full transition-all duration-200 hover:border-teal hover:shadow-[0_0_0_1px_#00C9B1,0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 rounded-lg bg-teal/[0.08] border border-teal/[0.15] flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-teal" />
          </div>
          <div>
            <h3
              className="font-semibold text-white mb-1"
              style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
            >
              {service.title}
            </h3>
            <span className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wide">
              {service.categoryLabel}
            </span>
          </div>
        </div>

        <p className="text-[#94A3B8] text-sm leading-[1.7] mb-4">
          {service.description}
        </p>

        {service.stats && (
          <p className="text-teal text-xs font-medium mb-4 px-3 py-2 rounded-lg bg-teal/[0.08] border border-teal/[0.15]">
            {service.stats}
          </p>
        )}

        <ul className="space-y-2 mb-6">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
              <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
              {bullet}
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm text-[#94A3B8] hover:text-white transition-colors group"
        >
          Talk to an Expert
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </AnimatedSection>
  );
}

