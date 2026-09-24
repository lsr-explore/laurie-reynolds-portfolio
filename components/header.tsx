import Image from 'next/image';
import Link from 'next/link';
import { publishedStories } from '@/lib/stories';
import { DesktopNav } from './nav/desktop-nav';
import { MobileNav } from './nav/mobile-nav';

const storyLinks = publishedStories.map(({ slug, title }) => ({ slug, title }));

export function Header() {
  return (
    <header className="relative border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Laurie Reynolds — home">
          <Image
            src="/laurie-reynolds-logo.png"
            alt=""
            width={1408}
            height={768}
            sizes="70px"
            className="h-auto w-[70px] shrink-0"
            priority
          />
          <span className="text-sm font-semibold text-foreground">Laurie Reynolds</span>
        </Link>

        <DesktopNav stories={storyLinks} />

        {/* Mobile nav */}
        <MobileNav stories={storyLinks} />
      </div>
    </header>
  );
}
