import Image from "next/image";

export function BioSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="mb-12 text-center font-sans text-4xl font-bold md:text-5xl">
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
          <p>
            I&apos;m a senior frontend engineer focused on building secure,
            accessible, and scalable web systems.
          </p>
          <p>
            For more than three decades, I&apos;ve worked across enterprise,
            public sector, and high-volume transaction platforms, bringing
            structure, clarity, and long-term thinking to complex engineering
            challenges.
          </p>
          <p>
            Over the years, I&apos;ve supported systems operating in moments
            that mattered.
          </p>
          <p>
            Early in my career, I found myself waking before dawn to support a
            live weather integration for Good Morning America, learning
            firsthand what reliability means when millions of viewers are
            watching.
          </p>
          <p>
            At Thermo Fisher, I supported King&apos;s College London during the
            2012 Olympics as they onboarded mass spectrometry systems powered by
            our software.
          </p>
          <p>
            At Walmart Global Tech, I led the web integration of a pilot program
            to support using Women Infant and Children (WIC) benefit card to pay
            for goods online.
          </p>
          <p>
            These experiences shaped how I approach engineering: calm under
            pressure, structured in complexity, and deeply aware that real people
            depend on the systems we build.
          </p>
        </div>
      </div>
    </section>
  );
}
