import { Download, Share2, Heart, Shield, Syringe, Baby, Bell } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DashboardSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="dashboard" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Health Report</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Smart <span className="text-gradient-gold">Dashboard</span>
          </h2>
        </div>

        <div className={`max-w-sm mx-auto ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Phone frame */}
          <div className="rounded-[2rem] border-4 border-foreground/20 bg-card shadow-2xl overflow-hidden">
            {/* Status bar */}
            <div className="h-6 bg-foreground/5 flex items-center justify-center">
              <div className="w-20 h-1.5 rounded-full bg-foreground/20" />
            </div>

            <div className="p-5 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Animal ID</p>
                  <p className="font-display font-bold text-sm">MH-2847-PRANAG</p>
                </div>
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Heart size={18} className="text-primary-foreground" />
                </div>
              </div>

              {/* Health Score */}
              <div className="p-4 rounded-xl bg-accent/20 text-center">
                <p className="text-xs text-muted-foreground mb-1">Health Score</p>
                <p className="font-display text-4xl font-bold text-primary">94<span className="text-lg">%</span></p>
                <div className="w-full h-2 rounded-full bg-muted mt-2">
                  <div className="h-full rounded-full gradient-primary" style={{ width: "94%" }} />
                </div>
              </div>

              {/* Risk Indicators */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Respiratory", value: "Low", color: "text-primary" },
                  { label: "Mobility", value: "Normal", color: "text-primary" },
                  { label: "Stress", value: "Moderate", color: "text-secondary" },
                ].map((r, i) => (
                  <div key={i} className="p-2 rounded-lg bg-muted/50 text-center">
                    <p className="text-[10px] text-muted-foreground">{r.label}</p>
                    <p className={`text-xs font-semibold ${r.color}`}>{r.value}</p>
                  </div>
                ))}
              </div>

              {/* Records */}
              <div className="space-y-2">
                {[
                  { icon: Syringe, label: "Vaccination", value: "Up to date", sub: "Next: Mar 2026" },
                  { icon: Baby, label: "Breeding Cycle", value: "Active", sub: "Expected: Apr 2026" },
                  { icon: Bell, label: "Alerts", value: "2 Active", sub: "1 requires attention" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <r.icon size={16} className="text-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold">{r.label}</p>
                        <p className="text-xs text-primary font-medium">{r.value}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground">{r.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 gradient-primary text-primary-foreground text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5">
                  <Download size={14} /> Download
                </button>
                <button className="flex-1 gradient-gold text-foreground text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="h-5 bg-foreground/5 flex items-center justify-center">
              <div className="w-24 h-1 rounded-full bg-foreground/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
