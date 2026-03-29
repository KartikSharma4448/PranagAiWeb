import { Lock, Shield, Fingerprint, Server, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Lock, title: "Biometric Data Encryption", desc: "All muzzle-print and identity data is encrypted using AES-256 standards." },
  { icon: Shield, title: "Secure Animal Identity", desc: "Tamper-proof digital identity records protected by cryptographic verification." },
  { icon: Server, title: "Local Device Processing", desc: "Data stays on your device — no cloud uploads, no third-party access." },
  { icon: Fingerprint, title: "Fraud-Proof Authentication", desc: "Biometric verification prevents identity fraud and unauthorized access." },
  { icon: ShieldCheck, title: "End-to-End Protection", desc: "Complete data protection from capture to storage with zero data leakage." },
];

const PrivacySection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="privacy" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Trust & Security</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Privacy & <span className="text-gradient-gold">Security</span>
          </h2>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {items.map((it, i) => (
            <div key={i} className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <it.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
