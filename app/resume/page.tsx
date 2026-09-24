import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ResumeDownloadButton } from "./resume-download-button";

export const metadata: Metadata = {
  title: "Resume | Laurie Reynolds",
  description:
    "Resume of Laurie Reynolds — Senior Front-End Software Engineer specializing in payments, accessibility, and regulated medical software.",
};

const resumeSummary = [
  "Senior/Staff Front-end engineer with deep experience building accessible, high-scale applications across global e-commerce (Walmart Payments), civic tech (U.S. Digital Response, Nava PBC), and FDA-regulated systems (Thermo Fisher, Siemens Medical/Acuson).",
  "Led frontend engineering for web payment systems on Walmart.com (Supplemental Nutrition Assistance Program (SNAP), Women, Infants, and Children (WIC), PayPal, Affirm, Credit Card) serving millions of daily users.",
  "Introduced and scaled accessibility tooling (eslint-plugin-jsx-a11y, jest-axe) in a 1,000+ developer monorepo, shipping payment systems with zero blocker accessibility bugs.",
  "Currently expanding into AI-enabled application development, including retrieval-augmented generation (RAG), agentic workflows, evaluation, and grounded AI experiences, while continuing hands-on work in React, Next.js, accessibility, and front-end architecture.",
  "Drives alignment through early prototyping, journey-based technical design, and mentoring; collaborative across product, design, security, and engineering.",
];

const resumeSkills = [
  ["Languages & Frameworks", "TypeScript, JavaScript (ES6+), React, Next.js, Node.js, GraphQL, Python, Vue, Tailwind CSS, D3.js, Figma, Redux, Design Systems, SSR"],
  ["AI & Data", "OpenAI API, RAG, Postgres/pgvector, AI evaluation"],
  ["Testing & Tooling", "Vitest, Jest, Playwright, React Testing Library, Mock Service Worker, axe DevTools, eslint-plugin-jsx-a11y"],
  ["DevOps & Deployment", "Docker, CI/CD, Vercel, Splunk, PostgreSQL, MSSQL, MySQL"],
  ["Other", "Accessibility (a11y), Performance Optimization, PCI DSS, CCPA, FDA 21 CFR Part 11, Agile, Scrum Certification"],
];

