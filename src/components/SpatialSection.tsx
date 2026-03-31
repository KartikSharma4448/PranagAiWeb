import { Eye, Search, AlertTriangle, Activity } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Eye, title: "Image-Based Analysis", desc: "Upload or capture cattle skin images for AI-powered visual inspection." },
  { icon: Search, title: "Risk Indicator Detection", desc: "Identifies visible signs of skin conditions, infections, and abnormalities." },
  { icon: AlertTriangle, title: "Early Warning Flags", desc: "Get flagged for potential issues before they become serious problems." },
  { icon: Activity, title: "Track Over Time", desc: "Compare skin health across scans to monitor recovery or progression." },
];

const SpatialSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="spatial" ref={ref} className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Visual AI</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Skin Health <span className="text-gradient-gold">Analysis</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            The app analyzes cattle skin images to identify visible health risk indicators.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Visual element */}
          <div className="relative mx-auto w-full max-w-sm aspect-square">
            <svg viewBox="0 0 300 300" className="w-full h-full">
              {/* Scanning grid overlay */}
              <g stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 30 + 15} x2="300" y2={i * 30 + 15} />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 30 + 15} y1="0" x2={i * 30 + 15} y2="300" />
                ))}
              </g>
              {/* Detection zones */}
              <circle cx="120" cy="130" r="35" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.1" strokeDasharray="6 3">
                <animate attributeName="r" values="33;37;33" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="170" r="25" stroke="hsl(var(--gold-start))" strokeWidth="2" fill="hsl(var(--gold-start))" fillOpacity="0.1" strokeDasharray="6 3">
                <animate attributeName="r" values="23;27;23" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="160" cy="220" r="20" stroke="hsl(var(--sage))" strokeWidth="2" fill="hsl(var(--sage))" fillOpacity="0.1" strokeDasharray="6 3">
                <animate attributeName="r" values="18;22;18" dur="1.8s" repeatCount="indefinite" />
              </circle>
              {/* Center icon */}
              <g transform="translate(130, 130)">
                <text fontSize="14" fill="hsl(var(--primary))" fontWeight="bold" textAnchor="middle" x="20" y="5">AI</text>
              </g>
              {/* Labels */}
              <text x="120" y="180" fontSize="9" fill="hsl(var(--primary))" textAnchor="middle" opacity="0.7">Zone A</text>
              <text x="200" y="210" fontSize="9" fill="hsl(var(--gold-start))" textAnchor="middle" opacity="0.7">Zone B</text>
              <text x="160" y="255" fontSize="9" fill="hsl(var(--sage))" textAnchor="middle" opacity="0.7">Zone C</text>
            </svg>
          </div>

          <div className="space-y-5">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 shrink-0 rounded-lg gradient-gold flex items-center justify-center">
                  <f.icon size={20} className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialSection;
