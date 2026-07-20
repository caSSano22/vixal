"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations/variants";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  badge:      string;
  badgeDot?:  boolean;
  title:      ReactNode;
  subtitle?:  string;
  align?:     "left" | "center";
}

export function SectionHeader({
  badge,
  badgeDot,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      style={{
        marginBottom: "5.5rem",
        textAlign: centered ? "center" : "left",
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "flex",
          justifyContent: centered ? "center" : "flex-start",
          marginBottom: "1.75rem",
        }}
      >
        <span className="badge-green">
          {badgeDot && (
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00C805",
                flexShrink: 0,
              }}
              className="pulse-green"
            />
          )}
          {badge}
        </span>
      </div>

      {/* Headline */}
      <h2
        className="display-3"
        style={{
          color: "#FFFFFF",
          maxWidth: centered ? "820px" : undefined,
          margin: centered ? "0 auto" : undefined,
          marginBottom: subtitle ? "1.5rem" : "0",
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="body-lg"
          style={{
            color: "#71717A",
            maxWidth: centered ? "520px" : undefined,
            margin: centered ? "1.5rem auto 0" : "1.5rem 0 0",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
