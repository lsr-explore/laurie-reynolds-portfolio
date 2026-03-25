import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ResumeDownloadButton } from "./resume-download-button";

export const metadata: Metadata = {
  title: "Resume | Laurie Reynolds",
  description:
    "Resume of Laurie Reynolds — Senior Front-End Software Engineer with 25+ years of experience.",
};

const experience = [
  {
    title: "Independent Front-End Engineer",
    company: "",
    location: "Fully Remote",
    period: "May 2025 — Present",
    description:
      "Building accessibility-focused frontend tools and experimental developer workflows using modern React and Next.js stacks.",
    highlights: [
      "Developed WCAG-focused RAG prototypes to explore AI-assisted accessibility guidance using local embeddings, evaluation pipelines, and retrieval tuning.",
      "Conducted accessibility reviews and remediation support for nonprofit websites.",
    ],
    tech: [
      "Next.js",
      "React",
      "OpenAI API",
      "Hugging Face",
      "Tailwind CSS",
      "D3.js",
      "Node",
      "Postgres",
      "Vercel",
      "Accessibility",
    ],
  },
  {
    title: "Senior Software Engineer (Volunteer)",
    company: "U.S. Digital Response",
    location: "Fully Remote",
    period: "October 2024 — February 2025",
    description:
      "Extended Grant Finder functionality. Improved the testability and accessibility of the Grant Finder and ARPA Reporting applications.",
    highlights: [
      "Refactored UI components for keyboard navigation and screen reader compatibility.",
    ],
    tech: ["Node", "Postgres", "Accessibility", "Vue", "Docker"],
  },
  {
    title: "Staff Front-End Software Engineer",
    company: "Walmart Global Tech",
    location: "Carlsbad, CA and Fully Remote",
    period: "February 2019 — August 2024",
    description:
      "Led frontend engineering for web payment systems on Walmart.com (EBT SNAP, PayPal, WIC, credit card, Affirm) used by millions of customers daily.",
    highlights: [
      "Built a reusable React Wallet component that reduced duplication and simplified payment integration across Checkout, W+ Membership, Buy Now, and Subscription flows.",
      "Implemented third-party payment verification with resilient retry logic to reduce transient failures and improve transaction reliability.",
      "Led InfoSec submissions for web and mobile Payments applications (PCI compliance, audit readiness).",
      "Introduced and scaled shift-left accessibility tooling (eslint-plugin-jsx-a11y, jest-axe) within a large frontend monorepo.",
      "Reduced app load time and improved Core Web Vitals through bundle optimization, lazy loading, and skeleton UI.",
      "Facilitated an accessibility workshop for ~50 engineers, product, and UX team members.",
    ],
    tech: [
      "React",
      "Node",
      "Next.js",
      "GraphQL",
      "TypeScript",
      "React Testing Library",
      "TestCafe",
      "Mock Service Worker",
      "Splunk",
      "Accessibility",
    ],
  },
  {
    title: "Senior Front-End Software Engineer",
    company: "[24]7.ai",
    location: "San Jose, CA",
    period: "September 2017 — January 2019",
    description:
      "Delivered web-based tools for language tagging, bot testing, and data labeling, improving machine language model iteration cycles.",
    highlights: [
      "Designed React-based reusable component system to support Natural Language Understanding (NLU) model workflows.",
    ],
    tech: ["React", "Redux", "Webpack", "MySQL", "Elasticsearch", "Node"],
  },
  {
    title: "Senior Front-End Software Engineer",
    company: "Kofile",
    location: "San Francisco, CA",
    period: "April 2016 — September 2017",
    description:
      "Developed an administration application for clerks to configure the recording system. Worked closely with the UX team to achieve pixel-level match to the design.",
    highlights: [],
    tech: ["React", "Redux", "Node", "MSSQL", "Postgres"],
  },
  {
    title: "Career Transition & Volunteer Work",
    company: "Code for San Jose",
    location: "San Jose, CA",
    period: "February 2015 — August 2016",
    description:
      "Collaborated with the City of San Jose Economics Office to build an interactive dashboard with D3.js visualizations. First React/D3 project, marking transition from scientific programming to web development.",
    highlights: [],
    tech: ["React", "D3.js", "JavaScript", "Redux"],
  },
];

