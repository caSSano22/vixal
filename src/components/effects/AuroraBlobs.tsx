interface AuroraBlobsProps {
  className?: string;
}

export function AuroraBlobs({ className }: AuroraBlobsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}>
      {/* Primary green orb — top left */}
      <div
        className="absolute rounded-full animate-orb-drift"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(ellipse, rgba(0,200,5,0.12) 0%, rgba(0,200,5,0.04) 50%, transparent 70%)",
          filter: "blur(60px)",
          top: "-25%",
          left: "-5%",
        }}
      />

      {/* Cyan orb — right */}
      <div
        className="absolute rounded-full animate-orb-drift-reverse"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.09) 0%, rgba(0,212,255,0.03) 50%, transparent 70%)",
          filter: "blur(80px)",
          top: "20%",
          right: "-10%",
          animationDelay: "-8s",
        }}
      />

      {/* Third orb — bottom center */}
      <div
        className="absolute rounded-full animate-orb-drift"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(0,200,5,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "5%",
          left: "35%",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
