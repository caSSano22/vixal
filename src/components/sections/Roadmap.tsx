import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhaseCard } from "@/components/interactive/PhaseCard";
import { roadmapPhases } from "@/constants/sections/roadmap";

export function Roadmap() {
  return (
    <section
      id="roadmap"
      style={{ background: "#060606", paddingTop: "10rem", paddingBottom: "10rem", position: "relative" }}
    >
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,200,5,0.04) 0%, transparent 70%)",
        }}
      />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader
          badge="Roadmap"
          title={<>The Path to <span className="gradient-text">Intelligence Dominance</span></>}
          subtitle="From testnet to institutional adoption."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {roadmapPhases.map((phase, i) => (
            <PhaseCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
