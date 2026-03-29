import { Camera, Fingerprint, ShieldCheck, FileCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MuzzleSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="muzzle" ref={ref} className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Camera Scan</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Muzzle-ID <span className="text-gradient-gold">Biometric Recognition</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Scanner visual */}
          <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
            <div className="absolute inset-0 rounded-full border-2 border-primary/60" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
            {/* Scanner frame */}
            <div className="absolute inset-6 rounded-2xl border-2 border-primary overflow-hidden bg-foreground/5">
              {/* Scan line */}
              <div className="absolute left-0 right-0 h-1 gradient-gold rounded-full" style={{ animation: "scan-line 2.5s ease-in-out infinite" }} />
              {/* Content */}
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Fingerprint size={48} className="mx-auto text-primary mb-3" />
                  <p className="text-sm font-semibold text-foreground">Scanning Muzzle...</p>
                  <p className="text-xs text-muted-foreground mt-1">Unique nose-print identified</p>
                </div>
              </div>
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br" />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-5">
            {[
              { icon: Camera, title: "Start Scan", desc: "Point your smartphone camera at the animal's muzzle for instant biometric identification." },
              { icon: Fingerprint, title: "Unique Nose-Pattern ID", desc: "Every cattle has a unique nose print — like a human fingerprint — enabling fraud-proof identity." },
              { icon: ShieldCheck, title: "Secure Livestock Insurance", desc: "Biometric identity enables accurate insurance records and prevents identity fraud." },
              { icon: FileCheck, title: "Accurate Health Records", desc: "Link every health record to a verified animal identity for complete traceability." },
            ].map((f, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/30 flex items-center justify-center">
                  <f.icon size={20} className="text-primary" />
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

export default MuzzleSection;
