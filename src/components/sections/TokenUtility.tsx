"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { UtilityCard } from "@/components/cards/UtilityCard";
import { utilities } from "@/constants/sections/tokenUtility";
import { staggerContainer } from "@/lib/animations/variants";

export function TokenUtility() {
  return (
    <section
      id="token"
      style={{ background: "#080808", paddingTop: "10rem", paddingBottom: "10rem", position: "relative" }}
    >
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,200,5,0.03) 0%, transparent 70%)",
        }}
      />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader
          badge="Token Utility"
          title={<>$VIXAL Powers the <span className="gradient-text">Entire Ecosystem</span></>}
          subtitle="A multi-utility token that fuels every layer of the VIXAL intelligence platform."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {utilities.map((card) => (
            <UtilityCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
