import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-ink/60">
      <div className="divider-gold" />
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gold-gradient text-ink font-bold">S</span>
            <span className="font-display text-lg">Swami <span className="text-gold">Dev Hub</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Premium freelancing web development & digital solutions crafted for ambitious brands.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: MessageCircle, href: "https://wa.me/918446079635" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-gold hover:text-gold">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[["/about","About"],["/services","Services"],["/portfolio","Portfolio"],["/blog","Blog"],["/contact","Contact"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["Web Development","E-commerce","Landing Pages","Website Redesign","Maintenance","Domain & Hosting"].map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold"/> 8446079635</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold"/> 8767980311</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold"/> swamisamarthweb18@gmail.com</li>
          </ul>
          <form className="mt-5 flex overflow-hidden rounded-full border border-border bg-card/60">
            <input placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"/>
            <button className="bg-gold-gradient px-4 text-xs font-semibold text-ink">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container-luxe flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Swami Dev Hub. All rights reserved.</p>
          <p>Crafted with precision and gold.</p>
        </div>
      </div>
    </footer>
  );
}
