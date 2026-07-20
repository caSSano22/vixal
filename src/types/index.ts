export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export interface AssetClass {
  id: string;
  label: string;
  value: string;
  color: string;
  delay: number;
}

export interface NetworkNode {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
  isCenter?: boolean;
}

export interface NetworkEdge {
  from: string;
  to: string;
}

export interface ChatMessageData {
  id: number;
  role: "user" | "agent";
  content: string;
  chips?: string[];
}

export interface TokenAllocation {
  label: string;
  percentage: number;
  color: string;
}

export interface RoadmapMilestone {
  text: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  quarter: string;
  status: "completed" | "active" | "upcoming";
  milestones: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureCardData {
  id: string;
  iconName: string;
  title: string;
  description: string;
  accent: string;
  size: "normal" | "large" | "wide";
}

export interface UtilityCardData {
  id: string;
  iconName: string;
  title: string;
  description: string;
  accent: string;
  span: string;
}

export interface PartnerLogoData {
  name: string;
  abbr: string;
  color: string;
}

export interface StatItemData {
  value: string;
  label: string;
}

export interface StepItemData {
  step: number;
  iconName: string;
  title: string;
  description: string;
}

export interface HeatCellData {
  label: string;
  value: number;
  change: string;
}

export interface PortfolioAsset {
  name: string;
  allocation: number;
  value: string;
  trend: "up" | "down";
}

export interface SignalData {
  label: string;
  value: string;
  color: string;
}

export interface AISuggestion {
  text: string;
  priority: "HIGH" | "MED" | "LOW";
}

export type ButtonVariant = "primary" | "ghost" | "icon";
export type ButtonSize = "sm" | "md" | "lg";
export type BadgeVariant = "green" | "default";
