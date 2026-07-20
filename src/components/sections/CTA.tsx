"use client";
import { motion } from "framer-motion";
import { ArrowRight, X as XIcon, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { GridOverlay } from "@/components/effects/GridOverlay";
import { fadeUp, staggerContainer, staggerChild } from "@/lib/animations/variants";

const socials = [
  { label: "Twitter/X", Icon: XIcon,         href: "#" },
  { label: "Discord",   Icon: MessageCircle,  href: "#" },
  { label: "Telegram",  Icon: Send,           href: "#" },
];

function SocialIcon({ label, Icon, href }: typeof socials[number]) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      variants={staggerChild}
      href={href}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "14px",
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.07)"}`,
        color: hovered ? "#FFFFFF" : "#71717A",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.22s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        textDecoration: "none",
      }}
    >
      <Icon size={17} />
    </motion.a>
  );
}

export function CTA() {
  return (
    <section
      style={{
        position: "relative",
        padding: "11rem 0 10rem",
        overflow: "hidden",
        background: "#040404",
      }}
    >
      <GridOverlay opacity={0.016} />

      {/* Green radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,200,5,0.07) 0%, rgba(0,200,5,0.02) 45%, transparent 70%)",
        }}
      />

      {/* Top divider glow */}
      <div className="divider-green" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "820px",
          margin: "0 auto",
          padding: "0 2.5rem",
          textAlign: "center",
        }}
      >
        {/* Live badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: "2rem" }}
        >
          <span className="badge-green">
            <span
              className="pulse-green"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#00C805",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Now Live on Robinhood Chain
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(40px, 6.5vw, 84px)",
            fontWeight: 900,
            letterSpacing: "-0.046em",
            color: "#FFFFFF",
            lineHeight: 0.97,
            marginBottom: "2rem",
            textShadow: "0 0 100px rgba(0,200,5,0.12)",
          }}
        >
          Join the{" "}
          <span className="gradient-text">Intelligence</span>
          {" "}Network.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "18px",
            lineHeight: 1.75,
            color: "#71717A",
            marginBottom: "3.5rem",
            maxWidth: "480px",
            margin: "0 auto 3.5rem",
          }}
        >
          Be part of the future of real-world asset intelligence.
          Built on Robinhood Chain. Powered by AI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "4rem",
          }}
        >
          <Button variant="primary" size="lg" href="#" className="gap-2">
            Launch App <ArrowRight size={17} />
          </Button>
          <Button variant="ghost" size="lg" href="#">
            Join Community
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          {socials.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
