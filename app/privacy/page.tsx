import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice | Laurie Reynolds',
  description:
    'How this portfolio uses cookieless analytics, hosting services, and external contact links.',
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy notice</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated September 25, 2026</p>
      <div className="mt-8 space-y-8 text-base leading-relaxed [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4">
        <section aria-labelledby="overview">
          <h2 id="overview">About this site</h2>
          <p>
            This is Laurie Reynolds’s personal portfolio. It does not include advertising, a
            newsletter signup, or a contact form. You do not need to submit personal details to
            browse the public portfolio.
          </p>
        </section>
        <section aria-labelledby="analytics">
          <h2 id="analytics">Website analytics</h2>
          <p>
            I use Vercel Web Analytics to understand overall traffic and which pages people visit.
            It collects usage data such as page URLs, referrers, approximate location, browser,
            operating system, and device type, and provides aggregate visitor statistics.
          </p>
          <p className="mt-3">
            Vercel describes this analytics service as cookieless. It uses a request-derived hash to
            distinguish visitors, with visitor sessions discarded after 24 hours; that does not mean
            all aggregate statistics are deleted after 24 hours. See{' '}
            <a href="https://vercel.com/docs/analytics/privacy-policy">
              Vercel’s analytics privacy documentation
            </a>{' '}
            for details.
          </p>
        </section>
        <section aria-labelledby="hosting">
          <h2 id="hosting">Hosting and access protection</h2>
          <p>
            Vercel hosts this site and processes technical request information, which can include IP
            addresses, to deliver and secure it. While the portfolio is access-protected, Vercel
            handles sign-in and may use cookies needed to remember authorized access. See{' '}
            <a href="https://vercel.com/legal/privacy-notice">Vercel’s privacy notice</a> for its
            practices.
          </p>
        </section>
        <section aria-labelledby="contact">
          <h2 id="contact">External links and messages</h2>
          <p>
            If you <a href="https://www.linkedin.com/in/lauriesreynolds/">contact me on LinkedIn</a>{' '}
            or{' '}
            <a href="https://github.com/lsr-explore/laurie-reynolds-portfolio/issues/new">
              open an issue on GitHub
            </a>
            , those services process your information under their own privacy policies. I use the
            information you share to respond to your message or investigate the issue.
          </p>
          <p className="mt-3">
            GitHub issues on this repository are public. Please do not include sensitive personal
            information. For a privacy question, please contact me through LinkedIn.
          </p>
        </section>
        <section aria-labelledby="changes">
          <h2 id="changes">Updates to this notice</h2>
          <p>
            I will update this notice if the site’s features or data practices change. The date
            above shows when this notice was last revised.
          </p>
        </section>
      </div>
    </article>
  );
}
