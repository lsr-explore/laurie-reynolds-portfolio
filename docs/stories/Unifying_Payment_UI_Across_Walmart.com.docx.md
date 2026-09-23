# **Unifying Payment UI Across Walmart.com**

**Walmart Global Tech | Staff Front-End Software Engineer | 2019-2024**

I designed and built a reusable React Wallet component that replaced separate payment form implementations across Walmart.com purchase flows. The shared system made payment behavior more consistent and reduced the effort required to support new payment methods in a high-volume, PCI-regulated environment.

# **At a glance**

| Organization | Walmart Global Tech |
| :---- | :---- |
| **Time period** | During my 2019-2024 Walmart tenure |
| **My role** | Staff Front-End Software Engineer and frontend technical lead |
| **Team** | Cross-functional payments team spanning web, mobile, backend, product, UX, and information security |
| **Users** | Walmart.com customers across Checkout, Walmart+ Membership, Buy Now, and Subscriptions |
| **Technologies** | React, TypeScript, GraphQL, Node.js, Mock Service Worker, Splunk |
| **Areas of focus** | Reusable frontend architecture, payment verification, accessibility, testing, reliability, and PCI DSS compliance |
| **Confidentiality** | Architecture and outcomes are described at a public, non-proprietary level |

# **The context**

Walmart.com supports payment methods with very different requirements, including credit cards, PayPal, Affirm, EBT SNAP, and WIC. Each method has its own fields, validation rules, third-party interactions, and compliance considerations. The same capabilities also had to work across several purchase experiences rather than in a single checkout page.

When I joined the work, the main Checkout, Walmart+ Membership, Buy Now, and Subscriptions experiences each maintained a separate payment form implementation. A change to payment behavior could therefore require parallel work in several code paths, increasing duplication and the risk of inconsistent customer experiences.

# **The problem**

The team needed a shared payment UI that could accommodate meaningful differences without turning into a collection of one-off conditions. It had to render the correct fields for the detected payment type, work in both side-panel and embedded layouts, and preserve the behavior of existing purchase flows while those flows migrated incrementally.

•  Multiple product surfaces with different layout and integration needs

•  Existing implementations that could not all be replaced at once

•  Payment-method-specific fields, validation, and verification behavior

•  Third-party verification calls that could fail transiently

•  Accessibility expectations across keyboard, screen-reader, validation, and error states

•  PCI DSS and information-security requirements across web and mobile

•  High transaction volume and the need to avoid regressions during rollout

# **My responsibility**

I owned the frontend technical design and primary React implementation of the shared Wallet component. I was responsible for making the component configurable enough to serve several purchase flows while keeping payment-specific behavior understandable and testable.

•  Designed the component architecture and public configuration interfaces

•  Built card-type-aware form rendering and multiple layout modes

•  Implemented third-party payment verification with retry handling for transient failures

•  Worked with partner teams to migrate existing flows without requiring a single high-risk cutover

•  Applied shift-left accessibility and automated testing practices to shared behavior

•  Led information-security submissions for PCI compliance across web and mobile

•  Supported rollout and production monitoring using operational telemetry

# **How I approached it**

## **Decision 1  Separate shared behavior from surface configuration**

I chose a configurable component model rather than creating another payment form for each purchase experience. The shared layer owned payment-method selection, field rendering, validation, and verification behavior. Each product surface supplied the configuration and layout context it needed.

This preserved necessary differences between Checkout, Membership, Buy Now, and Subscriptions without copying core payment logic. It also created a single place to improve accessibility, error handling, and support for additional payment methods.

## **Decision 2  Render fields from payment context**

The component detected the relevant card or payment type and displayed only the fields required for that method. This reduced unnecessary input, kept the interface focused, and prevented each host application from reimplementing the same branching rules.

The tradeoff was that the shared component needed explicit, well-tested interfaces for method-specific behavior. I favored clear configuration boundaries over hidden coupling to any one checkout flow.

## **Decision 3  Treat transient verification failures as recoverable**

Third-party verification can fail for reasons that do not reflect an invalid payment method. I added bounded retry behavior and clear recovery states so a temporary integration failure did not immediately become a dead end for the customer.

Because payment actions are sensitive, recovery behavior had to remain predictable and avoid duplicate processing. Testing covered success, validation failure, retry, and terminal error paths.

# **Architecture and workflow**

At a high level, the frontend coordinated a configurable payment experience across checkout surfaces while keeping transaction processing and verification behind service boundaries.

| Stage | Responsibility |
| :---: | :---- |
| **1** | A purchase surface initializes Wallet with its supported payment methods and layout configuration. |
| **2** | Wallet identifies the selected method or detected card type and renders the required fields and validation. |
| **3** | The frontend coordinates verification through the established payment service boundary and applies bounded retry behavior for transient failures. |
| **4** | The host purchase flow receives a consistent result and continues its existing order workflow. |
| **5** | Tests and operational telemetry help detect regressions as additional surfaces adopt the shared component. |

# **Accessibility and quality**

A shared payment component concentrates both risk and opportunity: a defect can affect several experiences, but one well-tested fix can improve all of them. I treated accessibility, error recovery, and test coverage as part of the component contract rather than as follow-up work.

•  Consistent labels, instructions, focus behavior, and validation messaging across payment methods

•  Keyboard and screen-reader behavior considered in shared interaction patterns

•  Automated component and integration testing, including mocked service responses

•  Coverage for alternate layouts, payment types, verification failures, retries, and recovery states

•  Production monitoring to support rollout and diagnose payment issues

•  Information-security review and PCI DSS audit support for web and mobile

# **Collaboration**

The work crossed product boundaries, so the technical design alone was not enough. I worked with the teams responsible for the adopting purchase flows, backend payment services, mobile clients, UX, product, and information security. I used the component interfaces and migration plan to make assumptions visible, resolve differences between flows, and let teams adopt the shared implementation without coordinating a single release.

# **Outcome**

The Wallet component replaced four separate payment form implementations and became the shared payment UI across Walmart.com purchase flows. It reduced duplicated frontend logic and made later payment-method work more reusable because teams no longer had to implement the same behavior independently in each surface.

The component supported millions of daily checkouts. Its retry and recovery behavior reduced the impact of transient verification failures, and the broader implementation passed PCI audit without blocker findings.

# **What I learned**

The most durable part of this work was not a specific component API; it was the decision to define which variation belonged in configuration and which behavior had to remain shared. I would preserve the incremental migration model and the emphasis on testable boundaries. With newer platform capabilities, I would also explore stronger contract testing and more granular observability around each payment-method adapter while keeping sensitive data out of logs.

# **Related experience**

Bringing WIC Benefits Online is a related example of extending the shared payments platform to support a regulated payment method with item-level eligibility and split tender.