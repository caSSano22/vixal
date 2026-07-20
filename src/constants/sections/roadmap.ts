import type { RoadmapPhase } from "@/types";

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    title: "Foundation",
    quarter: "Q3 2025",
    status: "completed",
    milestones: [
      "Core AI model development",
      "Robinhood Chain testnet deployment",
      "Smart contract architecture",
      "Seed funding round",
    ],
  },
  {
    id: "phase-2",
    title: "Launch",
    quarter: "Q4 2025",
    status: "active",
    milestones: [
      "Mainnet launch on Robinhood Chain",
      "$VIXAL token generation event",
      "Dashboard v1 release",
      "AI Agent beta",
    ],
  },
  {
    id: "phase-3",
    title: "Expansion",
    quarter: "Q1 2026",
    status: "upcoming",
    milestones: [
      "Cross-chain data integration",
      "Institution API launch",
      "Data marketplace beta",
      "10+ asset class coverage",
    ],
  },
  {
    id: "phase-4",
    title: "Scale",
    quarter: "Q2 2026",
    status: "upcoming",
    milestones: [
      "Enterprise partnerships",
      "Institutional compliance layer",
      "AI model v2 (predictive)",
      "$1B+ assets under analysis",
    ],
  },
];
