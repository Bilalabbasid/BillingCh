"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, AlertCircle, ChevronDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  practiceName: z.string().min(1, "Practice name is required"),
  specialty: z.string().min(1, "Specialty is required"),
  providers: z.string().min(1, "Number of providers is required"),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const specialties = [
  "Family Practice", "Internal Medicine", "Cardiology", "Orthopedics",
  "Dermatology", "Neurology", "Psychiatry", "Urology", "Radiology",
  "General Surgery", "Urgent Care", "Pediatrics", "OB/GYN",
  "Gastroenterology", "Ophthalmology", "Oncology", "Pain Management",
  "Rheumatology", "Pulmonology", "ENT", "Other",
];

const providerCounts = ["1 (Solo)", "2-5", "6-10", "11-25", "26-50", "51-100", "100+"];

const serviceOptions = [
  "Revenue Cycle Management", "Medical Billing", "Medical Coding",
  "Denial Management", "Credentialing", "Practice Management",
  "EHR", "Telehealth", "FrontDesk Assist", "Other",
];

const inputBase =
  "w-full px-3.5 py-2.5 rounded-lg bg-[#070E1A] border text-white text-[0.9375rem] placeholder:text-[#4A6080] focus:outline-none transition-all";
const inputNormal = `${inputBase} border-[#1E3A5F] focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,201,177,0.12)]`;
const inputError = `${inputBase} border-[#EF4444] focus:border-[#EF4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]`;
const labelClasses = "block text-[0.875rem] font-medium text-[#CBD5E1] mb-1.5";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-xs text-[#EF4444] mt-1">
      <AlertCircle className="w-3 h-3 shrink-0" />
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          practice_name: data.practiceName,
          specialty: data.specialty,
          providers: data.providers,
          services: data.services?.join(", ") ?? "",
          message: data.message ?? "",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClasses}>First Name</label>
          <input
            id="firstName"
            {...register("firstName")}
            placeholder="John"
            className={errors.firstName ? inputError : inputNormal}
          />
          <FieldError message={errors.firstName?.message} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>Last Name</label>
          <input
            id="lastName"
            {...register("lastName")}
            placeholder="Doe"
            className={errors.lastName ? inputError : inputNormal}
          />
          <FieldError message={errors.lastName?.message} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@practice.com"
            className={errors.email ? inputError : inputNormal}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(555) 123-4567"
            className={errors.phone ? inputError : inputNormal}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="practiceName" className={labelClasses}>Practice Name</label>
        <input
          id="practiceName"
          {...register("practiceName")}
          placeholder="Your Practice Name"
          className={errors.practiceName ? inputError : inputNormal}
        />
        <FieldError message={errors.practiceName?.message} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="specialty" className={labelClasses}>Specialty</label>
          <div className="relative">
            <select
              id="specialty"
              {...register("specialty")}
              className={cn(
                errors.specialty ? inputError : inputNormal,
                "appearance-none pr-10 cursor-pointer"
              )}
            >
              <option value="" className="bg-[#0F1E35]">Select specialty</option>
              {specialties.map((s) => (
                <option key={s} value={s} className="bg-[#0F1E35]">{s}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A6080] pointer-events-none" />
          </div>
          <FieldError message={errors.specialty?.message} />
        </div>
        <div>
          <label htmlFor="providers" className={labelClasses}>Number of Providers</label>
          <div className="relative">
            <select
              id="providers"
              {...register("providers")}
              className={cn(
                errors.providers ? inputError : inputNormal,
                "appearance-none pr-10 cursor-pointer"
              )}
            >
              <option value="" className="bg-[#0F1E35]">Select</option>
              {providerCounts.map((p) => (
                <option key={p} value={p} className="bg-[#0F1E35]">{p}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A6080] pointer-events-none" />
          </div>
          <FieldError message={errors.providers?.message} />
        </div>
      </div>

      <div>
        <label className={labelClasses}>Services Interested In</label>
        <div className="grid grid-cols-2 gap-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#070E1A] border border-[#1E3A5F] hover:border-teal/50 cursor-pointer transition-colors text-sm text-[#94A3B8] hover:text-white"
            >
              <input
                type="checkbox"
                value={service}
                {...register("services")}
                className="w-4 h-4 rounded border-[#1E3A5F] bg-[#070E1A] text-teal focus:ring-teal focus:ring-offset-0"
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Message (Optional)</label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          placeholder="Tell us about your billing challenges..."
          className={cn(inputNormal, "h-auto resize-none")}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        <Send className="w-4 h-4" />
        {isSubmitting ? "Sending..." : "Request a Demo"}
      </Button>

      {submitStatus === "success" && (
        <p className="flex items-center justify-center gap-2 text-sm text-teal font-medium">
          <CheckCircle className="w-4 h-4 shrink-0" />
          Thank you! We&apos;ll be in touch within 24 hours.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="flex items-center justify-center gap-2 text-sm text-[#EF4444]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <p className="text-center text-xs text-[#94A3B8]">
        Response within 24 hours &middot; No commitment required &middot; HIPAA-safe
      </p>
    </form>
  );
}

