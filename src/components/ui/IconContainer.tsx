import { cn } from "@/lib/cn";
import { type LucideIcon } from "lucide-react";

interface IconContainerProps {
  icon: LucideIcon;
  accent?: string;
  size?: "sm" | "md" | "lg";
  iconSize?: number;
  className?: string;
}

const sizeMap = {
  sm: "w-9 h-9",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export function IconContainer({
  icon: Icon,
  accent = "#00C805",
  size = "md",
  iconSize = 22,
  className,
}: IconContainerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl flex-shrink-0",
        sizeMap[size],
        className
      )}
      style={{
        background: `${accent}15`,
        border: `1px solid ${accent}30`,
      }}
    >
      <Icon
        size={iconSize}
        style={{ color: accent }}
        className="group-hover:scale-110 transition-transform duration-200"
      />
    </div>
  );
}
