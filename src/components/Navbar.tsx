import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import GooglePlayButton from "@/components/GooglePlayButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Muzzle-ID", href: "#muzzle" },
  { label: "Skin Health", href: "#spatial" },
  { label: "Acoustic AI", href: "#acoustic" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Offline AI", href: "#edge" },
  { label: "Help", href: "#help" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="font-display font-bold text-lg">
          <img src={logo} alt="PRANA-G AI" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <GooglePlayButton className="!py-1.5 !px-4" />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/70 hover:text-primary py-2">
                {l.label}
              </a>
            ))}
            <GooglePlayButton className="justify-center" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
