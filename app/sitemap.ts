import type { MetadataRoute } from 'next';
import { publishedStories } from '@/lib/stories';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = 'https://laurie-reynolds-portfolio.vercel.app';
  const paths = [
    '/',
    '/about',
    '/resume',
    '/accessibility',
    '/privacy',
    '/sitemap',
    ...publishedStories.map((story) => `/work/${story.slug}`),
  ];

  return paths.map((path) => ({ url: new URL(path, origin).href }));
}
