import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-navy-panel border border-[#1E3A5F] rounded-2xl p-8",
        hover && "transition-all duration-200 hover:border-teal hover:shadow-[0_0_0_1px_#00C9B1,0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
