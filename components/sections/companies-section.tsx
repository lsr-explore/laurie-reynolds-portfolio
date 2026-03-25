import { Separator } from "@/components/ui/separator";
import { companies } from "@/lib/data";

export function CompaniesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Separator className="mb-12" />
        <h2 className="text-center font-sans text-3xl font-light md:text-4xl">
          Companies I&apos;ve Worked With
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((company) => (
            <span
              key={company}
              className="text-lg font-medium text-muted-foreground"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
