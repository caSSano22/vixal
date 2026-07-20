import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Features } from "@/components/sections/Features";
import { AIAgent } from "@/components/sections/AIAgent";
import { Dashboard } from "@/components/sections/Dashboard";
import { RWAEcosystem } from "@/components/sections/RWAEcosystem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TokenUtility } from "@/components/sections/TokenUtility";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { Roadmap } from "@/components/sections/Roadmap";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <AIAgent />
        <Dashboard />
        <RWAEcosystem />
        <HowItWorks />
        <TokenUtility />
        <Tokenomics />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
