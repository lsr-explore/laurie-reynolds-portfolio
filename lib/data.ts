export const impactCards = [
  {
    title: "Commerce and Payments",
    description:
      "Led front-end development for Walmart.com payment experiences including EBT SNAP, WIC, PayPal, Affirm, and credit cards.",
  },
  {
    title: "Regulated Scientific and Medical Software",
    description:
      "Built laboratory and medical-imaging applications for regulated and clinically complex environments.",
  },
  {
    title: "Accessibility at Scale",
    description:
      "Developed reusable architecture, accessibility tooling, testing practices, and production safeguards used across teams.",
  },
];

// Only branded tools have logos; concepts and standards retain text labels.
export const skillLogos: Readonly<Record<string, string>> = {
  "TypeScript": "/logos/skills/typescript.svg",
  "JavaScript (ES6+)": "/logos/skills/javascript.svg",
  "React": "/logos/skills/react.svg",
  "Next.js": "/logos/skills/nextdotjs.svg",
  "Vue": "/logos/skills/vuedotjs.svg",
  "GraphQL": "/logos/skills/graphql.svg",
  "Tailwind CSS": "/logos/skills/tailwindcss.svg",
  "D3.js": "/logos/skills/d3dotjs.svg",
  "Vitest": "/logos/skills/vitest.svg",
  "Jest": "/logos/skills/jest.svg",
  "Playwright": "/logos/skills/playwright.svg",
  "React Testing Library": "/logos/skills/testinglibrary.svg",
  "Mock Service Worker": "/logos/skills/mockserviceworker.svg",
  "Node": "/logos/skills/nodedotjs.svg",
  "Docker": "/logos/skills/docker.svg",
  "Vercel": "/logos/skills/vercel.svg",
  "Splunk": "/logos/skills/splunk.svg",
  "OpenAI API": "/logos/skills/openai.svg",
  "eslint-plugin-jsx-a11y": "/logos/skills/eslint.svg",
};

export const skillCategories = [
  {
    label: "Front-End",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Vue",
      "GraphQL",
      "Tailwind CSS",
      "D3.js",
    ],
  },
  {
    label: "Architecture",
    skills: [
      "Design systems",
      "reusable components",
      "server rendering",
      "performance"
    ]
  },
  {
    label: "Quality",
    skills: [
      "Vitest",
      "Jest",
      "Playwright",
      "React Testing Library",
      "Mock Service Worker",
    ],
  },
  {
    label: "Accessibility",
    skills: [
      "WCAG",
      "ARIA",
      "axe DevTools",
      "eslint-plugin-jsx-a11y"
    ]
  },
  {
    label: "Platform & operations",
    skills: [
      "Node",
      "CI/CD", 
      "Docker", 
      "Vercel", 
      "Splunk"
    ]
  },
  {
    label: "Applied AI",
    skills: [
      "OpenAI API", 
      "RAG",
      "structured retrieval",
      "AI evaluation"
    ]
  },
];

export const companies = [
  {
    name: "Walmart Global Tech",
    logo: "/logos/companies/walmart-global-tech.svg",
    logoBackground: "#041e41",
  },
  {
    name: "U.S. Digital Response",
    logo: "/logos/companies/us-digital-response.svg",
  },
  {
    name: "[24]7.ai",
    logo: "/logos/companies/247-ai.svg",
  },
  {
    name: "Kofile",
    logo: "/logos/companies/kofile.svg",
    logoBackground: "#193b34",
  },
  {
    name: "Thermo Fisher Scientific",
    logo: "/logos/companies/thermo-fisher.svg",
  },
  {
    name: "Siemens",
    logo: "/logos/companies/siemens.svg",
  },
  {
    name: "Nodality",
    logo: "/logos/companies/nodality.png",
  },
  {
    name: "Code for San Jose",
    logo: "/logos/companies/code-for-san-jose.png",
    logoScale: 1.3,
  },
  {
    name: "Sony",
    logo: "/logos/companies/sony.svg",
  },
  {
    name: "Associated Press",
    logo: "/logos/companies/associated-press.svg",
  },
  {
    name: "Nava PBC",
    logo: "/logos/companies/nava.svg",
  },
  {
    name: "Accessible Community",
    logo: "/logos/companies/accessible-community.svg",
  },
];

export const howIThinkCards = [
  {
    title: "Build quality into the work",
    description:
      "I've worked in environments where a checkout bug means lost revenue and a compliance miss means legal exposure. That taught me to treat quality as a feature, not a phase.",
    icon: "shield" as const,
  },
  {
    title: "Include accessibility from the beginning",
    description:
      "I'd rather catch a violation in a lint rule than discover it in a production audit. I've built accessibility tooling and automated checks, and shipped payment systems with zero blocker a11y bugs.",
    icon: "accessibility" as const,
  },
  {
    title: "Understand the complete workflow",
    description:
      "I look beyond the interface to understand the business rules, data flow, system dependencies, and operational constraints behind it. That broader view helps me make front-end decisions that work across the whole system.",
    icon: "workflow" as const,
  },
  {
    title: "Improve the systems around the code",
    description:
      "Whether it's refactoring a test suite to remove flaky mocks, strengthening automated checks, or writing incident response runbooks, I invest in the engineering practices that make software easier to change and operate.",
    icon: "iterate" as const,
  },
  {
    title: "Build shared understanding",
    description:
      "I help teams build shared context through workshops, documentation, and hands-on learning. I've led sessions on accessibility and design patterns, explained complex laboratory workflows, and created onboarding guides that help new team members contribute sooner.",
    icon: "collaboration" as const,
  }
];

export const inspirationImages = [
  {
    src: "/pexels-spolyakov-13217103.jpg",
    alt: "Venice canal with colorful buildings and boats",
  },
  {
    src: "/pexels-charles-parker-5845502.jpg",
    alt: "The Guggenheim Museum exterior architecture",
  },
  {
    src: "/pexels-grisha-besko-76503632-16373241.jpg",
    alt: "Person enjoying art in a museum",
  },
  {
    src: "/pexels-ella-olsson-572949-3026809.jpg",
    alt: "Freshly baked cake topped with sliced almonds",
  },
];
