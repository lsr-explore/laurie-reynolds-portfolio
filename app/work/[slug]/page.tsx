import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getStory, publishedStories } from '@/lib/stories';
import { BackToTopButton } from '../back-to-top-button';

export function generateStaticParams() {
  return publishedStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) {
    return { title: 'Work | Laurie Reynolds' };
  }

  return {
    title: `${story.title} | Laurie Reynolds`,
    description: story.summary,
    openGraph: {
      title: `${story.title} | Laurie Reynolds`,
      description: story.summary,
      type: 'article',
    },
  };
}

const headingClass = 'mb-3 text-2xl font-semibold';
const proseClass = 'space-y-4 text-muted-foreground';

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) {
    notFound();
  }

  return (
    <article className="story-print page-container py-16 md:py-24">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        <span aria-hidden="true">&larr;</span> All work
      </Link>

      <header className="mt-6">
        <h1 className="font-sans text-3xl font-light md:text-4xl">{story.title}</h1>
        <p className="mt-2 text-sm text-primary">
          {story.organization} &middot; {story.role} &middot; {story.period}
        </p>
        <p className="mt-6 text-lg text-foreground">{story.summary}</p>
        <ul className="mt-6 flex list-none flex-wrap gap-1.5 p-0">
          {story.technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary" className="text-xs">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </header>

      <Separator className="my-10" />

      <section aria-labelledby="at-a-glance">
        <h2 id="at-a-glance" className={headingClass}>
          At a glance
        </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[minmax(8rem,12rem)_1fr]">
          {story.atAGlance.map((item) => (
            <div key={item.label} className="contents">
              <dt className="text-sm font-semibold text-foreground">{item.label}</dt>
              <dd className="text-sm text-muted-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="context" className="mt-12">
        <h2 id="context" className={headingClass}>
          The context
        </h2>
        <div className={proseClass}>
          {story.context.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="problem" className="mt-12">
        <h2 id="problem" className={headingClass}>
          The problem
        </h2>
        <div className={proseClass}>
          <p>{story.problem.intro}</p>
          <ul className="list-disc space-y-2 pl-5">
            {story.problem.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="responsibility" className="mt-12">
        <h2 id="responsibility" className={headingClass}>
          My responsibility
        </h2>
        <div className={proseClass}>
          <p>{story.responsibility.intro}</p>
          <ul className="list-disc space-y-2 pl-5">
            {story.responsibility.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach" className="mt-12">
        <h2 id="approach" className={headingClass}>
          How I approached it
        </h2>
        <div className="space-y-8">
          {story.decisions.map((decision, index) => (
            <div key={decision.title}>
              <h3 className="mb-2 text-lg font-semibold">
                <span className="text-primary">Decision {index + 1}</span> &mdash; {decision.title}
              </h3>
              <div className={proseClass}>
                {decision.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="workflow" className="mt-12">
        <h2 id="workflow" className={headingClass}>
          Architecture and workflow
        </h2>
        <div className={proseClass}>
          <p>{story.workflow.intro}</p>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
          {story.workflow.stagesLabel}
        </p>
        <ol className="mt-3 space-y-3">
          {story.workflow.stages.map((stage, index) => (
            <li key={stage} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground"
              >
                {index + 1}
              </span>
              <span className="text-muted-foreground">{stage}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="quality" className="mt-12">
        <h2 id="quality" className={headingClass}>
          Accessibility and quality
        </h2>
        <div className={proseClass}>
          <p>{story.quality.intro}</p>
          <ul className="list-disc space-y-2 pl-5">
            {story.quality.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="collaboration" className="mt-12">
        <h2 id="collaboration" className={headingClass}>
          Collaboration
        </h2>
        <div className={proseClass}>
          {story.collaboration.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="outcome" className="mt-12">
        <h2 id="outcome" className={headingClass}>
          Outcome
        </h2>
        <div className={proseClass}>
          {story.outcome.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="learned" className="mt-12">
        <h2 id="learned" className={headingClass}>
          What I learned
        </h2>
        <div className={proseClass}>
          {story.learned.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {story.related.length > 0 && (
        <>
          <Separator className="my-12" />
          <section aria-labelledby="related">
            <h2 id="related" className={headingClass}>
              Related experience
            </h2>
            <ul className="space-y-4">
              {story.related.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/work/${related.slug}`}
                    className="block rounded-xl ring-1 ring-foreground/10 bg-card p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="font-medium text-foreground">{related.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {related.blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      <BackToTopButton />
    </article>
  );
}
