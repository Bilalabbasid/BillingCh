"use client";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glowColor?: "teal" | "indigo" | "none";
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative group rounded-2xl p-8 overflow-hidden",
        // Base glass surface
        "border border-white/[0.07]",
        hover && "transition-all duration-300 cursor-pointer",
        className
      )}
      style={{ background: "rgba(11,22,40,0.85)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
      {...props}
    >
      {/* Animated gradient border on hover — top edge sweep */}
      {hover && (
        <>
          {/* Top border glow sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          {/* Bottom border subtle */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          />
          {/* Left glow line */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-teal/40 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
          />
          {/* Right glow line */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-teal/30 via-transparent to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"
          />
          {/* Hover background tint */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-teal/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Corner glow */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 -left-8 w-32 h-32 bg-teal/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

