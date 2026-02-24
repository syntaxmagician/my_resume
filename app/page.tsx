import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { DataPipelineSection } from "@/components/sections/DataPipelineSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactMetricsSection } from "@/components/sections/ImpactMetricsSection";
import { InteractiveAISection } from "@/components/sections/InteractiveAISection";
import { SystemsSection } from "@/components/sections/SystemsSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ImpactMetricsSection />
        <CaseStudySection />
        <SystemsSection />
        <DataPipelineSection />
        <InteractiveAISection />
      </main>
      <SiteFooter />
    </>
  );
}
