import type { ChatMessageData } from "@/types";

export const chatMessages: ChatMessageData[] = [
  {
    id: 1,
    role: "user",
    content: "Analyze my real estate portfolio risk exposure.",
  },
  {
    id: 2,
    role: "agent",
    content:
      "Analyzing 847 data signals across your 12 real estate positions… Concentration risk detected in NYC commercial sector (38% exposure). Recommend geographic diversification. Current risk score: 72/100 — Moderate.",
    chips: ["NYC: 38%", "Risk: 72/100", "Action Required"],
  },
  {
    id: 3,
    role: "user",
    content: "What's my optimal yield strategy for Q3?",
  },
  {
    id: 4,
    role: "agent",
    content:
      "Based on macro signals and your current allocation, shifting 8% from Commercial RE to Infrastructure bonds would improve yield by +1.4% annually with lower volatility. Robinhood Chain execution available instantly.",
    chips: ["+1.4% Yield", "Lower Vol", "Instant Execute"],
  },
];
