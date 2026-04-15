"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  TrendingUp, FileText, Code2, LayoutDashboard,
  Monitor, Users, Video, BadgeCheck, Phone, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const solutionsDropdown = [
  { label: "Revenue Cycle Management", href: "/services", icon: TrendingUp, description: "End-to-end RCM" },
  { label: "Medical Billing", href: "/services", icon: FileText, description: "Clean claim submission" },
  { label: "Medical Coding", href: "/services", icon: Code2, description: "50+ specialties" },
  { label: "Practice Management", href: "/services", icon: LayoutDashboard, description: "Analytics & scheduling" },
  { label: "EHR", href: "/services", icon: Monitor, description: "Integration support" },
  { label: "Patient Experience", href: "/services", icon: Users, description: "Engagement tools" },
  { label: "Telehealth", href: "/services", icon: Video, description: "Virtual visit billing" },
  { label: "Credentialing", href: "/services", icon: BadgeCheck, description: "Payer enrollment" },
  { label: "FrontDesk Assist", href: "/services", icon: Phone, description: "Staffing support" },
];

const navLinks = [
  { label: "Solutions", href: "/services", hasDropdown: true },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500",
          scrolled
            ? "bg-[rgba(7,14,26,0.88)] backdrop-blur-[20px] saturate-150 border-b border-white/[0.07] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="BillingAlign" width={180} height={40} priority className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-[0.875rem] font-medium rounded-md transition-all duration-200",
                      isActive ? "text-white bg-white/[0.06]" : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        dropdownOpen && "rotate-180"
                      )} />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-px left-3 right-3 h-px bg-teal rounded-full"
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="absolute top-full left-0 mt-3 w-[360px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,201,177,0.06)]"
                          style={{ background: "rgba(10,20,38,0.92)", backdropFilter: "blur(20px)" }}
                        >
                          {/* Glow accent */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
                          <div className="p-3 grid gap-0.5">
                            {solutionsDropdown.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#94A3B8] hover:text-white hover:bg-white/[0.05] transition-all duration-150 group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-teal/[0.08] border border-teal/[0.12] flex items-center justify-center shrink-0 group-hover:bg-teal/[0.12] group-hover:border-teal/20 transition-colors">
                                  <item.icon className="w-4 h-4 text-teal" />
                                </div>
                                <div>
                                  <p className="text-white/90 font-medium text-[0.8125rem]">{item.label}</p>
                                  <p className="text-[#64748B] text-[0.75rem]">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mx-3 mb-3 pt-3 border-t border-white/[0.06]">
                            <Link
                              href="/services"
                              className="group flex items-center gap-1.5 text-sm text-teal hover:text-white transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/[0.04]"
                            >
                              View all 21 services
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="text-[0.875rem]">
                Sign In
              </Button>
            </Link>
            <Link href="/contact#contact-form">
              <Button variant="glow" size="sm" className="text-[0.875rem]">
                Request a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.05] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] z-50 flex flex-col lg:hidden overflow-y-auto"
              style={{ background: "rgba(9,17,32,0.98)", backdropFilter: "blur(24px)", borderLeft: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Top glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center p-5 border-b border-white/[0.06]">
              <Image src="/logo.svg" alt="BillingAlign" width={160} height={36} className="h-7 w-auto" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-0.5 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center px-3 py-3 text-sm rounded-xl transition-all duration-150",
                        pathname === link.href
                          ? "text-white bg-teal/10 border border-teal/20"
                          : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 pt-0 flex flex-col gap-2 border-t border-white/[0.06]">
                <Link href="/contact#contact-form" onClick={() => setMobileOpen(false)}>
                  <Button variant="glow" size="md" className="w-full justify-center">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
