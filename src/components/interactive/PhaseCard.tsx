"use client";
import { motion } from "framer-motion";
import type { RoadmapPhase } from "@/types";

interface PhaseCardProps {
  phase: RoadmapPhase;
  index: number;
}

const statusConfig = {
  completed: { label: "Completed", color: "#00C805" },
  active: { label: "In Progress", color: "#F59E0B" },
  upcoming: { label: "Upcoming", color: "#4B5563" },
};

export function PhaseCard({ phase, index }: PhaseCardProps) {
  const { label, color } = statusConfig[phase.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        background: "linear-gradient(145deg, #141414 0%, #0F0F0F 100%)",
        border: phase.status === "active" ? `1px solid rgba(245,158,11,0.25)` : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "default",
        boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* Quarter + Status */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color, textTransform: "uppercase" }}>
          {phase.quarter}
        </span>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "3px 10px",
            borderRadius: "100px",
            background: `${color}12`,
            border: `1px solid ${color}25`,
            color,
            fontSize: "10px",
            fontWeight: 700,
          }}
        >
          {phase.status === "active" && (
            <div className="pulse-green" style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
          )}
          {label}
        </div>
      </div>

      {/* Title */}
      <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
        {phase.title}
      </h3>

      {/* Milestones */}
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {phase.milestones.map((m, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background:
                  phase.status === "completed" ? "#00C805" :
                  phase.status === "active" ? "#F59E0B" : "#374151",
                flexShrink: 0,
                marginTop: "6px",
              }}
            />
            <span style={{
              fontSize: "13px",
              lineHeight: "1.5",
              color: phase.status === "completed" ? "#9CA3AF" :
                     phase.status === "active" ? "#D1D5DB" : "#6B7280",
            }}>
              {m}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
