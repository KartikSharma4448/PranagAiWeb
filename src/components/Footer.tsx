import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navGroups = [
  { title: "Platform", links: [{ label: "About", href: "#about" }, { label: "Muzzle-ID", href: "#muzzle" }, { label: "Acoustic AI", href: "#acoustic" }, { label: "Spatial AI", href: "#spatial" }] },
  { title: "Resources", links: [{ label: "Dashboard", href: "#dashboard" }, { label: "Edge AI", href: "#edge" }, { label: "Help & Support", href: "#help" }, { label: "Privacy", href: "#privacy" }] },
  { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy-policy", isRoute: true }, { label: "Terms & Conditions", href: "/terms-conditions", isRoute: true }, { label: "Data Protection", href: "#" }, { label: "Cookie Policy", href: "#" }] },
] as const;

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <a href="#hero">
            <img src={logo} alt="PRANAG-AI" className="h-8 brightness-200" />
          </a>
          <p className="mt-3 text-sm leading-relaxed text-background/60">
            Empowering Precision Livestock Intelligence — accessible, affordable, and built for every farmer.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {navGroups.map((g, i) => (
          <div key={i}>
            <p className="font-display font-semibold text-background text-sm mb-4">{g.title}</p>
            <ul className="space-y-2.5">
              {g.links.map((l, j) => (
                <li key={j}>
                  {"isRoute" in l && l.isRoute ? (
                    <Link to={l.href} className="text-sm hover:text-background transition-colors">{l.label}</Link>
                  ) : (
                    <a href={l.href} className="text-sm hover:text-background transition-colors">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-background/40">&copy; 2026 Make By Kartik Copyright</p>
        <p className="text-xs italic text-background/40">"Empowering Precision Livestock Intelligence"</p>
      </div>
    </div>
  </footer>
);

export default Footer;
