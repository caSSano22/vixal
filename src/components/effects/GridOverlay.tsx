interface GridOverlayProps {
  cellSize?: number;
  opacity?: number;
  className?: string;
}

export function GridOverlay({ cellSize = 64, opacity = 0.025, className }: GridOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      style={{
        opacity,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: `${cellSize}px ${cellSize}px`,
      }}
    />
  );
}
