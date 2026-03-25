import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CompaniesSection } from "@/components/sections/companies-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <SkillsSection />
      <CompaniesSection />
    </>
  );
}
