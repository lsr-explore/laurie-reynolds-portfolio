import { Badge } from "@/components/ui/badge";
import { whatIBring } from "@/lib/data";

export function WhatIBring() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-sans text-3xl font-light md:text-4xl">What I bring to a team</h2>
    
        <div className="mt-6"> 
          <ul className="list-disc max-w-max mx-auto space-y-2 list-inside">
            {whatIBring.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
