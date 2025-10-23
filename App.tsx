import { HeroSection } from "./components/HeroSection";
import { PillarsStrip } from "./components/PillarsStrip";
import { ProductGrid } from "./components/ProductGrid";
import { LabsSection } from "./components/LabsSection";
// import { TrustCompliance } from "./components/TrustCompliance";
import { RoadmapTeaser } from "./components/RoadmapTeaser";
import { TeamSection } from "./components/TeamSection";
import { Footer } from "./components/Footer";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <ScrollProgress />
      <Toaster position="top-right" richColors />
      <BackToTop />
      <div className="min-h-screen bg-background text-foreground antialiased pt-10">
        <section id="hero"><HeroSection /></section>
        <section id="pillars"><PillarsStrip /></section>
        <section id="products"><ProductGrid /></section>
        <section id="labs"><LabsSection /></section>
        {/* <TrustCompliance /> */}
        <section id="roadmap"><RoadmapTeaser /></section>
        <section id="team"><TeamSection /></section>
        <Footer />
      </div>
    </>
  );
}
