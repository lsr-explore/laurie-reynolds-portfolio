import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { stories } from "@/lib/stories";

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

      <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
        {stories.map((story) => {
          const card = (
            <Card className="h-full border-l-4 border-l-primary transition-shadow group-hover/story:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{story.title}</CardTitle>
                <p className="text-xs text-primary">
                  {story.organization} &middot; {story.role} &middot;{" "}
                  {story.period}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm text-muted-foreground">{story.summary}</p>

                <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0">
                  {story.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-4 text-sm font-medium text-primary">
                  {story.status === "published" ? (
                    <>
                      Read the story <span aria-hidden="true">&rarr;</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground">
                      Story in progress
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>
          );

          return (
            <li key={story.slug} className="flex">
              {story.status === "published" ? (
                <Link
                  href={`/work/${story.slug}`}
                  className="group/story block w-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {card}
                </Link>
              ) : (
                <div className="w-full">{card}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
