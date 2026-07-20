"use client";
import { type ButtonHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost" | "icon";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant;
  size?:     ButtonSize;
  href?:     string;
  className?: string;
  children?:  React.ReactNode;
}

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 font-semibold cursor-pointer select-none whitespace-nowrap overflow-hidden btn-shimmer";

const roundings: Record<ButtonSize, string> = {
  sm: "rounded-xl",
  md: "rounded-xl",
  lg: "rounded-[14px]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-[13px] px-5 py-2.5",
  md: "text-[14px] px-7 py-3.5",
  lg: "text-[15px] px-8 py-4",
};

const getStyles = (variant: ButtonVariant, hovered: boolean): React.CSSProperties => {
  if (variant === "primary") {
    return {
      background: hovered
        ? "linear-gradient(135deg, #00E206, #00C805)"
        : "linear-gradient(135deg, #00D406, #00B804)",
      color: "#000000",
      fontWeight: 700,
      boxShadow: hovered
        ? "0 8px 28px rgba(0,200,5,0.42), 0 2px 8px rgba(0,200,5,0.2), 0 1px 0 rgba(255,255,255,0.18) inset"
        : "0 4px 16px rgba(0,200,5,0.28), 0 1px 0 rgba(255,255,255,0.14) inset",
      transform: hovered ? "translateY(-2px)" : "translateY(0)",
      transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
    };
  }
  if (variant === "ghost") {
    return {
      background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
      color: hovered ? "#FFFFFF" : "#A1A1AA",
      fontWeight: 500,
      border: `1px solid ${hovered ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.08)"}`,
      boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
      transform: hovered ? "translateY(-1px)" : "translateY(0)",
      transition: "all 0.22s ease",
    };
  }
  // icon
  return {
    background: "linear-gradient(135deg, #00D406, #00B804)",
    color: "#000000",
    fontWeight: 700,
    boxShadow: "0 2px 10px rgba(0,200,5,0.30)",
    width: 36,
    height: 36,
    padding: 0,
  };
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, className, children, style, ...props }, ref) => {
    const [hovered, setHovered] = useState(false);

    const classes = cn(
      baseClasses,
      roundings[size],
      variant !== "icon" && sizes[size],
      className
    );

    const styles: React.CSSProperties = {
      ...getStyles(variant, hovered),
      ...style,
    };

    const interactiveProps = {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    };

    if (href) {
      return (
        <a href={href} className={classes} style={styles} {...interactiveProps}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} style={styles} {...interactiveProps} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
