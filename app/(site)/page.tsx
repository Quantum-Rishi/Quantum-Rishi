"use client";

import { HeroSection } from "../../components/HeroSection.tsx";
import { PillarsStrip } from "../../components/PillarsStrip.tsx";
import { ProductGrid } from "../../components/ProductGrid.tsx";
import { LabsSection } from "../../components/LabsSection.tsx";
import { RoadmapTeaser } from "../../components/RoadmapTeaser.tsx";
import { TeamSection } from "../../components/TeamSection.tsx";
import { Footer } from "../../components/Footer.tsx";
import { AnnouncementBar } from "../../components/AnnouncementBar.tsx";
import { ScrollProgress } from "../../components/ScrollProgress.tsx";
import { BackToTop } from "../../components/BackToTop.tsx";
import { Toaster } from "sonner";

export default function HomePage() {
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
        <section id="roadmap"><RoadmapTeaser /></section>
        <section id="team"><TeamSection /></section>
        <Footer />
      </div>
    </>
  );
}
