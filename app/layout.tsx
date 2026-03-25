import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SkipLink } from "@/components/skip-link";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laurie-reynolds-portfolio.vercel.app"),
  title: "Laurie Reynolds | Senior Front-End Software Engineer",
  description:
    "Senior Front-End Engineer with 25+ years shipping high-stakes React applications for Walmart payments, FDA-regulated medical software, and civic technology.",
  openGraph: {
    title: "Laurie Reynolds | Senior Front-End Software Engineer",
    description:
      "Crafting Frontend Systems that power meaningful work — payments, medical software, accessibility, and civic technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurie Reynolds | Senior Front-End Software Engineer",
    description:
      "Crafting Frontend Systems that power meaningful work — payments, medical software, accessibility, and civic technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
