'use client';

import { NavigationMenu } from '@base-ui/react/navigation-menu';
import Link from 'next/link';
import type { StoryLink } from './types';

const linkClass = 'text-sm font-medium text-foreground transition-colors hover:text-primary';

export function DesktopNav({ stories }: { stories: StoryLink[] }) {
  return (
    <NavigationMenu.Root aria-label="Main navigation" className="hidden md:block">
      <NavigationMenu.List className="flex items-center gap-6">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={`${linkClass} group inline-flex items-center gap-1`}>
            Work
            <NavigationMenu.Icon className="transition-transform group-data-[popup-open]:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="w-80 p-2">
            <ul className="flex flex-col">
              {stories.map((story) => (
                <li key={story.slug}>
                  <NavigationMenu.Link
                    render={<Link href={`/work/${story.slug}`} />}
                    className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted focus-visible:bg-muted"
                  >
                    {story.title}
                  </NavigationMenu.Link>
                </li>
              ))}
              <li className="mt-1 border-t border-border pt-1">
                <NavigationMenu.Link
                  render={<Link href="/#work" />}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-muted focus-visible:bg-muted"
                >
                  All work <span aria-hidden="true">&rarr;</span>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link render={<Link href="/about" />} className={linkClass}>
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link render={<Link href="/resume" />} className={linkClass}>
            Resume
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://www.linkedin.com/in/lauriesreynolds/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="text-foreground transition-colors hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner sideOffset={12} align="start" className="z-50">
          <NavigationMenu.Popup
            aria-label="Work stories"
            className="rounded-lg border border-border bg-popover text-popover-foreground shadow-md"
          >
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}
