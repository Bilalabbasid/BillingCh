"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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

const inputClasses = "w-full h-11 px-4 rounded-lg bg-navy border border-white/10 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal transition-colors";
const labelClasses = "block text-sm text-white font-medium mb-1.5";
const errorClasses = "text-xs text-red-400 mt-1";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Handle form submission
    console.log(data);
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
            className={cn(inputClasses, errors.firstName && "border-red-400")}
          />
          {errors.firstName && <p className={errorClasses}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>Last Name</label>
          <input
            id="lastName"
            {...register("lastName")}
            placeholder="Doe"
            className={cn(inputClasses, errors.lastName && "border-red-400")}
          />
          {errors.lastName && <p className={errorClasses}>{errors.lastName.message}</p>}
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
            className={cn(inputClasses, errors.email && "border-red-400")}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(555) 123-4567"
            className={cn(inputClasses, errors.phone && "border-red-400")}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="practiceName" className={labelClasses}>Practice Name</label>
        <input
          id="practiceName"
          {...register("practiceName")}
          placeholder="Your Practice Name"
          className={cn(inputClasses, errors.practiceName && "border-red-400")}
        />
        {errors.practiceName && <p className={errorClasses}>{errors.practiceName.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="specialty" className={labelClasses}>Specialty</label>
          <div className="relative">
            <select
              id="specialty"
              {...register("specialty")}
              className={cn(inputClasses, "appearance-none pr-10 cursor-pointer", errors.specialty && "border-red-400")}
            >
              <option value="" className="bg-navy-mid">Select specialty</option>
              {specialties.map((s) => (
                <option key={s} value={s} className="bg-navy-mid">{s}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          {errors.specialty && <p className={errorClasses}>{errors.specialty.message}</p>}
        </div>
        <div>
          <label htmlFor="providers" className={labelClasses}>Number of Providers</label>
          <div className="relative">
            <select
              id="providers"
              {...register("providers")}
              className={cn(inputClasses, "appearance-none pr-10 cursor-pointer", errors.providers && "border-red-400")}
            >
              <option value="" className="bg-navy-mid">Select</option>
              {providerCounts.map((p) => (
                <option key={p} value={p} className="bg-navy-mid">{p}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
          </div>
          {errors.providers && <p className={errorClasses}>{errors.providers.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses}>Services Interested In</label>
        <div className="grid grid-cols-2 gap-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy/40 border border-white/5 hover:border-teal/30 cursor-pointer transition-colors text-sm text-gray-400 hover:text-white"
            >
              <input
                type="checkbox"
                value={service}
                {...register("services")}
                className="w-4 h-4 rounded border-white/20 bg-navy text-teal focus:ring-teal focus:ring-offset-0"
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
          className={cn(inputClasses, "h-auto py-3 resize-none")}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        <Send className="w-4 h-4" />
        {isSubmitting ? "Sending..." : "Request My Free Demo"}
      </Button>

      <p className="text-center text-xs text-gray-400">
        Response within 24 hours &bull; No commitment required &bull; HIPAA-safe
      </p>
    </form>
  );
}
