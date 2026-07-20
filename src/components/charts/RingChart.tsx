"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import type { TokenAllocation } from "@/types";

interface RingChartProps {
  segments: TokenAllocation[];
  size?: number;
}

export function RingChart({ segments, size = 280 }: RingChartProps) {
  const [active, setActive] = useState<string | null>(null);
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;

  let cumulative = 0;
  const total = segments.reduce((s, seg) => s + seg.percentage, 0);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      {/* Ring */}
      <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          {/* Track */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={strokeWidth}
          />
          {segments.map((seg, i) => {
            const offset = (cumulative / total) * circumference;
            const dash = (seg.percentage / total) * circumference - 2;
            const isActive = active === seg.label;
            const result = (
              <motion.circle
                key={seg.label}
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={isActive ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={`${dash} ${circumference}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
                initial={{ opacity: 0, strokeDasharray: `0 ${circumference}` }}
                whileInView={{
                  opacity: active && !isActive ? 0.3 : 1,
                  strokeDasharray: `${dash} ${circumference}`,
                }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                onMouseEnter={() => setActive(seg.label)}
                onMouseLeave={() => setActive(null)}
                className="cursor-pointer transition-all duration-200"
              />
            );
            cumulative += seg.percentage;
            return result;
          })}
        </svg>
        {/* Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white text-xl font-black">1B</div>
          <div className="text-[#6B7280] text-[11px] font-medium tracking-wide">$VIXAL</div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 w-full">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className="flex items-center gap-3 cursor-default group"
            onMouseEnter={() => setActive(seg.label)}
            onMouseLeave={() => setActive(null)}
          >
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
              style={{ background: seg.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-sm truncate transition-colors"
                  style={{ color: active === seg.label ? "#FFFFFF" : "#9CA3AF" }}
                >
                  {seg.label}
                </span>
                <span className="text-sm font-bold text-white ml-2 tabular-nums">
                  {seg.percentage}%
                </span>
              </div>
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${seg.percentage}%` }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ background: seg.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
