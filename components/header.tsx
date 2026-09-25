import Image from 'next/image';
import Link from 'next/link';
import { publishedStories } from '@/lib/stories';
import { DesktopNav } from './nav/desktop-nav';
import { MobileNav } from './nav/mobile-nav';
import { ThemeSwitcher } from './theme-switcher';

const storyLinks = publishedStories.map(({ slug, title }) => ({ slug, title }));

export function Header() {
  return (
    <header className="relative border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Laurie Reynolds — home">
          <span className="size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src="/laurie-reynolds-logo.png"
              alt=""
              width={1408}
              height={768}
              sizes="40px"
              className="size-10 scale-[1.04] object-cover"
              priority
            />
          </span>
          <span className="text-sm font-semibold text-foreground">Laurie Reynolds</span>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <DesktopNav stories={storyLinks} />
          <ThemeSwitcher />
        </div>

        {/* Mobile nav */}
        <MobileNav stories={storyLinks} />
      </div>
    </header>
  );
}
