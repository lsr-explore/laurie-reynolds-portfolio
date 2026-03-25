import Image from "next/image";

export function BioSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="mb-12 text-center font-sans text-4xl font-light md:text-5xl">
        About
      </h1>

      <div className="flex flex-col gap-12 md:flex-row md:items-start">
        {/* Profile photo */}
        <div className="flex-shrink-0">
          <Image
            src="/laurieprofile.jpeg"
            alt="Portrait photo of Laurie Reynolds"
            width={280}
            height={280}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Bio text */}
        <div className="space-y-4 text-muted-foreground">
          <p className="text-foreground text-lg font-medium">
            The first time I really understood what frontend engineering means, I
            was waking up before dawn to keep a live weather integration running
            for Good Morning America.
          </p>
          <p>
            Millions of viewers. No second chances. That was early in my
            career, but it set the tone for everything since — I build
            interfaces for moments where failure isn&apos;t abstract.
          </p>
          <p>
            At Thermo Fisher, I spent six years building FDA-regulated lab
            software. When King&apos;s College London used our systems during
            the 2012 Olympics for mass spectrometry testing, the UI I&apos;d
            built was part of that workflow. At Siemens, I developed imaging
            tools for the Sequoia ultrasound platform used in clinical
            diagnostics.
          </p>
          <p>
            Then I moved to Walmart, where I led frontend engineering for
            payment systems — EBT SNAP, WIC, PayPal, Affirm, credit cards —
            processing millions of transactions daily. I introduced
            accessibility tooling across a 1,000+ developer monorepo, ran
            workshops for 50 engineers, and shipped payment flows with zero
            blocker a11y bugs.
          </p>
          <p>
            Most recently, I volunteered with U.S. Digital Response to improve
            accessibility in government grant-finding tools, and I&apos;ve been
            exploring AI-assisted accessibility guidance through RAG prototypes.
          </p>
          <p>
            Across all of it — media, medical devices, retail, civic tech — the
            thread is the same: I&apos;m drawn to work where the people using
            the software really need it to work.
          </p>
        </div>
      </div>
    </section>
  );
}
