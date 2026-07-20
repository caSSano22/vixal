import type { AssetClass, StatItemData } from "@/types";

export const floatingAssets: AssetClass[] = [
  { id: "realestate", label: "REAL ESTATE", value: "+12.4%", color: "#00C805", delay: 0 },
  { id: "treasury", label: "TREASURY BILL", value: "+5.2%", color: "#00D4FF", delay: 0.5 },
  { id: "commodities", label: "COMMODITIES", value: "+8.7%", color: "#00C805", delay: 1 },
  { id: "infrastructure", label: "INFRASTRUCTURE", value: "+3.9%", color: "#9CA3AF", delay: 1.5 },
];

export const heroStats: StatItemData[] = [
  { value: "$2.4B+", label: "Assets Analyzed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50ms", label: "AI Response" },
];
