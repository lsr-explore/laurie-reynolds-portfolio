import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { howIThinkCards } from "@/lib/data";

function CardIcon({ icon }: { icon: string }) {
  const iconClass = "h-10 w-10 text-accent";

  switch (icon) {
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "accessibility":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="1.5" />
          <path d="M7 8h10" />
          <path d="M12 8v5" />
          <path d="M9 20l3-7 3 7" />
        </svg>
      );
    case "collaboration":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "iterate":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
      );
    case "workflow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="6" height="5" rx="1" />
          <rect x="15" y="3" width="6" height="5" rx="1" />
          <rect x="9" y="16" width="6" height="5" rx="1" />
          <path d="M6 8v3h12V8" />
          <path d="M12 11v5" />
        </svg>
      );
    default:
      return null;
  }
}

export function HowIWorkSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-light md:text-4xl">
            How I Work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A few principles that have shaped how I build software and work with teams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {howIThinkCards.map((card, index) => (
            <Card key={card.title} className={["border-t-4 border-t-accent transition-shadow hover:shadow-md", "lg:col-span-2", index === 3 ? "lg:col-start-2" : "",].join(" ")}>
              <CardHeader>
                <CardIcon icon={card.icon} />
                <CardTitle className="text-base">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
