import { Activity, Heart, Baby, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  { icon: Activity, title: "Respiratory Distress Detection", desc: "Identifies abnormal breathing patterns and coughing through acoustic analysis." },
  { icon: Heart, title: "Pain Pattern Recognition", desc: "Detects vocalizations associated with pain, stress, and discomfort." },
  { icon: Baby, title: "Estrus Cycle Prediction", desc: "Predicts estrus up to 48 hours early using vocal and behavioral acoustic cues." },
  { icon: Cpu, title: "TinyML On-Device Processing", desc: "All acoustic analysis runs directly on your phone — no cloud required." },
];

const AcousticSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="acoustic" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Acoustic AI</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Sound-Based <span className="text-gradient-gold">Health Detection</span>
          </h2>
        </div>

        {/* Soundwave */}
        <div className={`flex items-end justify-center gap-1 mb-14 h-10 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full gradient-primary"
              style={{
                height: "8px",
                animation: "soundwave 1.2s ease-in-out infinite",
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 ${visible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {cards.map((c, i) => (
            <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group">
              <div className="w-12 h-12 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <c.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcousticSection;
