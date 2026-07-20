"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GaugeBar } from "@/components/charts/GaugeBar";
import { HeatCell } from "@/components/charts/HeatCell";
import { fadeUp } from "@/lib/animations/variants";
import type { HeatCellData } from "@/types";

const heatmapData: HeatCellData[] = [
  { label: "Real Estate", value: 82, change: "+4.2%" },
  { label: "Treasury", value: 91, change: "+1.8%" },
  { label: "Commodities", value: 67, change: "-2.1%" },
  { label: "Infrastructure", value: 75, change: "+3.5%" },
  { label: "Pvt Credit", value: 88, change: "+6.7%" },
  { label: "Equity", value: 54, change: "-1.4%" },
];

const signals = [
  { label: "Rate", value: "LOW", color: "#00C805" },
  { label: "Beta", value: "0.34", color: "#9CA3AF" },
  { label: "Liquidity", value: "HIGH", color: "#00C805" },
  { label: "Volatility", value: "MED", color: "#F59E0B" },
];

const suggestions = [
  { text: "Rebalance treasury to 42% for optimal yield", priority: "HIGH" },
  { text: "Real estate overweight — consider hedging", priority: "MED" },
  { text: "Infrastructure shows 60-day entry signal", priority: "LOW" },
];

const portfolio = [
  { name: "US Treasury", pct: 38, value: "$38.4M" },
  { name: "Commercial RE", pct: 25, value: "$25.3M" },
  { name: "Gold", pct: 18, value: "$18.2M" },
  { name: "Infrastructure", pct: 12, value: "$12.1M" },
  { name: "Private Credit", pct: 7, value: "$7.1M" },
];

const LABEL_STYLE: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#4B5563",
  marginBottom: "12px",
};

export function Dashboard() {
  return (
    <section
      id="dashboard"
      style={{ background: "#060606", paddingTop: "10rem", paddingBottom: "10rem", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,200,5,0.04), transparent)",
        }}
      />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader
          badge="Dashboard Preview"
          title={<>Institutional-Grade <span className="gradient-text">Intelligence Hub</span></>}
          subtitle="Every metric, signal, and insight — unified in one premium dashboard."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: "relative" }}
        >
          {/* Outer glow */}
          <div
            style={{
              position: "absolute",
              inset: "-16px",
              borderRadius: "36px",
              pointerEvents: "none",
              background: "radial-gradient(ellipse at center, rgba(0,200,5,0.06), transparent 70%)",
            }}
          />

          {/* Dashboard shell */}
          <div
            style={{
              position: "relative",
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(22,22,22,0.7)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(239,68,68,0.5)" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(234,179,8,0.5)" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(34,197,94,0.5)" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#6B7280" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00C805", boxShadow: "0 0 6px #00C80580" }} />
                VIXAL Intelligence Dashboard — Live
              </div>
              <div style={{ fontSize: "11px", color: "#4B5563", fontFamily: "monospace" }}>v2.4.1</div>
            </div>

            {/* 3-column panels */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
              className="dashboard-panels"
            >
              <style>{`
                @media (max-width: 900px) {
                  .dashboard-panels { grid-template-columns: 1fr !important; }
                }
                .dashboard-panel + .dashboard-panel {
                  border-left: 1px solid rgba(255,255,255,0.06);
                }
                @media (max-width: 900px) {
                  .dashboard-panel + .dashboard-panel {
                    border-left: none !important;
                    border-top: 1px solid rgba(255,255,255,0.06);
                  }
                }
              `}</style>

              {/* Panel 1: Scores + Signals */}
              <div className="dashboard-panel" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* AI Score */}
                <div>
                  <div style={LABEL_STYLE}>AI Confidence Score</div>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px", fontVariantNumeric: "tabular-nums" }}>
                    94<span style={{ fontSize: "16px", color: "#6B7280", fontWeight: 400 }}>/100</span>
                  </div>
                  <GaugeBar value={94} />
                  <div style={{ color: "#00C805", fontSize: "12px", fontWeight: 600, marginTop: "6px" }}>Top 3% globally</div>
                </div>
                {/* Portfolio Value */}
                <div>
                  <div style={LABEL_STYLE}>Portfolio Value</div>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>$101.0M</div>
                  <div style={{ color: "#00C805", fontSize: "13px", fontWeight: 600, marginTop: "4px" }}>↑ +12.4% (30d)</div>
                </div>
                {/* Signals */}
                <div>
                  <div style={LABEL_STYLE}>Market Signals</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {signals.map((s) => (
                      <div key={s.label} style={{ background: "#0D0D0D", borderRadius: "10px", padding: "10px 12px" }}>
                        <div style={{ color: "#4B5563", fontSize: "10px", fontWeight: 500, marginBottom: "4px" }}>{s.label}</div>
                        <div style={{ color: s.color, fontWeight: 700, fontSize: "13px", fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel 2: Allocation */}
              <div className="dashboard-panel" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <div style={LABEL_STYLE}>RWA Allocation</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {portfolio.map((asset) => (
                      <div key={asset.name}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                          <span style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 500 }}>{asset.name}</span>
                          <span style={{ color: "#6B7280", fontSize: "12px", fontVariantNumeric: "tabular-nums" }}>{asset.pct}%</span>
                        </div>
                        <GaugeBar value={asset.pct} max={50} />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={LABEL_STYLE}>AI Performance (30d)</div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "48px" }}>
                    {[40, 55, 45, 65, 58, 72, 68, 80, 75, 88, 82, 94].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          borderRadius: "3px",
                          height: `${h}%`,
                          background: i === 11
                            ? "linear-gradient(180deg, #00C805, #00A804)"
                            : `rgba(0,200,5,${0.18 + (i / 12) * 0.42})`,
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ color: "#00C805", fontSize: "13px", fontWeight: 700, marginTop: "8px", fontVariantNumeric: "tabular-nums" }}>+28.4%</div>
                </div>
              </div>

              {/* Panel 3: Heatmap + Suggestions */}
              <div className="dashboard-panel" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <div style={LABEL_STYLE}>Asset Heatmap</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {heatmapData.map((cell) => (
                      <HeatCell key={cell.label} {...cell} />
                    ))}
                  </div>
                </div>
                <div>
                  <div style={LABEL_STYLE}>AI Suggestions</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {suggestions.map((s, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          padding: "10px 12px",
                          borderRadius: "12px",
                          background: "#0D0D0D",
                          border: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            marginTop: "5px",
                            flexShrink: 0,
                            background: s.priority === "HIGH" ? "#00C805" : s.priority === "MED" ? "#F59E0B" : "#6B7280",
                            boxShadow: s.priority === "HIGH" ? "0 0 6px #00C80580" : "none",
                          }}
                        />
                        <span style={{ color: "#9CA3AF", fontSize: "12px", lineHeight: 1.5 }}>{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
