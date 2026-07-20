"use client";
import { motion } from "framer-motion";

interface GaugeBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
}

export function GaugeBar({ value, max = 100, label, color = "gradient" }: GaugeBarProps) {
  const pct = (value / max) * 100;
  const fill =
    color === "gradient"
      ? "linear-gradient(90deg, #00C805, #00D4FF)"
      : color;

  return (
    <div>
      {label && (
        <div className="text-[#6B7280] text-[10px] font-semibold uppercase tracking-wider mb-2">
          {label}
        </div>
      )}
      <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          style={{ background: fill }}
        />
      </div>
    </div>
  );
}
