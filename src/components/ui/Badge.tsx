import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold font-body transition-colors",
  {
    variants: {
      variant: {
        default: "bg-teal-muted text-teal border border-teal/20",
        gold: "bg-gold/10 text-gold border border-gold/20",
        outline: "border border-white/20 text-gray-400",
        solid: "bg-teal text-navy",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
