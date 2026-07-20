"use client";
import { motion } from "framer-motion";
import { NetworkGraph } from "@/components/interactive/NetworkGraph";
import { ecosystemNodes, ecosystemEdges } from "@/constants/sections/ecosystem";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";

const assetPills = [
  { label: "Real Estate",    color: "#00C805" },
  { label: "Energy",         color: "#00D4FF" },
  { label: "Treasury",       color: "#00C805" },
  { label: "Commodities",    color: "#00D4FF" },
  { label: "Infrastructure", color: "#00C805" },
  { label: "Buildings",      color: "#00D4FF" },
];

export function RWAEcosystem() {
  return (
    <section
      id="ecosystem"
      style={{
        position: "relative",
        paddingTop: "10rem",
        paddingBottom: "10rem",
        overflow: "hidden",
        background: "#060606",
      }}
    >
      {/* Radial glow left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 50% 60% at 10% 60%, rgba(0,200,5,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >
        {/* 2-column grid */}
        <div
          className="ecosystem-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          <style>{`
            @media (max-width: 1024px) {
              .ecosystem-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            }
          `}</style>

          {/* Left: Graph */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                padding: "2.5rem",
                overflow: "hidden",
                background: "linear-gradient(145deg, #131313 0%, #0D0D0D 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.04) inset, 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Inner glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "radial-gradient(ellipse at center, rgba(0,200,5,0.05) 0%, transparent 70%)",
                }}
              />
              <NetworkGraph nodes={ecosystemNodes} edges={ecosystemEdges} />
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Badge */}
            <div style={{ marginBottom: "1.75rem" }}>
              <span className="badge-green">RWA Ecosystem</span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
                lineHeight: 1.06,
                marginBottom: "1.5rem",
              }}
            >
              A Connected Universe of{" "}
              <span className="gradient-text">Real Assets</span>
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.75,
                color: "#A1A1AA",
                maxWidth: "440px",
                marginBottom: "3rem",
              }}
            >
              VIXAL connects every major real-world asset class into a unified
              intelligence network, powered by AI and secured on Robinhood Chain.
            </p>

            {/* Asset pills grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {assetPills.map((pill) => (
                <motion.div
                  key={pill.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    cursor: "default",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  whileHover={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.13)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: pill.color,
                      boxShadow: `0 0 8px ${pill.color}80`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#A1A1AA",
                    }}
                  >
                    {pill.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
