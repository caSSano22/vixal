"use client";
import { partners } from "@/constants/sections/trustBar";
import { useState } from "react";

function PartnerItem({ partner }: { partner: typeof partners[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexShrink: 0,
        cursor: "default",
        opacity: hovered ? 0.78 : 0.35,
        transition: "opacity 0.28s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 900,
          flexShrink: 0,
          background: `${partner.color}15`,
          border: `1px solid ${partner.color}25`,
          color: partner.color,
        }}
      >
        {partner.abbr.slice(0, 2)}
      </div>
      <span
        style={{
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: "14px",
          whiteSpace: "nowrap",
          letterSpacing: "-0.01em",
        }}
      >
        {partner.name}
      </span>
    </div>
  );
}

export function TrustBar() {
  const doubled = [...partners, ...partners];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
        overflow: "hidden",
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#52525B",
          marginBottom: "2.5rem",
        }}
      >
        Trusted by leading protocols and institutions
      </p>

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "96px",
            zIndex: 10,
            pointerEvents: "none",
            background: "linear-gradient(to right, #080808, transparent)",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "96px",
            zIndex: 10,
            pointerEvents: "none",
            background: "linear-gradient(to left, #080808, transparent)",
          }}
        />

        <div
          className="animate-marquee"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "56px",
            width: "max-content",
          }}
        >
          {doubled.map((partner, i) => (
            <PartnerItem key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
