import { ChevronDown, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoPranag from "@/assets/logopranag1.png";
import GooglePlayButton from "@/components/GooglePlayButton";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/50 to-primary/30" />

    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "linear-gradient(hsl(var(--sage)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--sage)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        animation: "grid-move 4s linear infinite",
      }}
    />

    <div className="relative z-10 container text-center px-4">
      <img src={logoPranag} alt="PRANAG" className="w-24 h-24 mx-auto mb-4 drop-shadow-2xl" />
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-sage/40 bg-sage/10 text-sage text-xs font-semibold tracking-wider uppercase">
        AI-Powered Livestock Health App
      </div>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-background leading-tight mb-6">
        Hardware-less AI for{" "}
        <span className="text-gradient-gold">Precision Livestock Care</span>
      </h1>
      <p className="max-w-2xl mx-auto text-background/80 text-lg sm:text-xl mb-10 leading-relaxed">
        Transform your smartphone into a powerful veterinary diagnostic tool. No expensive hardware needed — just point, scan, and get instant AI-driven health insights for your livestock.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <GooglePlayButton dark />
        <a href="#about" className="bg-background/10 border border-background/30 text-background font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 hover:bg-background/20 transition-colors">
          <FileText size={20} /> Explore Features
        </a>
      </div>
    </div>

    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/60" style={{ animation: "scroll-hint 2s ease-in-out infinite" }}>
      <ChevronDown size={32} />
    </a>
  </section>
);

export default HeroSection;
