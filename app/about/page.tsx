import type { Metadata } from "next";
import { BioSection } from "@/components/sections/bio-section";
import { HowIThinkSection } from "@/components/sections/how-i-think-section";
import { InspirationSection } from "@/components/sections/inspiration-section";

export const metadata: Metadata = {
  title: "About | Laurie Reynolds",
  description:
    "Learn about Laurie Reynolds — a senior frontend engineer with 30+ years of experience building secure, accessible systems across healthcare, payments, and civic tech.",
};

export default function AboutPage() {
  return (
    <>
      <BioSection />
      <HowIThinkSection />
      <InspirationSection />
    </>
  );
}
