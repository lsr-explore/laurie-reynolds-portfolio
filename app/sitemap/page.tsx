import type { Metadata } from 'next';
import Link from 'next/link';
import { publishedStories } from '@/lib/stories';

export const metadata: Metadata = {
  title: 'Sitemap | Laurie Reynolds',
  description:
    'Find pages, published work stories, and site information on Laurie Reynolds’s portfolio.',
};

const sections = [
  {
    title: 'Explore',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/resume', label: 'Résumé' },
    ],
  },
  {
    title: 'Work stories',
    links: publishedStories.map((story) => ({
      href: `/work/${story.slug}`,
      label: story.title,
    })),
  },
  {
    title: 'Site information',
    links: [
      { href: '/accessibility', label: 'Accessibility statement' },
      { href: '/privacy', label: 'Privacy notice' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Sitemap</h1>
      <p className="mt-3 text-muted-foreground">
        Explore my portfolio and find the information you need.
      </p>
      <nav aria-label="Sitemap" className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-xl font-semibold">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 underline underline-offset-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </div>
  );
}
