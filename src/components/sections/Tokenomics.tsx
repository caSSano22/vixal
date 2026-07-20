"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RingChart } from "@/components/charts/RingChart";
import { tokenAllocations, tokenStats } from "@/constants/sections/tokenomics";
import { fadeUp, staggerContainer, staggerChild } from "@/lib/animations/variants";

export function Tokenomics() {
  return (
    <section
      id="tokenomics"
      style={{ background: "#050505", paddingTop: "9rem", paddingBottom: "9rem", position: "relative" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader
          badge="Tokenomics"
          title={<>Built for <span className="gradient-text">Long-Term Value</span></>}
          subtitle="Total supply: 1,000,000,000 $VIXAL. No hidden mints. No inflation."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(145deg, #111111 0%, #0D0D0D 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "3rem",
            boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          <RingChart segments={tokenAllocations} size={260} />
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {tokenStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerChild}
              style={{
                textAlign: "center",
                padding: "24px 20px",
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "24px",
                  fontWeight: 900,
                  fontVariantNumeric: "tabular-nums",
                  letterSpacing: "-0.02em",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#6B7280", fontSize: "13px" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
