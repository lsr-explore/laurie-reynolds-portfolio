import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Work | Laurie Reynolds",
  description:
    "Selected projects and case studies from Laurie Reynolds — frontend systems for payments, healthcare, and civic technology.",
};

const workHighlights = [
  {
    title: "Walmart Global Tech",
    role: "Staff Front-End Software Engineer",
    period: "2019 — 2024",
    description:
      "Led frontend engineering for web payment systems on Walmart.com (EBT SNAP, PayPal, WIC, credit card, Affirm) used by millions of customers daily.",
  },
  {
    title: "U.S. Digital Response",
    role: "Senior Software Engineer (Volunteer)",
    period: "2024 — 2025",
    description:
      "Extended Grant Finder functionality. Improved testability and accessibility of Grant Finder and ARPA Reporting applications.",
  },
  {
    title: "Thermo Fisher Scientific",
    role: "Senior Front-End Software Engineer",
    period: "6 years",
    description:
      "Led development of FDA-regulated laboratory and diagnostic applications, delivering 21 CFR Part 11 compliant software.",
  },
  {
    title: "Siemens Medical Solutions",
    role: "Senior Software Engineer",
    period: "5 years",
    description:
      "Developed advanced imaging UIs and visualization tools for Sequoia ultrasound systems.",
  },
];

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="mb-4 text-center font-serif text-4xl font-bold md:text-5xl">
        Work
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        A selection of roles and projects where I&apos;ve delivered frontend
        systems at scale.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {workHighlights.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <p className="text-sm font-medium text-primary">{item.role}</p>
              <p className="text-xs text-muted-foreground">{item.period}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
