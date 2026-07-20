import type { HeatCellData } from "@/types";

export function HeatCell({ label, value, change }: HeatCellData) {
  const isPositive = change.startsWith("+");
  const intensity = Math.floor((value / 100) * 255);

  return (
    <div
      className="p-3 rounded-xl border border-white/[0.06] flex flex-col gap-1 cursor-default hover:border-white/[0.12] transition-all"
      style={{ background: `rgba(0, ${Math.floor(intensity * 0.8)}, 5, ${value / 400})` }}
    >
      <div className="text-white/60 text-[10px] font-medium">{label}</div>
      <div className="text-white font-bold text-sm tabular-nums">{value}</div>
      <div className={`text-[10px] font-medium ${isPositive ? "text-[#00C805]" : "text-red-400"}`}>
        {change}
      </div>
    </div>
  );
}
