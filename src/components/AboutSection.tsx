import { Smartphone, Brain, Shield, BarChart3, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Smartphone, title: "Hardware-less Architecture", desc: "No additional devices needed — your smartphone is the diagnostic tool." },
  { icon: Brain, title: "Digital Immune System", desc: "AI that continuously learns from animal health patterns across the network." },
  { icon: BarChart3, title: "Predictive Intelligence", desc: "Forecast health issues before they become critical with real-time analytics." },
  { icon: Shield, title: "Multi-Modal Diagnostics", desc: "Visual, acoustic, and motion analysis combined for comprehensive assessment." },
  { icon: MapPin, title: "Designed for Rural Bharat", desc: "Built to work in the most remote areas with minimal connectivity." },
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="about" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`${visible ? "animate-fade-in-left" : "opacity-0"}`}>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About PRANAG-AI</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Smartphone-Powered <span className="text-gradient-gold">Veterinary AI</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              PRANAG-AI transforms any smartphone into a precision veterinary diagnostic tool.
              Using advanced multi-modal AI — visual, acoustic, and spatial analysis — it delivers
              real-time health insights without expensive hardware, making world-class livestock care
              accessible to every farmer in rural India.
            </p>
            <div className="gradient-primary inline-block text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg">
              Learn More →
            </div>
          </div>

          <div className={`grid sm:grid-cols-2 gap-4 ${visible ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            {features.map((f, i) => (
              <div key={i} className={`p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group ${i === 4 ? "sm:col-span-2" : ""}`}>
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3">
                  <f.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
