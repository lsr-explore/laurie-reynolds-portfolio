import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { skillCategories, skillLogos } from "@/lib/data";

export function SkillsSection() {
  return (
    <section>
      <div className="page-container">
        <h2 className="text-center font-sans text-3xl font-light md:text-4xl">
          Skills
        </h2>

        <div className="mt-8 md:mt-10 space-y-8">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.label}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="max-w-full">
                    <Badge variant="secondary" className="h-auto max-w-full gap-2 whitespace-normal px-4 py-2 text-base leading-relaxed">
                      {skillLogos[skill] ? (
                        <Image
                          src={skillLogos[skill]}
                          alt=""
                          width={20}
                          height={20}
                          className="size-5 shrink-0 object-contain"
                        />
                      ) : null}
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
