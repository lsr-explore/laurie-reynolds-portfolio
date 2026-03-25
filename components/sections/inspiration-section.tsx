import Image from "next/image";
import { inspirationImages } from "@/lib/data";

export function InspirationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            What keeps me inspired
          </h2>
          <p className="mt-4 text-muted-foreground">
            Outside of engineering, I value time spent travelling, visiting art
            museums, exploring architecture and trying new recipes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {inspirationImages.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="aspect-square object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
