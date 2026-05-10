import { Reveal, SectionTitle } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import aurum from "@/assets/proj-aurum.jpg";
import maison from "@/assets/proj-maison.jpg";
import northrail from "@/assets/proj-northrail.jpg";
import lumiere from "@/assets/proj-lumiere.jpg";
import atlas from "@/assets/proj-atlas.jpg";
import kintsugi from "@/assets/proj-kintsugi.jpg";

export const projectList = [
  { t: "Aurum Jewels", c: "E-commerce", img: aurum },
  { t: "Maison Atelier", c: "Business Website", img: maison },
  { t: "NorthRail Studio", c: "Portfolio", img: northrail },
  { t: "Lumière Hotel", c: "Landing Page", img: lumiere },
  { t: "Atlas Capital", c: "Business Website", img: atlas },
  { t: "Kintsugi Co.", c: "E-commerce", img: kintsugi },
];

export function Projects() {
  return (
    <section className="section">
      <div className="container-luxe">
        <SectionTitle eyebrow="Featured Work" title={<>Selected <span className="text-gold">case studies.</span></>} subtitle="A glimpse into the brands we've helped build, scale and shine." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <Link to="/portfolio" className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <img src={p.img} alt={p.t} loading="lazy" width={896} height={1120}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold">{p.c}</p>
                    <h3 className="mt-1 font-display text-2xl">{p.t}</h3>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold-gradient group-hover:text-ink">
                    <ArrowUpRight size={16}/>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
