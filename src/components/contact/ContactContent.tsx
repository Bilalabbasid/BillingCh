"use client";

import {
  type LucideIcon,
  Phone, Mail, MapPin, Clock, Shield, CheckCircle
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/sections/ContactForm";

const iconMap: Record<string, LucideIcon> = {
  Phone, Mail, MapPin, Clock, Shield,
};

const contactInfo = [
  {
    iconName: "Phone",
    label: "Phone",
    value: "1-800-BILALIGN",
    sub: "Mon–Fri, 8am–6pm CT",
  },
  {
    iconName: "Mail",
    label: "Email",
    value: "hello@billingalign.com",
    sub: "We respond within 24 hours",
  },
  {
    iconName: "MapPin",
    label: "Headquarters",
    value: "Chicago, IL",
    sub: "Serving practices nationwide",
  },
  {
    iconName: "Clock",
    label: "Business Hours",
    value: "Mon–Fri: 8am – 6pm CT",
    sub: "After-hours support available",
  },
];

const trustPoints = [
  "No commitment required",
  "HIPAA-safe and compliant",
  "Response within 24 hours",
  "Free, no-obligation consultation",
];

export function ContactContent() {
  return (
    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
      {/* Left Column — Contact Info */}
      <div className="lg:col-span-2 space-y-6">
        <AnimatedSection>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Get in Touch</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Reach out directly or fill in the form and we&apos;ll schedule a
            personalized demo at a time that works for you.
          </p>

          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = iconMap[item.iconName] ?? Phone;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-muted flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium font-display">{item.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Card hover={false} className="bg-teal-muted border-teal/20">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-teal" />
              <span className="text-teal text-sm font-semibold font-display">Our Commitment</span>
            </div>
            <ul className="space-y-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-3.5 h-3.5 text-teal shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        </AnimatedSection>

        {/* Map placeholder */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-2xl overflow-hidden h-52 relative flex items-center justify-center">
            <div className="absolute inset-0 dot-grid opacity-50" />
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-teal" />
              </div>
              <p className="text-white text-sm font-medium font-display">Chicago, IL (HQ)</p>
              <p className="text-gray-400 text-xs mt-1">Serving practices nationwide</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Right Column — Form */}
      <AnimatedSection delay={0.1} direction="left" className="lg:col-span-3">
        <Card hover={false} className="p-8">
          <div className="mb-6">
            <Badge className="mb-3">Free Demo Request</Badge>
            <h3 className="font-display font-bold text-xl text-white">
              Request Your Free Revenue Cycle Demo
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Complete the form below and a billing expert will contact you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Card>
      </AnimatedSection>
    </div>
  );
}
