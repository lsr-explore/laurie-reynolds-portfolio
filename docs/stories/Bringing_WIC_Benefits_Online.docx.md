# **Bringing WIC Benefits Online**

**Walmart Global Tech | Staff Front-End Software Engineer | 2019-2024**

I led the frontend integration that enabled WIC participants to use eligible benefits in Walmart's online grocery checkout. The work combined a regulated payment flow, item-level eligibility, and split tender within an existing checkout system while maintaining clear and accessible customer guidance.

# **At a glance**

| Organization | Walmart Global Tech |
| :---- | :---- |
| **Time period** | During my 2019-2024 Walmart tenure |
| **My role** | Staff Front-End Software Engineer and frontend integration lead |
| **Team** | Cross-functional team spanning checkout, payments, backend services, product, accessibility, and external program stakeholders |
| **Users** | WIC participants purchasing groceries online through Walmart |
| **Technologies** | React, TypeScript, GraphQL, Node.js, automated frontend testing |
| **Areas of focus** | Regulated payments, item eligibility, split tender, accessibility, testing, and incremental integration |
| **Confidentiality** | Program details and architecture are described at a public, non-proprietary level |

# **The context**

The Special Supplemental Nutrition Program for Women, Infants, and Children provides nutrition assistance to eligible families. WIC purchases had historically required an in-store transaction. Walmart partnered with state agencies on an early pilot that brought WIC payment into online grocery ordering.

The change was more involved than adding another card entry form. Customers needed to understand which items qualified for their available benefits, apply WIC to the eligible portion of an order, and use another payment method for any remaining balance.

# **The problem**

WIC eligibility rules are strict and can vary by state. The online experience had to communicate program rules clearly without requiring customers to understand the underlying payment architecture. It also had to fit within an established checkout system that already supported other tenders and order states.

•  State-specific eligibility and program requirements

•  Item-level status that could affect how a mixed cart was paid

•  Split tender across WIC benefits and another payment method

•  An existing checkout architecture with established payment sequencing

•  Accessible status, validation, and error messaging

•  Coordination with backend services, product teams, and state program stakeholders

•  A pilot rollout that needed to support later expansion without overgeneralizing too early

# **My responsibility**

I led the web frontend integration of WIC as a payment method. My responsibility covered the customer-facing flow and its integration with the existing checkout and payments architecture; backend benefit processing and state program decisions remained with their respective teams and stakeholders.

•  Built the WIC card entry and validation experience

•  Added item-level eligibility indicators so customers could understand how benefits applied to their cart

•  Integrated split-tender behavior so WIC and another payment method could be used in one transaction

•  Defined frontend states for eligibility, validation, partial coverage, errors, and recovery

•  Worked with backend, product, and state agency stakeholders to translate program rules into a usable checkout flow

•  Applied the payments team's shift-left accessibility and automated testing practices

•  Supported pilot rollout and the path to subsequent state implementations

# **How I approached it**

## **Decision 1  Explain eligibility where customers make decisions**

Eligibility affected individual items, so a payment-only message at the end of checkout would have been too late and too abstract. I integrated item-level indicators into the cart experience and connected them to the payment flow.

This gave customers earlier feedback about which products could be covered and reduced the surprise of learning about an ineligible item only after entering payment information.

## **Decision 2  Make split tender a guided sequence**

A mixed cart required the system to apply WIC benefits to eligible items and then collect another payment method for the remaining amount. I treated this as a guided sequence with explicit states rather than exposing the underlying transaction complexity to the customer.

The tradeoff was additional state management in checkout. Clear boundaries between eligibility, WIC application, remaining balance, and final confirmation made that complexity easier to test and reason about.

## **Decision 3  Build compliance and accessibility into the flow**

Program rules, customer comprehension, and accessibility were closely related. Status could not rely on color alone, validation had to explain what the customer could do next, and focus needed to move predictably as payment states changed.

I applied the same shift-left practices used across the payments team: accessible interaction design, automated checks, integration tests, and review of error and recovery states before rollout.

# **Architecture and workflow**

The public-facing flow can be summarized without exposing proprietary services:

| Stage | Customer and system behavior |
| ----- | :---- |
| **1** | The cart receives item-level eligibility information and presents it in a customer-readable form. |
| **2** | The customer selects WIC and enters the information required to validate the benefit card. |
| **3** | Checkout applies available WIC benefits to eligible items and shows the remaining amount. |
| **4** | The customer supplies another payment method when the order includes a remaining balance. |
| **5** | Checkout confirms the combined payment result and provides clear recovery paths when a step cannot be completed. |

# **Accessibility and quality**

This flow served customers who might already be navigating a complex program and a mixed cart. Accessibility and plain feedback were essential to making the new capability usable, not simply compliant.

•  Item eligibility communicated with text rather than color alone

•  Program and validation messages written to explain status and next action

•  Predictable keyboard and focus behavior as payment states changed

•  Screen-reader-friendly labels, status updates, and error associations

•  Automated accessibility checks alongside unit and integration coverage

•  Testing for eligible, partially eligible, and ineligible carts; remaining balances; validation errors; and recovery paths

# **Collaboration**

The frontend sat at the intersection of program policy, checkout behavior, and payment processing. I worked with backend engineers and product partners to turn eligibility and split-tender rules into explicit interface states. I also collaborated with state agency stakeholders to validate that the customer experience reflected program requirements while remaining understandable within Walmart's existing checkout patterns.

When requirements crossed organizational boundaries, I used concrete workflow states and edge cases to expose ambiguity early. This helped the team distinguish policy decisions from technical implementation choices and gave engineering and product a common basis for review.

# **Outcome**

The pilot launched successfully and enabled WIC participants to use their benefits for online grocery orders at Walmart. That expanded access for customers who might face transportation, mobility, scheduling, or caregiving barriers to shopping in a store.

The implementation also established a reusable reference for subsequent state rollouts. It demonstrated that item-level eligibility and split tender could be integrated into the existing online checkout while meeting program and accessibility requirements.

# **What I learned**

The project reinforced that regulated experiences work best when policy is translated into visible, testable states. I would preserve the early focus on edge cases, accessibility, and collaboration with program stakeholders. For future rollouts, I would continue to strengthen configuration and contract testing around state variation while resisting abstractions that hide meaningful policy differences.

# **Related experience**

Unifying Payment UI Across Walmart.com describes the shared Wallet architecture that reduced duplication across checkout experiences and made payment-method integrations more consistent.