"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Wallet, Brain, BarChart3, Zap, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { staggerChild } from "@/lib/animations/variants";
import type { StepItemData } from "@/types";

const iconMap: Record<string, LucideIcon> = { Wallet, Brain, BarChart3, Zap };

interface StepCardProps {
  step: StepItemData;
}

export function StepCard({ step }: StepCardProps) {
  const Icon    = iconMap[step.iconName] ?? Zap;
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={staggerChild}
      whileHover={reduced ? undefined : { y: -7 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "default",
        background: "linear-gradient(145deg, #131313 0%, #0E0E0E 100%)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? "0 0 0 1px rgba(255,255,255,0.06) inset, 0 16px 48px rgba(0,0,0,0.55)"
          : "0 0 0 1px rgba(255,255,255,0.04) inset, 0 4px 20px rgba(0,0,0,0.4)",
        minHeight: "200px",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Step number + icon row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Step number badge */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: 900,
            color: "#000000",
            flexShrink: 0,
            background: "linear-gradient(135deg, #00C805, #00D4FF)",
            boxShadow: "0 0 16px rgba(0,200,5,0.35)",
          }}
        >
          {step.step}
        </div>

        {/* Icon box */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            background: `rgba(0,200,5,${hovered ? "0.13" : "0.08"})`,
            border: `1px solid rgba(0,200,5,${hovered ? "0.28" : "0.18"})`,
            boxShadow: hovered ? "0 0 20px rgba(0,200,5,0.12)" : "none",
            transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
          }}
        >
          <Icon size={19} style={{ color: "#00C805" }} />
        </div>
      </div>

      {/* Text */}
      <div>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.018em",
            lineHeight: 1.3,
            marginBottom: "8px",
          }}
        >
          {step.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#71717A", lineHeight: 1.65 }}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