const earlierExperience = [
  {
    title: "Principal Scientific Programmer",
    company: "Nodality, Inc.",
    period: "1+ year",
  },
  {
    title: "Senior Front-End Software Engineer",
    company: "Thermo Fisher Scientific",
    period: "6 years",
    description:
      "Led development of FDA-regulated laboratory and diagnostic applications, delivering 21 CFR Part 11 compliant software.",
  },
  {
    title: "Senior Software Engineer",
    company: "Siemens Medical Solutions (Acuson)",
    period: "5 years",
    description:
      "Developed advanced imaging UIs and visualization tools for Sequoia ultrasound systems.",
  },
];

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h1 className="text-4xl font-light md:text-5xl">Resume</h1>
          <p className="mt-2 text-muted-foreground">
            Senior Front-End Software Engineer
          </p>
        </div>
        <ResumeDownloadButton />
      </div>

      {/* Summary */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            Led front-end architecture for Walmart&apos;s global payment flows
            supporting millions of daily users. Introduced and scaled
            accessibility tooling in a 1,000+ developer monorepo. Designed and
            delivered FDA-compliant diagnostic UIs and medical device software.
          </p>
          <p>
            Strong hands-on experience building high-scale React and TypeScript
            applications with a focus on payment experiences, accessibility, and
            performance optimization.
          </p>
        </CardContent>
      </Card>

      {/* Experience */}
      <h2 className="mb-6 text-2xl font-bold">Experience</h2>
      <div className="space-y-6">
        {experience.map((role) => (
          <Card key={`${role.company}-${role.period}`}>
            <CardHeader>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                  {role.company && (
                    <p className="text-sm font-medium text-primary">
                      {role.company}
                    </p>
                  )}
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-muted-foreground">{role.period}</p>
                  <p className="text-xs text-muted-foreground">
                    {role.location}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {role.description}
              </p>
              {role.highlights.length > 0 && (
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5">
                {role.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Earlier Experience */}
      <Separator className="my-12" />
      <h2 className="mb-6 text-2xl font-bold">
        Regulated &amp; Medical Software Engineering
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Senior engineering roles across medical imaging, biotech, and regulated
        scientific systems (1999 — 2015).
      </p>
      <div className="space-y-4">
        {earlierExperience.map((role) => (
          <Card key={role.company}>
            <CardHeader>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-base">{role.title}</CardTitle>
                  <p className="text-sm font-medium text-primary">
                    {role.company}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{role.period}</p>
              </div>
            </CardHeader>
            {role.description && (
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {role.description}
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Volunteer */}
      <Separator className="my-12" />
      <h2 className="mb-6 text-2xl font-bold">Volunteer</h2>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <CardTitle className="text-base">Volunteer</CardTitle>
                <a
                  href="https://accessiblecommunity.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Accessible Community
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                October 2025 — Present
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Evaluating small nonprofit organizations&apos; websites and
              improving internal tools to support accessibility education and
              outreach.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <CardTitle className="text-base">Website Editor</CardTitle>
                <a
                  href="https://cameraclublwv.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Camera Club of Laguna Woods Village
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                September 2024 — Present
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Updating classes and workshops on the website.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["WordPress", "Elegant Themes Divi", "Event Calendar", "Constant Contact"].map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Education */}
      <Separator className="my-12" />
      <h2 className="mb-6 text-2xl font-bold">Education</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="font-medium">
            M.S. Mathematics, B.S. Computer Science
          </p>
          <p className="text-sm text-muted-foreground">
            Fairleigh Dickinson University — Hackensack, NJ
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
