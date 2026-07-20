interface SectionFadeProps {
  direction?: "top" | "bottom";
  fromColor?: string;
  height?: number;
}

export function SectionFade({
  direction = "bottom",
  fromColor = "#050505",
  height = 128,
}: SectionFadeProps) {
  const gradient =
    direction === "bottom"
      ? `linear-gradient(to top, ${fromColor}, transparent)`
      : `linear-gradient(to bottom, ${fromColor}, transparent)`;

  const position =
    direction === "bottom"
      ? { bottom: 0, left: 0, right: 0 }
      : { top: 0, left: 0, right: 0 };

  return (
    <div
      className="absolute pointer-events-none z-10"
      style={{ ...position, height, background: gradient }}
    />
  );
}
