import type { Metadata } from "next";
import * as Tabs from "@radix-ui/react-tabs";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTABanner } from "@/components/home/CTABanner";
import { services, serviceCategories } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Medical Billing & RCM Services",
  description:
    "Explore BillingAlign's full suite of 21 revenue cycle management and medical billing services — from claim submission and denial management to credentialing and RPA. HIPAA compliant.",
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "denial management",
    "medical coding",
    "physician credentialing",
    "practice management",
  ],
  openGraph: {
    title: "Medical Billing & RCM Services | BillingAlign",
    description:
      "21 specialized RCM and medical billing services for 50+ healthcare specialties.",
    url: "https://billingalign.com/services",
  },
  alternates: { canonical: "https://billingalign.com/services" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Medical Billing & Revenue Cycle Management",
  "description": "Full-service medical billing, RCM, denial management, and credentialing for 50+ healthcare specialties.",
  "provider": {
    "@type": "Organization",
    "name": "BillingAlign",
    "url": "https://billingalign.com",
  },
  "areaServed": "US",
  "serviceType": "Medical Billing",
  "url": "https://billingalign.com/services",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        badge="Our Solutions"
        title="Complete RCM & Medical Billing Services"
        subtitle="End-to-end revenue cycle coverage with 21 specialized services designed to maximize your collections and minimize administrative burden."
      />

      <section className="pb-24">
        <div className="container mx-auto">
          <Tabs.Root defaultValue="core-rcm">
            <AnimatedSection>
              <Tabs.List className="flex flex-wrap gap-2 mb-10 p-1 bg-navy-mid/50 rounded-xl border border-white/5 w-fit mx-auto">
                {serviceCategories.map((cat) => (
                  <Tabs.Trigger
                    key={cat.value}
                    value={cat.value}
                    className={cn(
                      "px-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                      "text-gray-400 hover:text-white",
                      "data-[state=active]:bg-teal data-[state=active]:text-navy data-[state=active]:shadow-lg data-[state=active]:shadow-teal/20"
                    )}
                  >
                    {cat.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </AnimatedSection>

            {serviceCategories.map((cat) => {
              const categoryServices = services.filter(
                (s) => s.category === cat.value
              );
              return (
                <Tabs.Content key={cat.value} value={cat.value}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryServices.map((service, i) => (
                      <ServiceCard key={service.id} service={service} index={i} />
                    ))}
                  </div>
                </Tabs.Content>
              );
            })}
          </Tabs.Root>
        </div>
      </section>

      <div className="section-divider" />
      <CTABanner />
    </>
  );
}
