export type GlanceItem = { label: string; value: string };

export type Decision = { title: string; paragraphs: string[] };

export type Section = { intro: string; items: string[] };

type StoryBase = {
  slug: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  /** Used on the /work index card and as the page meta description. */
  summary: string;
  technologies: string[];
};

export type PublishedStory = StoryBase & {
  status: "published";
  atAGlance: GlanceItem[];
  context: string[];
  problem: Section;
  responsibility: Section;
  decisions: Decision[];
  workflow: { intro: string; stagesLabel: string; stages: string[] };
  quality: Section;
  collaboration: string[];
  outcome: string[];
  learned: string[];
  related: { slug: string; title: string; blurb: string }[];
};

export type PlannedStory = StoryBase & { status: "planned" };

export type Story = PublishedStory | PlannedStory;

/** Order here is the order the cards appear on /work. */
export const stories: Story[] = [
  {
    slug: "walmart-payments",
    status: "published",
    title: "Unifying Payment UI Across Walmart.com",
    organization: "Walmart Global Tech",
    role: "Staff Front-End Software Engineer",
    period: "2019 — 2024",
    summary:
      "I designed and built a reusable React Wallet component that replaced separate payment form implementations across Walmart.com purchase flows. The shared system made payment behavior more consistent and reduced the effort required to support new payment methods in a high-volume, PCI-regulated environment.",
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Mock Service Worker",
      "Splunk",
    ],
    atAGlance: [
      { label: "Organization", value: "Walmart Global Tech" },
      { label: "Time period", value: "During my 2019 — 2024 Walmart tenure" },
      {
        label: "My role",
        value: "Staff Front-End Software Engineer and front-end technical lead",
      },
      {
        label: "Team",
        value:
          "Cross-functional payments team spanning web, mobile, backend, product, UX, and information security",
      },
      {
        label: "Users",
        value:
          "Walmart.com customers across Checkout, Walmart+ Membership, Buy Now, and Subscriptions",
      },
      {
        label: "Technologies",
        value: "React, TypeScript, GraphQL, Node.js, Mock Service Worker, Splunk",
      },
      {
        label: "Areas of focus",
        value:
          "Reusable front-end architecture, payment verification, accessibility, testing, reliability, and PCI DSS compliance",
      },
      {
        label: "Confidentiality",
        value:
          "Architecture and outcomes are described at a public, non-proprietary level",
      },
    ],
    context: [
      "Walmart.com supports payment methods with very different requirements, including credit cards, PayPal, Affirm, EBT SNAP, and WIC. Each method has its own fields, validation rules, third-party interactions, and compliance considerations. The same capabilities also had to work across several purchase experiences rather than in a single checkout page.",
      "When I joined the work, the main Checkout, Walmart+ Membership, Buy Now, and Subscriptions experiences each maintained a separate payment form implementation. A change to payment behavior could therefore require parallel work in several code paths, increasing duplication and the risk of inconsistent customer experiences.",
    ],
    problem: {
      intro:
        "The team needed a shared payment UI that could accommodate meaningful differences without turning into a collection of one-off conditions. It had to render the correct fields for the detected payment type, work in both side-panel and embedded layouts, and preserve the behavior of existing purchase flows while those flows migrated incrementally.",
      items: [
        "Multiple product surfaces with different layout and integration needs",
        "Existing implementations that could not all be replaced at once",
        "Payment-method-specific fields, validation, and verification behavior",
        "Third-party verification calls that could fail transiently",
        "Accessibility expectations across keyboard, screen-reader, validation, and error states",
        "PCI DSS and information-security requirements across web and mobile",
        "High transaction volume and the need to avoid regressions during rollout",
      ],
    },
    responsibility: {
      intro:
        "I owned the front-end technical design and primary React implementation of the shared Wallet component. I was responsible for making the component configurable enough to serve several purchase flows while keeping payment-specific behavior understandable and testable.",
      items: [
        "Designed the component architecture and public configuration interfaces",
        "Built card-type-aware form rendering and multiple layout modes",
        "Implemented third-party payment verification with retry handling for transient failures",
        "Worked with partner teams to migrate existing flows without requiring a single high-risk cutover",
        "Applied shift-left accessibility and automated testing practices to shared behavior",
        "Led information-security submissions for PCI compliance across web and mobile",
        "Supported rollout and production monitoring using operational telemetry",
      ],
    },
    decisions: [
      {
        title: "Separate shared behavior from surface configuration",
        paragraphs: [
          "I chose a configurable component model rather than creating another payment form for each purchase experience. The shared layer owned payment-method selection, field rendering, validation, and verification behavior. Each product surface supplied the configuration and layout context it needed.",
          "This preserved necessary differences between Checkout, Membership, Buy Now, and Subscriptions without copying core payment logic. It also created a single place to improve accessibility, error handling, and support for additional payment methods.",
        ],
      },
      {
        title: "Render fields from payment context",
        paragraphs: [
          "The component detected the relevant card or payment type and displayed only the fields required for that method. This reduced unnecessary input, kept the interface focused, and prevented each host application from reimplementing the same branching rules.",
          "The tradeoff was that the shared component needed explicit, well-tested interfaces for method-specific behavior. I favored clear configuration boundaries over hidden coupling to any one checkout flow.",
        ],
      },
      {
        title: "Treat transient verification failures as recoverable",
        paragraphs: [
          "Third-party verification can fail for reasons that do not reflect an invalid payment method. I added bounded retry behavior and clear recovery states so a temporary integration failure did not immediately become a dead end for the customer.",
          "Because payment actions are sensitive, recovery behavior had to remain predictable and avoid duplicate processing. Testing covered success, validation failure, retry, and terminal error paths.",
        ],
      },
    ],
    workflow: {
      intro:
        "At a high level, the front end coordinated a configurable payment experience across checkout surfaces while keeping transaction processing and verification behind service boundaries.",
      stagesLabel: "Responsibility",
      stages: [
        "A purchase surface initializes Wallet with its supported payment methods and layout configuration.",
        "Wallet identifies the selected method or detected card type and renders the required fields and validation.",
        "The front end coordinates verification through the established payment service boundary and applies bounded retry behavior for transient failures.",
        "The host purchase flow receives a consistent result and continues its existing order workflow.",
        "Tests and operational telemetry help detect regressions as additional surfaces adopt the shared component.",
      ],
    },
    quality: {
      intro:
        "A shared payment component concentrates both risk and opportunity: a defect can affect several experiences, but one well-tested fix can improve all of them. I treated accessibility, error recovery, and test coverage as part of the component contract rather than as follow-up work.",
      items: [
        "Consistent labels, instructions, focus behavior, and validation messaging across payment methods",
        "Keyboard and screen-reader behavior considered in shared interaction patterns",
        "Automated component and integration testing, including mocked service responses",
        "Coverage for alternate layouts, payment types, verification failures, retries, and recovery states",
        "Production monitoring to support rollout and diagnose payment issues",
        "Information-security review and PCI DSS audit support for web and mobile",
      ],
    },
    collaboration: [
      "The work crossed product boundaries, so the technical design alone was not enough. I worked with the teams responsible for the adopting purchase flows, backend payment services, mobile clients, UX, product, and information security. I used the component interfaces and migration plan to make assumptions visible, resolve differences between flows, and let teams adopt the shared implementation without coordinating a single release.",
    ],
    outcome: [
      "The Wallet component replaced four separate payment form implementations and became the shared payment UI across Walmart.com purchase flows. It reduced duplicated front-end logic and made later payment-method work more reusable because teams no longer had to implement the same behavior independently in each surface.",
      "The component supported millions of daily checkouts. Its retry and recovery behavior reduced the impact of transient verification failures, and the broader implementation passed PCI audit without blocker findings.",
    ],
    learned: [
      "The most durable part of this work was not a specific component API; it was the decision to define which variation belonged in configuration and which behavior had to remain shared. I would preserve the incremental migration model and the emphasis on testable boundaries. With newer platform capabilities, I would also explore stronger contract testing and more granular observability around each payment-method adapter while keeping sensitive data out of logs.",
    ],
    related: [
      {
        slug: "wic",
        title: "Bringing WIC Benefits Online",
        blurb:
          "A related example of extending the shared payments platform to support a regulated payment method with item-level eligibility and split tender.",
      },
    ],
  },
  {
    slug: "wic",
    status: "published",
    title: "Bringing WIC Benefits Online",
    organization: "Walmart Global Tech",
    role: "Staff Front-End Software Engineer",
    period: "2019 — 2024",
    summary:
      "I led the front-end integration that enabled WIC participants to use eligible benefits in Walmart's online grocery checkout. The work combined a regulated payment flow, item-level eligibility, and split tender within an existing checkout system while maintaining clear and accessible customer guidance.",
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Accessibility",
      "Split-tender payments",
    ],
    atAGlance: [
      { label: "Organization", value: "Walmart Global Tech" },
      { label: "Time period", value: "During my 2019 — 2024 Walmart tenure" },
      {
        label: "My role",
        value:
          "Staff Front-End Software Engineer and front-end integration lead",
      },
      {
        label: "Team",
        value:
          "Cross-functional team spanning checkout, payments, backend services, product, accessibility, and external program stakeholders",
      },
      {
        label: "Users",
        value: "WIC participants purchasing groceries online through Walmart",
      },
      {
        label: "Technologies",
        value: "React, TypeScript, GraphQL, Node.js, automated front-end testing",
      },
      {
        label: "Areas of focus",
        value:
          "Regulated payments, item eligibility, split tender, accessibility, testing, and incremental integration",
      },
      {
        label: "Confidentiality",
        value:
          "Program details and architecture are described at a public, non-proprietary level",
      },
    ],
    context: [
      "The Special Supplemental Nutrition Program for Women, Infants, and Children provides nutrition assistance to eligible families. WIC purchases had historically required an in-store transaction. Walmart partnered with state agencies on an early pilot that brought WIC payment into online grocery ordering.",
      "The change was more involved than adding another card entry form. Customers needed to understand which items qualified for their available benefits, apply WIC to the eligible portion of an order, and use another payment method for any remaining balance.",
    ],
    problem: {
      intro:
        "WIC eligibility rules are strict and can vary by state. The online experience had to communicate program rules clearly without requiring customers to understand the underlying payment architecture. It also had to fit within an established checkout system that already supported other tenders and order states.",
      items: [
        "State-specific eligibility and program requirements",
        "Item-level status that could affect how a mixed cart was paid",
        "Split tender across WIC benefits and another payment method",
        "An existing checkout architecture with established payment sequencing",
        "Accessible status, validation, and error messaging",
        "Coordination with backend services, product teams, and state program stakeholders",
        "A pilot rollout that needed to support later expansion without overgeneralizing too early",
      ],
    },
    responsibility: {
      intro:
        "I led the web front-end integration of WIC as a payment method. My responsibility covered the customer-facing flow and its integration with the existing checkout and payments architecture; backend benefit processing and state program decisions remained with their respective teams and stakeholders.",
      items: [
        "Built the WIC card entry and validation experience",
        "Added item-level eligibility indicators so customers could understand how benefits applied to their cart",
        "Integrated split-tender behavior so WIC and another payment method could be used in one transaction",
        "Defined front-end states for eligibility, validation, partial coverage, errors, and recovery",
        "Worked with backend, product, and state agency stakeholders to translate program rules into a usable checkout flow",
        "Applied the payments team's shift-left accessibility and automated testing practices",
        "Supported pilot rollout and the path to subsequent state implementations",
      ],
    },
    decisions: [
      {
        title: "Explain eligibility where customers make decisions",
        paragraphs: [
          "Eligibility affected individual items, so a payment-only message at the end of checkout would have been too late and too abstract. I integrated item-level indicators into the cart experience and connected them to the payment flow.",
          "This gave customers earlier feedback about which products could be covered and reduced the surprise of learning about an ineligible item only after entering payment information.",
        ],
      },
      {
        title: "Make split tender a guided sequence",
        paragraphs: [
          "A mixed cart required the system to apply WIC benefits to eligible items and then collect another payment method for the remaining amount. I treated this as a guided sequence with explicit states rather than exposing the underlying transaction complexity to the customer.",
          "The tradeoff was additional state management in checkout. Clear boundaries between eligibility, WIC application, remaining balance, and final confirmation made that complexity easier to test and reason about.",
        ],
      },
      {
        title: "Build compliance and accessibility into the flow",
        paragraphs: [
          "Program rules, customer comprehension, and accessibility were closely related. Status could not rely on color alone, validation had to explain what the customer could do next, and focus needed to move predictably as payment states changed.",
          "I applied the same shift-left practices used across the payments team: accessible interaction design, automated checks, integration tests, and review of error and recovery states before rollout.",
        ],
      },
    ],
    workflow: {
      intro:
        "The public-facing flow can be summarized without exposing proprietary services:",
      stagesLabel: "Customer and system behavior",
      stages: [
        "The cart receives item-level eligibility information and presents it in a customer-readable form.",
        "The customer selects WIC and enters the information required to validate the benefit card.",
        "Checkout applies available WIC benefits to eligible items and shows the remaining amount.",
        "The customer supplies another payment method when the order includes a remaining balance.",
        "Checkout confirms the combined payment result and provides clear recovery paths when a step cannot be completed.",
      ],
    },
    quality: {
      intro:
        "This flow served customers who might already be navigating a complex program and a mixed cart. Accessibility and plain feedback were essential to making the new capability usable, not simply compliant.",
      items: [
        "Item eligibility communicated with text rather than color alone",
        "Program and validation messages written to explain status and next action",
        "Predictable keyboard and focus behavior as payment states changed",
        "Screen-reader-friendly labels, status updates, and error associations",
        "Automated accessibility checks alongside unit and integration coverage",
        "Testing for eligible, partially eligible, and ineligible carts; remaining balances; validation errors; and recovery paths",
      ],
    },
    collaboration: [
      "The front end sat at the intersection of program policy, checkout behavior, and payment processing. I worked with backend engineers and product partners to turn eligibility and split-tender rules into explicit interface states. I also collaborated with state agency stakeholders to validate that the customer experience reflected program requirements while remaining understandable within Walmart's existing checkout patterns.",
      "When requirements crossed organizational boundaries, I used concrete workflow states and edge cases to expose ambiguity early. This helped the team distinguish policy decisions from technical implementation choices and gave engineering and product a common basis for review.",
    ],
    outcome: [
      "The pilot launched successfully and enabled WIC participants to use their benefits for online grocery orders at Walmart. That expanded access for customers who might face transportation, mobility, scheduling, or caregiving barriers to shopping in a store.",
      "The implementation also established a reusable reference for subsequent state rollouts. It demonstrated that item-level eligibility and split tender could be integrated into the existing online checkout while meeting program and accessibility requirements.",
    ],
    learned: [
      "The project reinforced that regulated experiences work best when policy is translated into visible, testable states. I would preserve the early focus on edge cases, accessibility, and collaboration with program stakeholders. For future rollouts, I would continue to strengthen configuration and contract testing around state variation while resisting abstractions that hide meaningful policy differences.",
    ],
    related: [
      {
        slug: "walmart-payments",
        title: "Unifying Payment UI Across Walmart.com",
        blurb:
          "The shared Wallet architecture that reduced duplication across checkout experiences and made payment-method integrations more consistent.",
      },
    ],
  },
  {
    slug: "sequoia-dual-imaging",
    status: "planned",
    title: "Dual Imaging for the Sequoia Ultrasound Platform",
    organization: "Siemens Medical Solutions (Acuson)",
    role: "Senior Software Engineer",
    period: "5 years",
    summary:
      "The Siemens Sequoia was a high-end diagnostic ultrasound system used in cardiology, radiology, and obstetrics. Clinicians needed the ability to view two imaging modes simultaneously — for example, a real-time 2D image alongside a Doppler waveform — to make faster, more informed diagnostic decisions without switching between views.",
    technologies: [
      "C++",
      "Medical imaging",
      "Real-time systems",
      "FDA regulated",
    ],
  },
];

export const publishedStories = stories.filter(
  (story): story is PublishedStory => story.status === "published"
);

export function getStory(slug: string): PublishedStory | undefined {
  return publishedStories.find((story) => story.slug === slug);
}
