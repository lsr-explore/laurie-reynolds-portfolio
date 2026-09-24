"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="page-container">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
        {/* Text */}
        <div className="min-w-0 space-y-6">
          <h1 className="font-sans text-4xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Building front-end systems for complex, high-impact applications
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            I&apos;m a Senior Front-End Engineer with experience building payment systems,
            regulated medical software, and civic technology. My work emphasizes
            accessible interfaces, reliable systems, and reusable front-end architecture.
          </p>
          <p>
            I&apos;m currently interested in senior front-end and front-end platform roles
            where I can remain hands-on while helping teams improve architecture,
            accessibility, testing, and delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              View my work
            </Link>
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
        <figure className="mx-auto w-full max-w-[600px] min-w-0">
          <Image
            src="/pexels-hudson-mcdonald-692563691-28209792.jpg"
            alt="People walking along a sandy beach at sunset with waves and mountains in the background"
            width={600}
            height={750}
            priority
            sizes="(min-width: 1152px) 520px, (min-width: 768px) 45vw, (min-width: 648px) 600px, calc(100vw - 48px)"
            className="block aspect-[4/5] h-auto w-full rounded-lg object-cover"
          />
          <figcaption className="mt-3 text-right text-sm leading-relaxed text-muted-foreground">
            Photo by <a className="underline" href="https://www.pexels.com/photo/aerial-view-of-people-at-the-beach-28209792/" target="_blank" rel="noopener noreferrer">Hudson McDonald</a> from Pexels
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
