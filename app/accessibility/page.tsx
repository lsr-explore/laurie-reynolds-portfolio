import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Laurie Reynolds',
  description:
    'Accessibility goals, current limitations, and ways to report a barrier on this portfolio.',
};

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Accessibility statement</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated September 25, 2026</p>
      <div className="mt-8 space-y-8 text-base leading-relaxed [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4">
        <section aria-labelledby="commitment">
          <h2 id="commitment">My commitment</h2>
          <p>
            I want this portfolio to be usable by as many people as possible, including people who
            use assistive technology. I aim to meet the{' '}
            <a href="https://www.w3.org/TR/WCAG22/">
              Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA
            </a>{' '}
            and improve accessibility as the site evolves.
          </p>
        </section>
        <section aria-labelledby="current-status">
          <h2 id="current-status">Current status</h2>
          <p>
            Accessibility is an ongoing effort. The site includes keyboard navigation, a
            skip-to-content link, and automated accessibility checks. I have also tested the site
            with screen readers, and screen-reader use is an intended, supported way to access its
            content. Testing does not cover every combination of browser, device, and assistive
            technology, so I cannot guarantee compatibility in every setup. This statement is not
            a claim of full WCAG conformance.
          </p>
          <p className="mt-3">
            Downloadable PDFs and third-party websites may not offer the same accessibility as the
            site pages. An <Link href="/resume">HTML version of my résumé</Link> is available as an
            alternative to the PDF. If you encounter a barrier in a document or page, please let me
            know.
          </p>
        </section>
        <section aria-labelledby="feedback">
          <h2 id="feedback">Feedback and contact</h2>
          <p>
            I welcome feedback on this site’s accessibility. If you encounter a barrier, you can{' '}
            <a href="https://www.linkedin.com/in/lauriesreynolds/">contact me on LinkedIn</a> or{' '}
            <a href="https://github.com/lsr-explore/laurie-reynolds-portfolio/issues/new">
              file an accessibility issue on GitHub
            </a>
            . These services may require an account.
          </p>
          <p className="mt-3">
            Please include the page URL, what you were trying to do, and what went wrong. If
            helpful, include your browser and assistive technology. Please avoid posting personal or
            sensitive information: GitHub issues on this repository are public.
          </p>
          <p className="mt-3">
            I will review feedback and work toward a practical solution, including an alternative
            way to access the information where possible.
          </p>
        </section>
      </div>
    </article>
  );
}
