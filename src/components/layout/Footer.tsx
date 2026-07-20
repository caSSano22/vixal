"use client";
import { X as XIcon, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { VixalLogo } from "@/components/ui/VixalLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "AI Agent", href: "#ai-agent" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Token", href: "#token" },
  ],
  Resources: [
    { label: "Docs", href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socials = [
  { label: "Twitter/X", href: "#", Icon: XIcon },
  { label: "Discord", href: "#", Icon: MessageCircle },
  { label: "Telegram", href: "#", Icon: Send },
];

function SocialIcon({ label, href, Icon }: { label: string; href: string; Icon: typeof XIcon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hovered ? "#FFFFFF" : "#6B7280",
        transition: "all 0.2s ease",
        flexShrink: 0,
        transform: hovered ? "scale(1.08)" : "scale(1)",
        textDecoration: "none",
      }}
    >
      <Icon size={15} />
    </a>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li style={{ listStyle: "none" }}>
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? "#FFFFFF" : "#6B7280",
          fontSize: "14px",
          textDecoration: "none",
          transition: "color 0.2s ease",
          display: "block",
        }}
      >
        {label}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2.5rem 2.5rem",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          <style>{`
            @media (max-width: 768px) {
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
            }
            @media (max-width: 480px) {
              .footer-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <VixalLogo size="md" />
            </div>
            <p
              style={{
                color: "#6B7280",
                fontSize: "14px",
                lineHeight: 1.65,
                marginBottom: "24px",
                maxWidth: "240px",
              }}
            >
              The Intelligence Layer for Real World Assets. Built natively on Robinhood Chain.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {socials.map(({ label, href, Icon }) => (
                <SocialIcon key={label} label={label} href={href} Icon={Icon} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "13px",
                  marginBottom: "20px",
                  letterSpacing: "0.02em",
                }}
              >
                {title}
              </h4>
              <ul style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <FooterLink key={link.label} label={link.label} href={link.href} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#4B5563", fontSize: "13px" }}>© 2025 VIXAL. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(0,200,5,0.15)",
                border: "1px solid rgba(0,200,5,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#00C805",
                  boxShadow: "0 0 6px rgba(0,200,5,0.8)",
                }}
              />
            </div>
            <span style={{ color: "#4B5563", fontSize: "13px" }}>Built on Robinhood Chain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
