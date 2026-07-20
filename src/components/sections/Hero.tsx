"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AuroraBlobs } from "@/components/effects/AuroraBlobs";
import { GridOverlay } from "@/components/effects/GridOverlay";
import { heroStats, floatingAssets } from "@/constants/sections/hero";

const NeuralOrb = dynamic(() => import("@/components/effects/NeuralOrb"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,200,5,0.12), transparent 70%)",
        }}
      />
    </div>
  ),
});

/** Staggered easing used throughout hero */
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "80px",
        background: "#040404",
      }}
    >
      <AuroraBlobs />
      <GridOverlay />

      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "7rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        <style>{`
          @media (max-width: 1024px) {
            .hero-inner { grid-template-columns: 1fr !important; gap: 4rem !important; }
            .hero-orb   { display: none !important; }
          }
        `}</style>

        {/* ── Left: Copy ─────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
            style={{ marginBottom: "2.25rem" }}
          >
            <Badge dot>Powered by Robinhood Chain</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              color: "#FFFFFF",
              lineHeight: 0.99,
              marginBottom: "2rem",
            }}
          >
            The{" "}
            <span className="gradient-text-green">Intelligence</span>
            {" "}Layer for{" "}
            <span className="gradient-text">Real World</span>
            {" "}Assets.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#A1A1AA",
              marginBottom: "2.75rem",
              maxWidth: "440px",
              fontWeight: 400,
            }}
          >
            VIXAL transforms fragmented real-world asset data into
            AI-powered intelligence built natively on Robinhood Chain.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46, ease: EASE }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "4.5rem",
            }}
          >
            <Button variant="primary" size="lg" href="#" className="gap-2">
              Launch App <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" size="lg" href="#features" className="gap-2">
              Explore Docs <ChevronRight size={14} />
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "stat-item" : ""}
                style={i === 0 ? undefined : undefined}
              >
                <div
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    fontWeight: 900,
                    color: "#FFFFFF",
                    letterSpacing: "-0.025em",
                    marginBottom: "4px",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#71717A",
                    letterSpacing: "0.01em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Orb ─────────────────────────── */}
        <motion.div
          className="hero-orb"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.28, ease: EASE }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", width: "500px", height: "500px" }}>
            {/* Outer atmospheric glow */}
            <div
              style={{
                position: "absolute",
                inset: "-48px",
                borderRadius: "50%",
                pointerEvents: "none",
                background: "radial-gradient(circle, rgba(0,200,5,0.05) 0%, transparent 65%)",
                filter: "blur(24px)",
              }}
            />
            <NeuralOrb />

            {/* Floating asset chips */}
            {floatingAssets.map((asset, i) => {
              const positions: React.CSSProperties[] = [
                { top: "8%",   left: "-15%" },
                { top: "10%",  right: "-19%" },
                { bottom: "16%", left: "-17%" },
                { bottom: "10%", right: "-17%" },
              ];

              return (
                <motion.div
                  key={asset.id}
                  style={{
                    position: "absolute",
                    ...positions[i],
                    background: "rgba(14,14,14,0.82)",
                    backdropFilter: "blur(28px) saturate(160%)",
                    WebkitBackdropFilter: "blur(28px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: "16px",
                    padding: "14px 18px",
                    minWidth: "136px",
                    boxShadow:
                      "0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset",
                  }}
                  initial={{ opacity: 0, scale: 0.82, y: 8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, i % 2 === 0 ? -9 : 9, 0],
                  }}
                  transition={{
                    opacity:  { delay: 1.0 + i * 0.14, duration: 0.5, ease: "easeOut" },
                    scale:    { delay: 1.0 + i * 0.14, duration: 0.5, ease: EASE },
                    y: {
                      repeat:     Infinity,
                      duration:   5.2 + i * 0.9,
                      ease:       "easeInOut",
                      delay:      asset.delay,
                      repeatType: "mirror",
                    },
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#52525B",
                      marginBottom: "7px",
                    }}
                  >
                    {asset.label}
                  </div>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: "14px",
                      color: asset.color,
                      textShadow: `0 0 16px ${asset.color}50`,
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {asset.value}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade-out */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          pointerEvents: "none",
          zIndex: 10,
          background: "linear-gradient(to top, #040404 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
