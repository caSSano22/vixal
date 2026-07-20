"use client";
import { motion } from "framer-motion";
import { TrendingUp, ShieldAlert, Zap } from "lucide-react";
import { ChatInterface } from "@/components/interactive/ChatInterface";
import { chatMessages } from "@/constants/sections/aiAgent";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Asset Insights",
    desc: "Real-time analysis of every position in your portfolio.",
    color: "#00C805",
  },
  {
    icon: ShieldAlert,
    title: "Risk Prediction",
    desc: "AI forecasts 30-day risk scenarios with 94% accuracy.",
    color: "#00D4FF",
  },
  {
    icon: Zap,
    title: "Yield Optimization",
    desc: "Automated rebalancing strategies to maximize returns.",
    color: "#00C805",
  },
];

export function AIAgent() {
  return (
    <section
      id="ai-agent"
      style={{
        position: "relative",
        paddingTop: "10rem",
        paddingBottom: "10rem",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Top divider glow */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,200,5,0.22), transparent)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom divider */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
          pointerEvents: "none",
        }}
      />
      {/* Radial highlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,200,5,0.06) 0%, transparent 70%)",
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
          className="aiagent-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          <style>{`
            @media (max-width: 1024px) {
              .aiagent-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            }
          `}</style>

          {/* Left: Copy */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Badge */}
            <div style={{ marginBottom: "1.75rem" }}>
              <span className="badge-green">
                <span
                  className="pulse-green"
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#00C805",
                    flexShrink: 0,
                  }}
                />
                VIXAL AI Agent
              </span>
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
              Your AI-Powered{" "}
              <span className="gradient-text-green">RWA Advisor</span>
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
              VIXAL&apos;s AI Agent analyzes your entire real-world asset portfolio in
              real-time, delivering institutional-quality insights, risk predictions,
              and yield optimization strategies on demand.
            </p>

            {/* Capabilities list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {capabilities.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                      boxShadow: `0 0 16px ${color}12`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "6px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.65,
                        color: "#71717A",
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Chat */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ChatInterface messages={chatMessages} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
