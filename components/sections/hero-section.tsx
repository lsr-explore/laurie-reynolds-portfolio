"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Text */}
        <div className="flex-1 space-y-6">
          <h1 className="font-sans text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Building frontend systems for complex, high-impact applications
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            I&apos;m a Senior Frontend Engineer with experience building payment systems,
            regulated medical software, and civic technology. My work emphasizes
            accessible interfaces, reliable systems, and reusable frontend architecture.
          </p>
          <p>
            I&apos;m currently interested in senior frontend and frontend platform roles
            where I can remain hands-on while helping teams improve architecture,
            accessibility, testing, and delivery.
          </p>
          <div className="flex gap-4">
            <a
              href="/work"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              View my work
            </a>
            <a
              href="https://www.linkedin.com/in/lauriesreynolds"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Connect
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1">
          <Image
            src="/pexels-hudson-mcdonald-692563691-28209792.jpg"
            alt="People walking along a sandy beach at sunset with waves and mountains in the background"
            width={600}
            height={750}
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
