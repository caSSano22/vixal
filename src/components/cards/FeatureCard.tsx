"use client";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import {
  Brain, BarChart3, Building2, ShieldCheck, Network, Cpu,
  Wallet, Zap, BarChart2, Database, Vote, Coins, type LucideIcon,
} from "lucide-react";
import { useState, useMemo } from "react";
import { staggerChild } from "@/lib/animations/variants";
import type { FeatureCardData } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Brain, BarChart3, Building2, ShieldCheck, Network, Cpu,
  Wallet, Zap, BarChart2, Database, Vote, Coins,
};

interface FeatureCardProps {
  card: FeatureCardData;
}

export function FeatureCard({ card }: FeatureCardProps) {
  const Icon     = iconMap[card.iconName] ?? Brain;
  const reduced  = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const containerStyle = useMemo<React.CSSProperties>(() => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "20px",
    padding: "36px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    cursor: "default",
    minHeight: "220px",
    background: "linear-gradient(160deg, #111111 0%, #090909 100%)",
    border: `1px solid ${hovered ? "rgba(255,255,255,0.11)" : "rgba(255,255,255,0.06)"}`,
    boxShadow: hovered
      ? "0 0 0 1px rgba(255,255,255,0.07) inset, 0 20px 60px rgba(0,0,0,0.65), 0 0 80px rgba(0,200,5,0.025)"
      : "0 0 0 1px rgba(255,255,255,0.04) inset, 0 4px 20px rgba(0,0,0,0.5)",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  }), [hovered]);

  const glowStyle = useMemo<React.CSSProperties>(() => ({
    position: "absolute",
    top: -48,
    right: -48,
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${card.accent}18, transparent 65%)`,
    filter: "blur(24px)",
    pointerEvents: "none",
    opacity: hovered ? 1 : 0,
    transition: "opacity 0.4s ease",
  }), [hovered, card.accent]);

  const hoverMotion: MotionProps = reduced
    ? {}
    : { whileHover: { y: -6 }, transition: { type: "spring", stiffness: 360, damping: 26 } };

  return (
    <motion.div
      variants={staggerChild}
      {...hoverMotion}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={containerStyle}
    >
      {/* Corner glow blob */}
      <div style={glowStyle} />

      {/* Icon container */}
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: "13px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: `${card.accent}0E`,
          border: `1px solid ${card.accent}22`,
          boxShadow: `0 0 0 4px ${card.accent}06`,
          transition: "box-shadow 0.3s ease, background 0.3s ease",
          ...(hovered && {
            background: `${card.accent}16`,
            boxShadow: `0 0 0 4px ${card.accent}0A, 0 0 24px ${card.accent}14`,
          }),
        }}
      >
        <Icon size={21} style={{ color: card.accent }} />
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
            marginBottom: "10px",
          }}
        >
          {card.title}
        </h3>
        <p className="body-sm" style={{ color: "#71717A" }}>
          {card.description}
        </p>
      </div>

      {/* Bottom accent line on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 28,
          right: 28,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${card.accent}55, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
    </motion.div>
  );
}
