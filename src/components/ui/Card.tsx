import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  accent?: string;
  interactive?: boolean;
}

export function Card({ children, className, id, interactive = false }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative bg-bg-surface border border-white/[0.08] rounded-[24px] overflow-hidden",
        interactive && "transition-all duration-300 hover:-translate-y-[6px] hover:border-white/[0.12]",
        className
      )}
    >
      {children}
    </div>
  );
}
