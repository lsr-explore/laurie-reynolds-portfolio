import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="relative border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Laurie Reynolds — home">
          <Image
            src="/laurie-reynolds-logo.png"
            alt=""
            width={32}
            height={32}
            style={{ height: "auto" }}
            priority
          />
          <span className="text-sm font-semibold text-foreground">
            Laurie Reynolds
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/work"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Resume
              </Link>
            </li>
            <li>
              <a
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
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
}
