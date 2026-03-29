import { Move, Eye, AlertTriangle, Activity } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Move, title: "Skeletal Mesh Mapping", desc: "Real-time skeletal overlay tracks joint positions and body alignment." },
  { icon: Eye, title: "Gait & Posture Monitoring", desc: "Continuous analysis of walking patterns detects subtle mobility changes." },
  { icon: AlertTriangle, title: "Early Lameness Detection", desc: "Identifies lameness indicators days before visible symptoms appear." },
  { icon: Activity, title: "Injury Risk Alerts", desc: "Predictive alerts for potential injuries based on movement anomalies." },
];

const SpatialSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="spatial" ref={ref} className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Spatial AI</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Mobility <span className="text-gradient-gold">Health Analysis</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Mesh animation */}
          <div className="relative mx-auto w-full max-w-sm aspect-square">
            <svg viewBox="0 0 300 300" className="w-full h-full">
              {/* Cattle outline with animated mesh */}
              <g stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.6" style={{ strokeDasharray: "8 4", animation: "skeleton-mesh 3s ease-in-out infinite" }}>
                {/* Body outline */}
                <ellipse cx="150" cy="150" rx="100" ry="60" />
                {/* Head */}
                <ellipse cx="60" cy="120" rx="30" ry="25" />
                {/* Legs */}
                <line x1="100" y1="210" x2="100" y2="260" />
                <line x1="130" y1="210" x2="130" y2="265" />
                <line x1="180" y1="210" x2="180" y2="260" />
                <line x1="210" y1="210" x2="210" y2="265" />
              </g>
              {/* Joint dots */}
              {[[100,210],[130,210],[180,210],[210,210],[60,120],[150,150],[100,260],[130,265],[180,260],[210,265]].map(([cx,cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4" fill="hsl(var(--gold-start))" opacity="0.8">
                  <animate attributeName="r" values="3;5;3" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                </circle>
              ))}
              {/* Connecting mesh lines */}
              <g stroke="hsl(var(--sage))" strokeWidth="0.5" opacity="0.3">
                <line x1="100" y1="210" x2="150" y2="150" />
                <line x1="130" y1="210" x2="150" y2="150" />
                <line x1="180" y1="210" x2="150" y2="150" />
                <line x1="210" y1="210" x2="150" y2="150" />
                <line x1="60" y1="120" x2="150" y2="150" />
              </g>
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
