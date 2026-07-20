import type { TokenAllocation } from "@/types";

export const tokenAllocations: TokenAllocation[] = [
  { label: "Ecosystem & Rewards", percentage: 30, color: "#00C805" },
  { label: "Team & Advisors", percentage: 18, color: "#00D4FF" },
  { label: "Treasury", percentage: 15, color: "#00A804" },
  { label: "Public Sale", percentage: 12, color: "#00B8E6" },
  { label: "Private Sale", percentage: 10, color: "#008A03" },
  { label: "Liquidity", percentage: 10, color: "#0099CC" },
  { label: "Development Fund", percentage: 5, color: "#4B5563" },
];

export const tokenStats = [
  { value: "1,000,000,000", label: "Total Supply" },
  { value: "12%", label: "Initial Circulation" },
  { value: "24mo", label: "Vesting Period" },
];
