import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/home/CTABanner";
import { WhoWeServeContent } from "@/components/who-we-serve/WhoWeServeContent";

export const metadata: Metadata = {
  title: "Who We Serve — Medical Billing for Every Practice",
  description:
    "BillingAlign serves small practices, large medical groups, academic institutions, health systems, and 24+ specialties. Tailored RCM solutions for every healthcare organization.",
  keywords: [
    "medical billing for small practices",
    "large group billing",
    "health system RCM",
    "specialty medical billing",
    "healthcare billing solutions",
  ],
  openGraph: {
    title: "Who We Serve | BillingAlign",
    description:
      "Tailored RCM and billing solutions for every size practice and 50+ medical specialties.",
    url: "https://billingalign.com/who-we-serve",
  },
  alternates: { canonical: "https://billingalign.com/who-we-serve" },
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        badge="Who We Serve"
        title="Healthcare Billing Solutions Built for You"
        subtitle="Whether you are a solo practitioner or a multi-site health system, BillingAlign has the expertise and infrastructure to optimize your revenue cycle."
      />

      <section className="pb-24">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4">By Organization Type</Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Solutions for Every Practice Size
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From solo practices to health systems, we tailor our RCM approach to your specific needs.
            </p>
          </AnimatedSection>

          <WhoWeServeContent />
        </div>
      </section>

      <div className="section-divider" />
      <CTABanner />
    </>
  );
}
