"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepCard } from "@/components/cards/StepCard";
import { Button } from "@/components/ui/Button";
import { steps } from "@/constants/sections/howItWorks";
import { staggerContainer, fadeUp } from "@/lib/animations/variants";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ background: "#040404", paddingTop: "10rem", paddingBottom: "10rem", position: "relative" }}
    >
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(0,200,5,0.04) 0%, transparent 70%)",
        }}
      />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader
          badge="How It Works"
          title={<>From Raw Data to <span className="gradient-text">Actionable Intelligence</span></>}
          subtitle="Four steps. Zero complexity."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "18px",
            marginBottom: "5.5rem",
          }}
        >
          {steps.map((step) => (
            <StepCard key={step.step} step={step} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
        >
          <Button variant="primary" size="lg" href="#" className="gap-2">
            Start Now <ArrowRight size={18} />
          </Button>
          <Button variant="ghost" size="lg" href="#">Read Docs</Button>
        </motion.div>
      </div>
    </section>
  );
}
