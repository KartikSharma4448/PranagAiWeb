import { WifiOff, Cpu, MapPin, Stethoscope } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: WifiOff, title: "Works Without Internet", desc: "Full diagnostic capabilities with zero connectivity requirement." },
  { icon: Cpu, title: "Edge-Optimized AI Models", desc: "Lightweight models designed to run efficiently on any smartphone." },
  { icon: MapPin, title: "100% Remote Area Coverage", desc: "Every village, every farm — complete functionality everywhere." },
  { icon: Stethoscope, title: "Closing the Vet Gap", desc: "Scalable AI intelligence that bridges the veterinarian shortage." },
];

const EdgeAISection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="edge" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Offline-First</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Edge AI <span className="text-gradient-gold">Technology</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">
            <WifiOff size={14} /> Offline Ready
          </div>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeAISection;
