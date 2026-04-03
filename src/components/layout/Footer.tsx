"use client";

import Link from "next/link";
import { Globe, X, Mail } from "lucide-react";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { label: "Revenue Cycle Management", href: "/services" },
      { label: "Medical Billing", href: "/services" },
      { label: "Medical Coding", href: "/services" },
      { label: "Credentialing", href: "/services" },
      { label: "Practice Management", href: "/services" },
      { label: "EHR", href: "/services" },
      { label: "Telehealth", href: "/services" },
      { label: "FrontDesk Assist", href: "/services" },
    ],
  },
  whoWeServe: {
    title: "Who We Serve",
    links: [
      { label: "Small Practices", href: "/who-we-serve" },
      { label: "Large Groups", href: "/who-we-serve" },
      { label: "Health Systems", href: "/who-we-serve" },
      { label: "Billing Companies", href: "/who-we-serve" },
      { label: "Academic Institutions", href: "/who-we-serve" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Case Studies", href: "/resources" },
      { label: "Webinars", href: "/resources" },
      { label: "E-Books", href: "/resources" },
      { label: "CPT Codes", href: "/resources" },
      { label: "ICD-10 Codes", href: "/resources" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/about" },
      { label: "Terms of Service", href: "/about" },
    ],
  },
};

const socialLinks = [
  { icon: Globe, href: "https://linkedin.com/company/billingalign", label: "LinkedIn" },
  { icon: X, href: "https://twitter.com/billingalign", label: "Twitter / X" },
  { icon: Mail, href: "mailto:hello@billingalign.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-white/5">
      {/* Newsletter bar */}
      <div className="border-b border-white/5">
        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-display font-semibold text-lg">
              Get RCM best practices in your inbox
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Join 5,000+ healthcare professionals. Unsubscribe anytime.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1 md:w-64">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 pl-10 pr-4 rounded-lg bg-navy border border-white/10 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal transition-colors"
              />
            </div>
            <button className="h-11 px-6 rounded-lg bg-teal text-navy font-semibold text-sm hover:bg-teal-dark transition-colors shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center font-display font-bold text-navy text-lg">
                B
              </div>
              <span className="font-display font-bold text-xl text-white">
                BillingAlign
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Aligned Billing. Accelerated Revenue. Full-service medical billing and RCM for 50+ healthcare specialties.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-teal hover:bg-teal-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2026 BillingAlign. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-teal hover:bg-teal-muted transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
            <span className="w-px h-5 bg-white/10 mx-1" />
            {["HIPAA Compliant", "AAPC Certified", "AHIMA Member"].map((badge) => (
              <span
                key={badge}
                className="text-xs text-gray-400 border border-white/10 px-2.5 py-1 rounded"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
