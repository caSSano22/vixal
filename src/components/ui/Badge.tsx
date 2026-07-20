import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

export function Badge({ children, dot = false, className }: BadgeProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full", className)}
      style={{
        background: "rgba(0,200,5,0.07)",
        border: "1px solid rgba(0,200,5,0.20)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 24px rgba(0,200,5,0.06)",
      }}
    >
      {dot && (
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: "#00C805",
            boxShadow: "0 0 8px rgba(0,200,5,0.8)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      )}
      <span
        className="text-[11px] font-bold tracking-[0.1em] uppercase"
        style={{ color: "#00C805" }}
      >
        {children}
      </span>
    </div>
  );
}
