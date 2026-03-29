import { Bell, AlertTriangle, Heart, Thermometer, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const notifications = [
  { icon: AlertTriangle, color: "bg-destructive/10 text-destructive", title: "Emergency Alert", desc: "Animal MH-2847 showing signs of acute respiratory distress.", time: "Just now" },
  { icon: Thermometer, color: "bg-secondary/20 text-secondary", title: "Temperature Warning", desc: "Body temperature elevated to 39.8°C — monitor closely.", time: "5 min ago" },
  { icon: Heart, color: "bg-primary/10 text-primary", title: "Health Update", desc: "Weekly health score improved to 94%. All vitals stable.", time: "1 hour ago" },
  { icon: ShieldCheck, color: "bg-accent/30 text-primary", title: "Preventive Care", desc: "Vaccination due in 7 days. Schedule appointment now.", time: "2 hours ago" },
];

const NotificationsSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="notifications" ref={ref} className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Early Warning System</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Predictive <span className="text-gradient-gold">Alerts</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Real-time health notifications, emergency warnings, and preventive care suggestions delivered instantly.
          </p>
        </div>

        <div className={`max-w-lg mx-auto space-y-4 ${visible ? "" : "opacity-0"}`}>
          {notifications.map((n, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
              style={visible ? { animation: `notification-slide 8s ease-in-out ${i * 0.3}s both`, animationIterationCount: 1, animationFillMode: "forwards" } : {}}
            >
              <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${n.color}`}>
                <n.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-sm">{n.title}</p>
                  <p className="text-[10px] text-muted-foreground shrink-0">{n.time}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Bell size={16} /> Real-time notifications enabled
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
