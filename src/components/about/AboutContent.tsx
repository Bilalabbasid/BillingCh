"use client";

import {
  type LucideIcon,
  Eye, Target, ShieldCheck, Handshake, Star,
  BadgeCheck, Award, Users, TrendingUp, CheckCircle
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, LucideIcon> = {
  Eye, Target, ShieldCheck, Handshake, Star,
  BadgeCheck, Award, Users, TrendingUp,
};

const values = [
  {
    iconName: "Eye",
    title: "Transparency",
    description:
      "Every claim, every dollar, every queue — visible to you in real time. We operate without black boxes. Your revenue data belongs to you.",
  },
  {
    iconName: "Target",
    title: "Accuracy",
    description:
      "Our claim scrubbing engine and AAPC-certified coders ensure every submission is correct the first time. A 94%+ first-pass rate speaks for itself.",
  },
  {
    iconName: "ShieldCheck",
    title: "Compliance",
    description:
      "HIPAA, AAPC, and AHIMA compliance are non-negotiable foundations of our operation — not afterthoughts. Your patients' data is always protected.",
  },
  {
    iconName: "Handshake",
    title: "Partnership",
    description:
      "We don't see ourselves as a vendor — we're an extension of your practice. Your financial health is our mission.",
  },
  {
    iconName: "Star",
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every aspect of our work — from coding accuracy to client communication and turnaround times.",
  },
];

const credentials = [
  {
    iconName: "BadgeCheck",
    title: "AAPC Certified",
    description:
      "Every coder on our team holds active AAPC certification (CPC, COC, or specialty credentials), ensuring coding accuracy and compliance across all specialties.",
  },
  {
    iconName: "Award",
    title: "AHIMA Credentialed",
    description:
      "Our health information professionals hold AHIMA credentials (RHIA, RHIT, CCS), bringing additional depth to our clinical documentation and coding operations.",
  },
  {
    iconName: "ShieldCheck",
    title: "HIPAA Compliant",
    description:
      "All systems, personnel, and processes are HIPAA-compliant. We conduct annual training, maintain Business Associate Agreements, and implement rigorous data security protocols.",
  },
  {
    iconName: "Users",
    title: "500+ Practices Served",
    description:
      "Over the years, we've built a track record of results across 500+ practices and 50+ medical specialties — from solo physicians to multi-site health systems.",
  },
];

const promises = [
  { metric: "94%+", label: "First-Pass Claim Rate" },
  { metric: "<3%", label: "Denial Rate" },
  { metric: "48 hrs", label: "Average Onboarding Time" },
  { metric: "24 hrs", label: "Response Time Guarantee" },
];

export function AboutContent() {
  return (
    <>
      {/* Mission */}
      <section className="pb-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                Aligning Your Billing with{" "}
                <span className="gradient-text">Your Success</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                BillingAlign was founded on a simple belief: healthcare providers should
                spend their time caring for patients, not chasing claims. We built a
                full-service revenue cycle management firm that combines AAPC-certified
                expertise with purpose-built technology to eliminate billing complexity.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our team of billing specialists, certified coders, credentialing experts,
                and technology engineers work together as an integrated unit — not
                disconnected departments. That&apos;s why our denial rate stays under 3%
                while the industry average hovers at 5–10%.
              </p>
              <ul className="space-y-3">
                {[
                  "Founded by healthcare billing veterans with 15+ years experience",
                  "AAPC and AHIMA certified team members throughout",
                  "Serving 50+ medical specialties across all 50 states",
                  "HIPAA-compliant operations with SOC 2 security standards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="glass-card p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {promises.map((p) => (
                    <div key={p.label} className="text-center">
                      <p className="font-display font-bold text-3xl text-teal mb-1">
                        {p.metric}
                      </p>
                      <p className="text-gray-400 text-sm">{p.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    These aren&apos;t aspirational targets — they&apos;re the results our clients
                    experience within their first 90 days with BillingAlign.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Values */}
      <section className="py-24 bg-navy-light/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4">What We Stand For</Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These five principles guide every decision we make — from how we code a
              claim to how we communicate with our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {values.map((v, i) => {
              const Icon = iconMap[v.iconName] ?? Eye;
              return (
                <AnimatedSection key={v.title} delay={i * 0.08}>
                  <Card hover={false} className="text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-lg mb-2">
                      {v.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Credentials */}
      <section className="py-24">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4">Credentials &amp; Compliance</Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Built on Certified Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our team credentials are not just checkboxes — they are the foundation of
              the trust that 500+ practices place in us every day.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {credentials.map((c, i) => {
              const Icon = iconMap[c.iconName] ?? ShieldCheck;
              return (
                <AnimatedSection key={c.title} delay={i * 0.1}>
                  <Card hover={false} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-lg mb-2">
                        {c.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Compliance Badges */}
          <AnimatedSection className="flex flex-wrap justify-center gap-4">
            {["HIPAA Compliant", "AAPC Certified", "AHIMA Credentialed", "SOC 2 Standards"].map(
              (badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-teal-muted border border-teal/20"
                >
                  <ShieldCheck className="w-4 h-4 text-teal" />
                  <span className="text-teal text-sm font-semibold">{badge}</span>
                </div>
              )
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 bg-navy-light/30">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Our Promise
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
              Results You Can Measure from Day One
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              From your first claim submission with BillingAlign, you&apos;ll experience the
              difference: faster payments, fewer denials, and complete visibility into
              your revenue cycle. We back every engagement with our performance
              commitment — if we don&apos;t deliver results, we work with you until we do.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 glass-card rounded-2xl">
              {promises.map((p) => (
                <div key={p.label} className="text-center">
                  <p className="font-display font-bold text-2xl text-teal mb-1">
                    {p.metric}
                  </p>
                  <p className="text-gray-400 text-xs">{p.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
