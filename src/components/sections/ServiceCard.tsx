"use client";

import { Check, ArrowRight } from "lucide-react";
import {
  TrendingUp, FileText, Code2, ShieldCheck, BadgeCheck, LayoutDashboard,
  FileEdit, Monitor, Activity, HeartPulse, Users,
  Video, Phone, UserPlus, FolderSearch, BarChart3, Building2,
  Server, Network, Bot, type LucideIcon
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
    <AnimatedSection delay={index * 0.05}>
      <Card hover={false} className="h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-teal" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display font-semibold text-lg text-white">
                {service.title}
              </h3>
            </div>
            <Badge variant="outline" className="text-[10px]">
              {service.categoryLabel}
            </Badge>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {service.stats && (
          <p className="text-teal text-xs font-medium mb-4 px-3 py-2 rounded-lg bg-teal-muted">
            {service.stats}
          </p>
        )}

        <ul className="space-y-2 mb-6">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-gray-400">
              <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
              {bullet}
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-dark transition-colors group"
        >
          Talk to an Expert
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </Card>
    </AnimatedSection>
  );
}
