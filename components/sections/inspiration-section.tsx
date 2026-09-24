import Image from "next/image";
import { inspirationImages } from "@/lib/data";

export function InspirationSection() {
  return (
    <section>
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-light md:text-4xl">
            What keeps me inspired
          </h2>
          <p className="mt-4 text-muted-foreground">
            Outside of engineering, I value time spent travelling, visiting art
            museums, exploring architecture and trying new recipes.
          </p>
        </div>

        <figure className="mt-8 md:mt-10">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {inspirationImages.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  sizes="(min-width: 1152px) 264px, (min-width: 1024px) 23vw, calc(50vw - 32px)"
                  width={400}
                  height={400}
                  className="aspect-square h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105"
                />
              </div>
            ))}
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Portfolio photography courtesy of <a className="underline" href="https://pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>.  Venice dock photo by <a href="https://www.pexels.com/photo/buildings-and-motorboats-by-canal-in-venice-13217103/" className="underline" target="_blank" rel="noopener noreferrer"> Spolyakov</a>. NYC Guggenheim Museum designed by Frank Lloyd Wright. Photo by <a className="underline" href="https://www.pexels.com/photo/contemporary-architecture-of-modern-museum-5845502/" target="_blank" rel="noopener noreferrer"> Charles Parker</a>. Photo of a woman admiring art by <a className="underline" href="https://www.pexels.com/photo/woman-admiring-a-bust-in-an-art-museum-16373241/" target="_blank" rel="noopener noreferrer">Grisha Besko</a>.   Cake photo by <a href="https://www.pexels.com/photo/close-up-photo-of-cake-3026809/" className="underline" target="_blank" rel="noopener noreferrer"> Ella Olsson</a>.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
