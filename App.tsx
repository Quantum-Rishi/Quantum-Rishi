import { HeroSection } from "./components/HeroSection";
import { PillarsStrip } from "./components/PillarsStrip";
import { ProductGrid } from "./components/ProductGrid";
import { LabsSection } from "./components/LabsSection";
import { TrustCompliance } from "./components/TrustCompliance";
import { RoadmapTeaser } from "./components/RoadmapTeaser";
import { TeamSection } from "./components/TeamSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <HeroSection />
      <PillarsStrip />
      <ProductGrid />
      <LabsSection />
      <TrustCompliance />
      <RoadmapTeaser />
      <TeamSection />
      <Footer />
    </div>
  );
}
