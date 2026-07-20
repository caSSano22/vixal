"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Brain, Building2, BarChart2, Database, Vote, Coins, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { staggerChild } from "@/lib/animations/variants";
import type { UtilityCardData } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Brain, Building2, BarChart2, Database, Vote, Coins,
};

interface UtilityCardProps {
  card: UtilityCardData;
}

export function UtilityCard({ card }: UtilityCardProps) {
  const Icon    = iconMap[card.iconName] ?? Brain;
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
        padding: "36px 30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "default",
        background: "linear-gradient(145deg, #131313 0%, #0E0E0E 100%)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.11)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 0 1px rgba(255,255,255,0.06) inset, 0 16px 48px rgba(0,0,0,0.55), 0 0 60px ${card.accent}18`
          : "0 0 0 1px rgba(255,255,255,0.04) inset, 0 4px 20px rgba(0,0,0,0.4)",
        minHeight: "200px",
        transition: "border-color 0.28s ease, box-shadow 0.28s ease",
      }}
    >
      {/* Corner glow */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${card.accent}${hovered ? "22" : "14"}, transparent 70%)`,
          filter: "blur(22px)",
          pointerEvents: "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: `${card.accent}${hovered ? "18" : "10"}`,
          border: `1px solid ${card.accent}${hovered ? "30" : "20"}`,
          boxShadow: hovered ? `0 0 24px ${card.accent}18` : "none",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
        }}
      >
        <Icon size={22} style={{ color: card.accent }} />
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
        <p style={{ fontSize: "14px", color: "#71717A", lineHeight: 1.65 }}>
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}
