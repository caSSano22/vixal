"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { VixalLogo } from "@/components/ui/VixalLogo";

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "14px",
        fontWeight: 500,
        color: hovered ? "#FFFFFF" : "#6B7280",
        textDecoration: "none",
        transition: "color 0.2s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
          background: scrolled ? "rgba(4,4,4,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.04), 0 16px 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <VixalLogo size="md" />
          </a>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              {navigation.map((item) => (
                <NavLink key={item.id} label={item.label} href={item.href} />
              ))}
            </div>
          )}

          {/* Desktop CTA */}
          {!isMobile ? (
            <Button variant="primary" size="sm" href="#" className="gap-1.5">
              Launch App <ArrowRight size={14} />
            </Button>
          ) : (
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                borderRadius: "8px",
                color: "#9CA3AF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
            >
              <Menu size={22} />
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 50,
                background: "#000000",
                cursor: "pointer",
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 51,
                width: "80vw",
                maxWidth: "340px",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                background: "rgba(8,8,8,0.98)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.7)",
              }}
            >
              {/* Drawer header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "3rem",
                }}
              >
                <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: "20px", letterSpacing: "-0.05em" }}>
                  VIXAL
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "6px",
                    color: "#6B7280",
                    display: "flex",
                  }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav links */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                {navigation.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.07 }}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "12px",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      transition: "background 0.2s",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <Button variant="primary" size="md" href="#" className="w-full gap-2 mt-4">
                Launch App <ArrowRight size={16} />
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
