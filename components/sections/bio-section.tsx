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
            I&apos;ve spent my career building software in environments where accuracy,
            usability, and reliability matter.  Early in my career, that included supporting
            a live weather integration used during ABC&apos;s Good Morning America broadcasts.
            Later, I moved into medical imaging, regulated laboratory software, high-volume 
            payments, and civic technology.
          </p>
          <p>
            At Thermo Fisher, I led development of laboratory applications used 
            in regulated scientific workflows.  At Siemens, I built imaging and
            visualization software for the Sequoia ultrasound platform.  These roles 
            taught me how much thoughtful interface design matters when users are 
            working with complex information.
          </p>
          <p>
            At Walmart, I returned fully to web application development and
            eventually led frontend engineering for payment experiences including 
            EBT SNAP, WIC, PayPal, Affirm, and credit cards.  I particularly
            enjoyed the work that crossed team boundaries: turning complicated 
            requirements into reusable components, improving accessibility and
            testing practices, and helping teams understand the complete customer journey.
          </p>
          <p>
            Across these roles, I've brought hands-on frontend engineering,
            systems thinking, and a practical approach to making complex software
            easier for people to use and teams to maintain.
          </p>
        
        </div>
      </div>
    </section>
  );
}
