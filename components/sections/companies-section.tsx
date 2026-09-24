import Image from "next/image";
import { companies } from "@/lib/data";

export function CompaniesSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-sans text-3xl font-light md:text-4xl">
          Organizations I&apos;ve Worked With
        </h2>
        <ul className="mt-8 md:mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {companies.map((company) => (
            <li
              key={company.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-card p-4 text-center"
            >
              <div
                className="flex h-24 w-full items-center justify-center rounded-lg p-3"
                style={{ backgroundColor: company.logoBackground ?? "#ffffff" }}
              >
                <Image
                  src={company.logo}
                  alt=""
                  width={160}
                  height={72}
                  className="h-full w-full object-contain"
                  style={{ transform: `scale(${company.logoScale ?? 1})` }}
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {company.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
