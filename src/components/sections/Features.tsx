"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { features } from "@/constants/sections/features";
import { staggerContainer } from "@/lib/animations/variants";

export function Features() {
  return (
    <section
      id="features"
      style={{
        background: "#040404",
        paddingTop: "10rem",
        paddingBottom: "10rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial highlight from top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 40% at 50% -5%, rgba(0,200,5,0.07) 0%, transparent 70%)",
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
        <SectionHeader
          badge="Platform Features"
          title={
            <>
              Engineered for the{" "}
              <span className="gradient-text">Future of Finance</span>
            </>
          }
          subtitle="Six core pillars of intelligence that power every decision on VIXAL."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "18px",
          }}
        >
          {features.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
