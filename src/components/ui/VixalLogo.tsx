"use client";

interface VixalLogoProps {
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export function VixalLogo({ iconOnly = false, size = "md", style }: VixalLogoProps) {
  const iconSizes = {
    sm: 26,
    md: 32,
    lg: 42,
  };

  const textSizes = {
    sm: "17px",
    md: "20px",
    lg: "26px",
  };

  const currentIconSize = iconSizes[size];
  const currentFontSize = textSizes[size];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size === "sm" ? "10px" : size === "lg" ? "14px" : "12px",
        userSelect: "none",
        ...style,
      }}
    >
      {/* Icon Mark */}
      <svg
        width={currentIconSize}
        height={currentIconSize}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: "drop-shadow(0 0 10px rgba(0,200,5,0.25))" }}
      >
        <defs>
          <linearGradient id="v-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF66" />
            <stop offset="50%" stopColor="#00C805" />
            <stop offset="100%" stopColor="#008003" />
          </linearGradient>

          <linearGradient id="v-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#0088FF" />
          </linearGradient>

          <linearGradient id="v-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#12151C" />
            <stop offset="100%" stopColor="#050608" />
          </linearGradient>
        </defs>

        {/* Squircle Badge */}
        <rect x="20" y="20" width="472" height="472" rx="118" fill="url(#v-bg)" stroke="rgba(255, 255, 255, 0.14)" strokeWidth="8" />
        <rect x="28" y="28" width="456" height="456" rx="110" fill="none" stroke="rgba(0, 200, 5, 0.35)" strokeWidth="4" />

        {/* Geometric Wings */}
        <path d="M 130 140 L 214 140 L 256 348 L 200 348 Z" fill="url(#v-green)" />
        <path d="M 382 140 L 298 140 L 256 348 L 312 348 Z" fill="url(#v-cyan)" />

        {/* Center Prism */}
        <path d="M 256 160 L 290 140 L 256 380 L 222 140 Z" fill="#FFFFFF" opacity="0.95" />

        {/* Intelligence Node */}
        <circle cx="256" cy="230" r="32" fill="#040405" stroke="url(#v-green)" strokeWidth="6" />
        <circle cx="256" cy="230" r="18" fill="#00FF66" />
        <circle cx="256" cy="230" r="8" fill="#FFFFFF" />

        {/* Vertices */}
        <circle cx="130" cy="140" r="14" fill="#00FF66" />
        <circle cx="382" cy="140" r="14" fill="#00F0FF" />
        <circle cx="256" cy="380" r="16" fill="#00C805" />
      </svg>

      {/* Wordmark */}
      {!iconOnly && (
        <span
          style={{
            fontSize: currentFontSize,
            fontWeight: 900,
            letterSpacing: "-0.045em",
            color: "#FFFFFF",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          VIXAL
          <span
            style={{
              display: "inline-block",
              width: size === "sm" ? "5px" : "6px",
              height: size === "sm" ? "5px" : "6px",
              borderRadius: "50%",
              background: "#00C805",
              boxShadow: "0 0 8px #00C805",
              marginLeft: "3px",
              marginTop: size === "sm" ? "5px" : "7px",
            }}
          />
        </span>
      )}
    </div>
  );
}
