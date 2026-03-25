import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BackToTopButton } from "./back-to-top-button";

export const metadata: Metadata = {
  title: "Work | Laurie Reynolds",
  description:
    "Selected projects and case studies from Laurie Reynolds — frontend systems for payments, healthcare, and medical imaging.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="mb-4 text-center font-sans text-4xl font-light md:text-5xl">
        Work
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        A closer look at projects where I shaped the frontend architecture,
        solved hard problems, and delivered systems people depend on.
      </p>

      {/* Navigation cards */}
      <nav aria-label="Case studies" className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <a href="#wallet">
          <Card className="transition-shadow hover:shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-base">Unifying Payment UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Walmart Global Tech</p>
            </CardContent>
          </Card>
        </a>
        <a href="#wic">
          <Card className="transition-shadow hover:shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-base">Bringing WIC Benefits Online</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Walmart Global Tech</p>
            </CardContent>
          </Card>
        </a>
        <a href="#sequoia">
          <Card className="transition-shadow hover:shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-base">Dual Imaging for Sequoia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Siemens Medical Solutions</p>
            </CardContent>
          </Card>
        </a>
      </nav>

      {/* Story 1: Walmart Wallet */}
      <article id="wallet" className="scroll-mt-24">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">
            Unifying Payment UI Across Walmart.com
          </h2>
          <p className="mt-1 text-sm text-primary">
            Walmart Global Tech &middot; Staff Front-End Software Engineer
            &middot; 2019 — 2024
          </p>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Context
            </h3>
            <p>
              Walmart.com supports multiple payment methods — credit cards,
              PayPal, Affirm, EBT SNAP, and WIC — each with different
              validation rules, third-party integrations, and compliance
              requirements. When I joined, each checkout surface (main
              Checkout, W+ Membership, Buy Now, Subscriptions) maintained its
              own payment form implementation. This meant duplicated logic,
              inconsistent behavior, and a high cost for every new payment
              method rollout.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Challenge
            </h3>
            <p>
              The payment form needed to dynamically render the correct fields
              based on detected card type, support both side-panel and embedded
              layouts, handle third-party verification with resilient retry
              logic, and meet PCI DSS compliance — all without breaking any of
              the existing flows during migration.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              What I Did
            </h3>
            <p>
              I designed and built a reusable React Wallet component that
              abstracted payment method selection, form rendering, and
              verification into a single, configurable system. The component
              was card-type-aware — it detected the payment method and
              rendered only the required fields — and supported multiple
              layout modes without duplicating UI logic. I implemented
              third-party payment verification with retry logic to reduce
              transient failures and improve transaction reliability. I also
              led the InfoSec submissions for PCI compliance across web and
              mobile.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Outcome
            </h3>
            <p>
              The unified Wallet component replaced four separate
              implementations, significantly reducing code duplication and the
              time required to roll out new payment methods. It served
              millions of daily checkouts across all Walmart.com purchase
              flows. The resilient verification logic reduced transient
              payment failures, and the system passed PCI audit with no
              blocker findings.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {[
            "React",
            "TypeScript",
            "GraphQL",
            "Node.js",
            "PCI DSS",
            "A/B Experimentation",
            "Mock Service Worker",
            "Splunk",
          ].map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </article>

      <Separator className="my-16" />

      {/* Story 2: WIC */}
      <article id="wic" className="scroll-mt-24">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">
            Bringing WIC Benefits Online
          </h2>
          <p className="mt-1 text-sm text-primary">
            Walmart Global Tech &middot; Staff Front-End Software Engineer
            &middot; 2019 — 2024
          </p>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Context
            </h3>
            <p>
              The Women, Infants, and Children (WIC) program provides nutrition
              assistance to millions of families. Historically, WIC benefits
              could only be redeemed in physical stores. Walmart partnered with
              state agencies to pilot online WIC payment — one of the first
              implementations of its kind for a major retailer.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Challenge
            </h3>
            <p>
              WIC has strict rules about which items are eligible, and
              eligibility varies by state. The checkout UI needed to clearly
              communicate which cart items were WIC-eligible, handle split
              payment (WIC for eligible items, another method for the rest),
              and meet both federal program requirements and
              Walmart&apos;s accessibility standards — all within the existing
              checkout architecture.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              What I Did
            </h3>
            <p>
              I led the frontend integration of WIC as a payment method in the
              web checkout flow. This included building UI for WIC card entry
              and validation, item-level eligibility indicators in the cart,
              and split-tender payment logic that allowed WIC to be combined
              with other payment methods in a single transaction. I worked
              closely with backend, product, and state agency stakeholders to
              ensure the implementation met program compliance requirements. I
              also ensured the entire flow was accessible, following the same
              shift-left testing practices I&apos;d established for the
              broader payments team.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Outcome
            </h3>
            <p>
              The pilot successfully launched, enabling WIC recipients to use
              their benefits for online grocery orders at Walmart — expanding
              access for families who may face transportation barriers or
              mobility challenges. The implementation became a reference for
              subsequent state rollouts.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Accessibility",
            "Split-Tender Payments",
            "Cross-Team Collaboration",
          ].map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </article>

      <Separator className="my-16" />

      {/* Story 3: Siemens Dual Imaging (stub) */}
      <article id="sequoia" className="scroll-mt-24">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">
            Dual Imaging for the Sequoia Ultrasound Platform
          </h2>
          <p className="mt-1 text-sm text-primary">
            Siemens Medical Solutions (Acuson) &middot; Senior Software
            Engineer &middot; 5 years
          </p>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Context
            </h3>
            <p>
              The Siemens Sequoia was a high-end diagnostic ultrasound system
              used in cardiology, radiology, and obstetrics. Clinicians needed
              the ability to view two imaging modes simultaneously — for
              example, a real-time 2D image alongside a Doppler waveform — to
              make faster, more informed diagnostic decisions without
              switching between views.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Challenge
            </h3>
            <p className="italic">
              Details coming soon.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              What I Did
            </h3>
            <p className="italic">
              Details coming soon.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Outcome
            </h3>
            <p className="italic">
              Details coming soon.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {[
            "C++",
            "Medical Imaging",
            "Real-Time Systems",
            "Ultrasound",
            "FDA Regulated",
          ].map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </article>

      <BackToTopButton />
    </section>
  );
}
