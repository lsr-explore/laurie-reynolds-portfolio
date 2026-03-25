import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-sans text-3xl font-bold md:text-4xl">
          Skills
        </h2>

        <div className="mt-12 space-y-8">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
