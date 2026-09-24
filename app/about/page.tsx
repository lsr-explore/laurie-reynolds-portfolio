import type { Metadata } from "next";
import { BioSection } from "@/components/sections/bio-section";
import { HowIWorkSection } from "@/components/sections/how-i-work-section";
import { InspirationSection } from "@/components/sections/inspiration-section";

export const metadata: Metadata = {
  title: "About | Laurie Reynolds",
  description:
    "Learn about Laurie Reynolds — a senior frontend engineer with 30+ years of experience building secure, accessible systems across healthcare, payments, and civic tech.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12 md:space-y-24 md:py-20">
      <BioSection />
      <HowIWorkSection />
      <InspirationSection />
    </div>
  );
}
