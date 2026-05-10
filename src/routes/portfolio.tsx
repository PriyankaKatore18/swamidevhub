import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionTitle, Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import aurum from "@/assets/proj-aurum.jpg";
import maison from "@/assets/proj-maison.jpg";
import northrail from "@/assets/proj-northrail.jpg";
import lumiere from "@/assets/proj-lumiere.jpg";
import atlas from "@/assets/proj-atlas.jpg";
import kintsugi from "@/assets/proj-kintsugi.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Swami Dev Hub" },
      { name: "description", content: "A selection of premium websites, e-commerce stores and landing pages we've designed and developed." },
      { property: "og:title", content: "Portfolio — Swami Dev Hub" },
      { property: "og:description", content: "Selected case studies from our studio." },
    ],
  }),
  component: Portfolio,
});

const cats = ["All", "E-commerce", "Business", "Portfolio", "Landing Pages", "Redesign"] as const;

const projects = [
  { t: "Aurum Jewels", c: "E-commerce", img: aurum, year: "2025" },
  { t: "Maison Atelier", c: "Business", img: maison, year: "2025" },
  { t: "NorthRail Studio", c: "Portfolio", img: northrail, year: "2024" },
  { t: "Lumière Hotel", c: "Landing Pages", img: lumiere, year: "2025" },
  { t: "Atlas Capital", c: "Business", img: atlas, year: "2024" },
  { t: "Kintsugi Co.", c: "E-commerce", img: kintsugi, year: "2026" },
  { t: "Praxis Legal", c: "Redesign", img: atlas, year: "2024" },
  { t: "Velvet & Co.", c: "E-commerce", img: aurum, year: "2026" },
  { t: "Heritage Estates", c: "Business", img: maison, year: "2025" },
];

function Portfolio() {
  const [f, setF] = useState<typeof cats[number]>("All");
  const list = projects.filter(p => f === "All" || p.c === f);
  return (
    <SiteLayout>
      <section className="section">
        <div className="container-luxe">
          <SectionTitle eyebrow="Portfolio" title={<>Work that <span className="text-gold">speaks for itself.</span></>}
            subtitle="A curated showcase of brands we've helped build, scale and shine across industries." center />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => setF(c)}
                className={`rounded-full border px-5 py-2 text-sm transition ${f===c?"border-gold bg-gold-gradient text-ink":"border-border text-muted-foreground hover:border-gold hover:text-gold"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.t + i} delay={i*0.04}>
                <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                  <img src={p.img} alt={p.t} loading="lazy" width={896} height={1120}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-95" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between text-xs">
                    <span className="rounded-full border border-gold/40 bg-ink/60 px-3 py-1 uppercase tracking-widest text-gold">{p.c}</span>
                    <span className="text-muted-foreground">{p.year}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <h3 className="font-display text-2xl">{p.t}</h3>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold-gradient group-hover:text-ink">
                      <ArrowUpRight size={16}/>
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
