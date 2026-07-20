import type { NetworkNode, NetworkEdge } from "@/types";

export const ecosystemNodes: NetworkNode[] = [
  { id: "center", label: "VIXAL", x: 50, y: 50, size: 36, color: "#00C805", isCenter: true },
  { id: "realestate", label: "Real Estate", x: 50, y: 12, size: 24, color: "#00C805" },
  { id: "energy", label: "Energy", x: 83, y: 28, size: 22, color: "#00D4FF" },
  { id: "treasury", label: "Treasury", x: 88, y: 65, size: 22, color: "#00C805" },
  { id: "commodities", label: "Commodities", x: 55, y: 88, size: 22, color: "#00D4FF" },
  { id: "infrastructure", label: "Infrastructure", x: 15, y: 72, size: 22, color: "#00C805" },
  { id: "buildings", label: "Buildings", x: 12, y: 30, size: 22, color: "#00D4FF" },
];

export const ecosystemEdges: [string, string][] = [
  ["center", "realestate"],
  ["center", "energy"],
  ["center", "treasury"],
  ["center", "commodities"],
  ["center", "infrastructure"],
  ["center", "buildings"],
  ["realestate", "buildings"],
  ["energy", "treasury"],
  ["infrastructure", "commodities"],
];
