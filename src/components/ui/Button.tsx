"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "relative overflow-hidden bg-teal text-navy rounded-lg shadow-sm hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,201,177,0.35)] active:translate-y-0 active:shadow-sm after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-500",
        outline:
          "border border-white/15 text-white bg-transparent rounded-lg hover:border-teal/40 hover:bg-teal/[0.04] hover:shadow-[0_0_16px_rgba(0,201,177,0.1)]",
        ghost:
          "text-[#94A3B8] hover:text-white bg-transparent hover:bg-white/[0.04] rounded-lg",
        glow:
          "relative overflow-hidden bg-gradient-to-r from-teal to-teal-dark text-navy rounded-lg shadow-[0_0_20px_rgba(0,201,177,0.3)] hover:shadow-[0_0_30px_rgba(0,201,177,0.5)] hover:-translate-y-0.5 active:translate-y-0 font-bold",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.9375rem]",
        lg: "h-13 px-8 text-[0.9375rem]",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
