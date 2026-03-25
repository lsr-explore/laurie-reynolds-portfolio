import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { impactCards } from "@/lib/data";

export function ImpactSection() {
  return (
    <section id="impact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Impact at Scale
          </h2>
          <p className="mt-4 text-muted-foreground">
            I work with teams building secure, accessible, and highly reliable
            web systems, delivering the structure, clarity and engineering
            discipline required to operate at scale.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {impactCards.slice(0, 3).map((card) => (
            <Card key={card.title}>
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

        {/* Bottom row: 2 cards centered */}
        <div className="mt-6 flex justify-center">
          <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            {impactCards.slice(3).map((card) => (
              <Card key={card.title}>
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
      </div>
    </section>
  );
}
