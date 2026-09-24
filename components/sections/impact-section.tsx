import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { impactCards } from "@/lib/data";

export function ImpactSection() {
  return (
    <section id="impact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-light md:text-4xl">
            Where I&apos;ve Made an Impact
          </h2>
          <p className="mt-4 text-muted-foreground">
            My experience includes high-volume payment systems, FDA-regulated
            scientific software, accessible government applications, and the
            front-end practices that help teams maintain them.
          </p>
        </div>

        {/* Shared-width impact cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {impactCards.map((card) => (
            <Card
              key={card.title}
              className="border-l-4 border-l-primary transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-lg">{card.title}</CardTitle>
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
