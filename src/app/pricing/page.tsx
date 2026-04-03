import type { Metadata } from "next";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Billing Pricing Plans",
  description:
    "Transparent, percentage-based medical billing pricing with no hidden fees or long-term contracts. Essentials, Professional, and Concierge plans for every practice size.",
  keywords: [
    "medical billing pricing",
    "RCM pricing",
    "healthcare billing cost",
    "percentage-based billing",
  ],
  openGraph: {
    title: "Transparent Medical Billing Pricing | BillingAlign",
    description:
      "No hidden fees. No long-term contracts. Billing plans starting at 4% of collections.",
    url: "https://billingalign.com/pricing",
  },
  alternates: { canonical: "https://billingalign.com/pricing" },
};

const tiers = [
  {
    name: "Essentials",
    badge: "For solo and small practices",
    price: "4%",
    priceNote: "of collections",
    popular: false,
    features: [
      "Medical billing & claim submission",
      "Payment posting & reconciliation",
      "ERA/EOB processing",
      "Basic denial management",
      "Monthly financial reporting",
      "Email & chat support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    badge: "For growing multi-provider practices",
    price: "6%",
    priceNote: "of collections",
    popular: true,
    features: [
      "Everything in Essentials, plus:",
      "AAPC-certified medical coding",
      "Advanced denial management & appeals",
      "AR follow-up & collections",
      "Physician credentialing (2 providers)",
      "Real-time analytics dashboard",
      "Dedicated account manager",
      "Priority phone support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Concierge",
    badge: "For large groups & health systems",
    price: "Custom",
    priceNote: "based on practice size",
    popular: false,
    features: [
      "Everything in Professional, plus:",
      "Complete RCM outsourcing",
      "FrontDesk Assist (virtual staff)",
      "Chronic Care Management (CCM)",
      "Remote Patient Monitoring (RPM)",
      "Staff augmentation (billing team)",
      "Hospital RCM consulting",
      "Robotic Process Automation",
      "Managed IT services",
      "Dedicated VP of Revenue Cycle",
    ],
    cta: "Book a Consultation",
  },
];

const faqs = [
  {
    q: "How does billing percentage pricing work?",
    a: "We charge a percentage of the collections we successfully recover for your practice. This means our incentives are aligned with yours — we only succeed when you get paid. The percentage is based on your practice size, specialty, and volume.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We offer month-to-month agreements with no long-term contracts. We earn your business every month through results, not lock-in. You can cancel with 30 days notice.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most practices are fully onboarded and live within 48 hours. Our dedicated implementation team handles credentialing, system integration, and staff training so there is zero disruption to your operations.",
  },
  {
    q: "What EHR systems do you integrate with?",
    a: "We integrate with all major EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Allscripts, DrChrono, Practice Fusion, and many more. If you use it, we can connect to it.",
  },
  {
    q: "Is my patient data HIPAA compliant?",
    a: "Absolutely. HIPAA compliance is foundational to everything we do. All data is encrypted in transit and at rest, our team undergoes annual HIPAA training, and we maintain SOC 2 compliance for additional security assurance.",
  },
  {
    q: "What specialties do you cover?",
    a: "We serve 50+ medical specialties including internal medicine, family practice, cardiology, orthopedics, dermatology, neurology, psychiatry, urology, and many more. Each specialty has dedicated coders with specific expertise.",
  },
  {
    q: "What is your denial rate?",
    a: "Our average denial rate is under 3%, compared to the industry average of 5-10%. Our proprietary claim scrubbing engine checks every claim against payer-specific rules before submission, achieving a 94%+ first-pass rate.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or adjust your plan at any time as your practice grows. We will work with you to ensure a smooth transition and that all new services are properly configured.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        badge="Simple Pricing"
        title="Transparent Pricing for Every Practice Size"
        subtitle="No hidden fees. No long-term contracts. Just results."
      />

      <section className="pb-24">
        <div className="container mx-auto">
          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.08}>
                {tier.popular ? (
                  /* Style C — Featured card */
                  <div className="relative rounded-[20px] overflow-hidden border border-teal/[0.35] bg-gradient-to-br from-[#0D2A40] to-[#0B1E30] shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,201,177,0.15)] p-8 h-full flex flex-col">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-teal" />
                    <div className="mb-2">
                      <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-teal border border-teal/30 px-2.5 py-1 rounded-md">
                        Most Popular
                      </span>
                    </div>
                    <div className="mb-4">
                      <h3
                        className="font-display font-bold text-white mb-1"
                        style={{ fontSize: "1.375rem", letterSpacing: "-0.015em" }}
                      >
                        {tier.name}
                      </h3>
                      <p className="text-sm text-[#94A3B8]">{tier.badge}</p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-bold text-[2.5rem] text-white leading-none">
                          {tier.price}
                        </span>
                        <span className="text-sm text-[#94A3B8]">{tier.priceNote}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                          <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button variant="primary" size="lg" className="w-full justify-center">
                        {tier.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  /* Style A — Standard card */
                  <div className="bg-navy-panel border border-[#1E3A5F] rounded-2xl p-8 h-full flex flex-col transition-all duration-200 hover:border-teal hover:shadow-[0_0_0_1px_#00C9B1,0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">
                    <div className="mb-4">
                      <h3
                        className="font-display font-bold text-white mb-1"
                        style={{ fontSize: "1.375rem", letterSpacing: "-0.015em" }}
                      >
                        {tier.name}
                      </h3>
                      <p className="text-sm text-[#94A3B8]">{tier.badge}</p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-bold text-[2.5rem] text-white leading-none">
                          {tier.price}
                        </span>
                        <span className="text-sm text-[#94A3B8]">{tier.priceNote}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                          <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="w-full justify-center">
                        {tier.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* FAQ Section */}
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-teal mb-3">
                FAQ
              </p>
              <h2
                className="font-display font-bold text-white leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion.Root type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <Accordion.Item
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden"
                >
                  <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left text-white text-sm font-medium group">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-[#94A3B8] shrink-0 ml-4 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 text-sm text-[#94A3B8] leading-[1.7] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    {faq.a}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
