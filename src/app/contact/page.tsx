import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Request a Free Demo",
  description:
    "Contact BillingAlign to request a free demo, ask questions about our medical billing services, or speak with a revenue cycle expert. Response within 24 hours.",
  keywords: [
    "contact medical billing company",
    "request billing demo",
    "BillingAlign contact",
    "free RCM consultation",
  ],
  openGraph: {
    title: "Contact BillingAlign — Request a Free Demo",
    description:
      "Talk to a revenue cycle expert. Free demo, no commitment, response within 24 hours.",
    url: "https://billingalign.com/contact",
  },
  alternates: { canonical: "https://billingalign.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Talk to an Expert"
        title="Let's Align Your Revenue Cycle"
        subtitle="Tell us about your practice and we'll show you exactly how BillingAlign can maximize your collections, reduce denials, and simplify your billing operations."
      />
      <section className="pb-24">
        <div className="container mx-auto">
          <ContactContent />
        </div>
      </section>
    </>
  );
}