const experience = [
  {
    title: "Independent Software Engineer - Front-End & Applied AI",
    company: "",
    location: "Fully Remote",
    period: "May 2025 — Present",
    description:
      "Building and evaluating modern front-end and AI-enabled applications while deepening expertise in agentic AI, retrieval-augmented generation, accessibility, and scalable application architecture.",
    highlights: [
      "Design and build React/Next.js applications and prototypes exploring AI-assisted workflows, RAG, structured retrieval, tool use, citations, evaluation, and graceful failure modes.",
      "Develop ArtLoupe, an AI-assisted art exploration and analysis platform integrating external museum and image APIs with accessible, responsive data visualizations and AI-generated analysis.",
      "Apply production engineering practices—including accessibility, automated testing, performance, observability, and component architecture—to experimental and AI-enabled applications.",
    ],
    tech: ["TypeScript", "React", "Next.js", "Astro", "Tailwind CSS", "D3.js", "Node.js", "Python", "OpenAI API", "Postgres/pgvector", "Supabase", "Vercel", "Vitest", "Playwright", "Storybook"],
  },
  {
    title: "Principal Engineer",
    company: "Nava PBC",
    location: "Fully Remote",
    period: "February 2025 — May 2025",
    description:
      "Brought in to help form a new team supporting the New Jersey Department of Labor’s unemployment services. Onboarded and mentored several engineers, coached one new hire on front-end work, established a meeting-free focus day, and ensured a smooth handoff to the incoming team lead.",
    highlights: [],
    tech: [],
  },
  {
    title: "Senior Front-End Engineer (Volunteer)",
    company: "U.S. Digital Response",
    location: "Fully Remote",
    period: "October 2024 — February 2025",
    description:
      "Extended Grant Finder functionality. Improved the testability and accessibility of the Grant Finder and American Rescue Plan Act (ARPA) Reporting applications.",
    highlights: [
      "Refactored UI components for keyboard navigation and screen reader compatibility.",
    ],
    tech: ["Node", "Postgres", "Accessibility", "Vue", "Docker"],
  },
  {
    title: "Staff Software Engineer",
    positions: [
      { title: "Staff Software Engineer", period: "May 2023 — August 2024" },
      { title: "Senior Software Engineer", period: "February 2019 — May 2023" },
    ],
    company: "Walmart Global Tech",
    location: "Carlsbad, CA and Fully Remote",
    period: "February 2019 — August 2024",
    description:
      "Led frontend engineering for web payment systems on Walmart.com (EBT SNAP, PayPal, WIC, credit card, Affirm) used by millions of customers daily. Focused on accessibility, performance, and maintainable architecture across checkout and billing experiences, collaborating closely with web, mobile, backend, product, UX, security, fraud, and international teams.",
    highlights: [],
    highlightGroups: [
      {
        title: "Architecture & Component Systems",
        items: [
          "Built a reusable React Wallet component that reduced duplication and simplified payment integration across Checkout, W+ Membership, Buy Now, and Subscription flows.",
          "Implemented third-party payment verification with resilient retry logic to reduce transient failures, mitigate fraud risk, and improve transaction reliability.",
          "Developed a dynamic, card-type-aware payment form that rendered required fields based on detected payment type and supported both side-panel and embedded checkout layouts without duplicating UI logic.",
        ],
      },
      {
        title: "Security & Compliance",
        items: [
          "Led InfoSec submissions for web and mobile Payments applications (PCI compliance, audit readiness).",
          "Contributed to the company-wide California Consumer Privacy Act (CCPA) compliance initiative under a strict regulatory deadline, supporting production cutover and release coordination.",
          "Built a schema-driven nutrition label renderer to support regulatory update requirements, enabling structured, maintainable layout changes.",
        ],
      },
      {
        title: "Performance, Experimentation & Reliability",
        items: [
          "Reduced app load time and improved Core Web Vitals through bundle optimization, lazy loading, and skeleton UI.",
          "Proactively monitored checkout experiment dashboards, comparing control and variant error rates to identify discrepancies early and protect experiment validity.",
          "Increased test coverage and reliability through audit and refactor of React/TestCafe integration suites.",
          "Improved CI stability across frontend deployments using Mock Service Worker and test isolation.",
        ],
      },
      {
        title: "Accessibility Leadership",
        items: [
          "Introduced and scaled shift-left accessibility tooling (eslint-plugin-jsx-a11y, jest-axe) within a large frontend monorepo.",
          "Remediated accessibility violations and launched payment systems with zero blocker accessibility bugs.",
          "Facilitated an accessibility workshop for approximately 50 engineers, product, and UX team members, promoting accessible design and development practices.",
          "Delivered internal talks on accessible design analysis and unit test strategies to reduce regressions.",
        ],
      },
      {
        title: "Operational Support & On-Call",
        items: [
          "Participated in on-call rotation during peak traffic periods, including holidays, supporting production incidents and collaborating with third-party payment providers to mitigate downtime.",
          "Authored incident response guidelines and collected Splunk queries and dashboards to assist on-call engineers in rapid triage and recovery.",
        ],
      },
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
      "Splunk", "Figma", "JavaScript", "i18n", "Core Web Vitals",
      "Tachyons", "Server-side rendering", "axe DevTools", "Chrome DevTools",
      "Custom A/B experimentation platform", "Accessibility",
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
    tech: ["React", "Redux", "Grommet", "Webpack", "MySQL", "Elasticsearch", "Kibana", "Node", "Java", "JavaScript", "ES6", "Sketch", "InVision", "Jira", "Confluence"],
  },
  {
    title: "Senior Software Engineer",
    company: "Kofile",
    location: "San Francisco, CA",
    period: "April 2016 — September 2017",
    description:
      "Developed an administration application for clerks to configure the recording system. Worked closely with the UX team to develop new React components and achieve pixel-level match to the design.",
    highlights: [],
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MSSQL", "GitHub", "Karma", "Mocha", "CodeceptJS", "Sketch", "Postgres", "Semaphore", "Proxyquire", "Sinon", "React Router"],
  },
  {
    title: "Career Transition & Volunteer Work",
    company: "Code for San Jose",
    location: "San Jose, CA",
    period: "February 2015 — April 2016",
    description:
      "Collaborated with the City of San Jose Economics Office to build an interactive dashboard with D3.js visualizations and configurable data displays. First React/D3 project, marking transition from scientific programming to web development.",
    highlights: [],
    tech: ["React", "D3.js", "HTML/CSS", "JavaScript", "Redux", "Travis CI", "Mocha", "Karma", "Sketch"],
  },
];

const earlierExperience = [
  {
    title: "Principal Scientific Programmer",
    company: "Nodality, Inc.",
    location: "South San Francisco, CA",
    period: "1+ year",
    description: "Managed laboratory software development in a biotech startup using C#, WPF, SQL Server, Python, Django, and D3.js.",
  },
  {
    title: "Lead Software Engineer",
    company: "Thermo Fisher Scientific",
    location: "San Jose, CA",
    period: "7 years",
    description:
      "Led development of FDA-regulated laboratory and diagnostic applications, delivering 21 CFR Part 11 compliant software for drug discovery. Supported collaboration to use Thermo Fisher products for drug testing at the 2012 Olympics.",
  },
  {
    title: "Senior Software Engineer",
    company: "Siemens Medical Solutions (Acuson)",
    location: "Mountain View, CA",
    period: "5 years",
    description:
      "Developed advanced imaging UIs and visualization tools for Sequoia ultrasound systems. Contributed to standards-aligned medical imaging workflows.",
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
          <p className="mt-1 text-sm text-muted-foreground">Laurie Reynolds · Remote, CA, USA</p>
        </div>
        <ResumeDownloadButton />
      </div>

      {/* Summary */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {resumeSummary.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>

      <h2 className="mb-6 text-2xl font-bold">Skills</h2>
      <Card className="mb-8">
        <CardContent className="space-y-4">
          {resumeSkills.map(([label, skills]) => (
            <div key={label}>
              <h3 className="text-sm font-semibold">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{skills}</p>
            </div>
          ))}
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
              {role.positions && (
                <ul className="space-y-2 text-sm">
                  {role.positions.map((position) => (
                    <li key={position.title} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                      <span className="font-medium">{position.title}</span>
                      <span className="text-muted-foreground">{position.period}</span>
                    </li>
                  ))}
                </ul>
              )}
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
              {role.highlightGroups?.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-2 text-sm font-semibold">{group.title}</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
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
        scientific systems (1999 — 2013).
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
                <div className="text-left sm:text-right">
                  <p className="text-sm text-muted-foreground">{role.period}</p>
                  <p className="text-xs text-muted-foreground">{role.location}</p>
                </div>
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

      <Separator className="my-12" />
      <h2 className="mb-6 text-2xl font-bold">Media and Financial Experience</h2>
      <Card>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Rovi Corporation, Knight Ridder Digital, Associated Press, Thomson
            Grass Valley (Dubner Computer Systems), Tudor Investments, Knight
            Ridder Financial, Sony Electronics (Medical Division).
          </p>
        </CardContent>
      </Card>

      {/* Volunteer */}
      <Separator className="my-12" />
      <h2 className="mb-6 text-2xl font-bold">Volunteer</h2>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <CardTitle className="text-base">Web Development &amp; A11y Evaluations (Volunteer)</CardTitle>
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
              Accessibility evaluations for nonprofit and small-business websites;
              site updates plus type-checking and end-to-end testing added to CI.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Astro", "TypeScript", "Playwright"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
              ))}
            </div>
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
