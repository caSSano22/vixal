import { motion, MotionProps } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { staggerChild } from "@/lib/animations/variants";
import type { ReactNode } from "react";

/**
 * Generic card component used by FeatureCard, UtilityCard, and similar UI blocks.
 * It receives an icon component, an accent colour, title and description.
 * All layout‑critical styles are defined here to avoid duplication.
 */
interface InfoCardProps {
  /** Icon component from lucide‑react */
  Icon: LucideIcon;
  /** Accent colour (e.g. "#00C805") used for the icon background and border */
  accent: string;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Optional extra content rendered below description */
  children?: ReactNode;
  /** Motion props to allow custom animation overrides */
  motionProps?: MotionProps;
}

export function InfoCard({ Icon, accent, title, description, children, motionProps }: InfoCardProps) {
  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "default",
        background: "linear-gradient(145deg, #141414 0%, #101010 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.4)",
        minHeight: "220px",
      }}
      className="info-card-hover"
      {...motionProps}
    >
      <style>{`
        .info-card-hover:hover {
          border-color: rgba(255,255,255,0.13) !important;
          box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset, 0 12px 40px rgba(0,0,0,0.5), 0 0 60px rgba(0,200,5,0.03) !important;
        }
      `}</style>

      {/* Glow blob (top‑right) */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}20, transparent 70%)`,
          filter: "blur(20px)",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.4s ease",
        }}
        className="card-glow"
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
          background: `${accent}12`,
          border: `1px solid ${accent}25`,
          boxShadow: `0 0 20px ${accent}10`,
        }}
      >
        <Icon size={22} style={{ color: accent }} />
      </div>

      {/* Text */}
      <div>
        <h3
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#6B7280",
            lineHeight: "1.65",
          }}
        >
          {description}
        </p>
        {children}
      </div>

      {/* Bottom accent line – optional – render only if children exist */}
      {children && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 32,
            right: 32,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${accent}60, transparent)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          className="card-accent-line"
        />
      )}
    </motion.div>
  );
}

export default InfoCard;
