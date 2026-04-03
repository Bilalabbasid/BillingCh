import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl",
        hover && "cursor-pointer",
        !hover && "hover:transform-none hover:border-white/6 hover:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
