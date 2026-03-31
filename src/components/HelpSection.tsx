import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "What is PRANA-G AI?", a: "PRANA-G AI is a smartphone-based cattle health monitoring app that uses AI for identification, skin analysis, acoustic screening, and health reporting — designed for everyday farm use." },
  { q: "How does Muzzle-ID work?", a: "Each cattle has a unique muzzle (nose) pattern, similar to a human fingerprint. The app captures and matches this pattern for reliable identification and record tracking." },
  { q: "Does it work without internet?", a: "Yes! Core features run on-device using edge AI models. No constant internet connection is needed, making it ideal for rural and low-connectivity areas." },
  { q: "What health checks can the app do?", a: "The app performs skin health analysis from images, acoustic screening from sounds, and generates health reports with risk status and recommendations." },
  { q: "Is my data secure?", a: "Yes. Health records and profiles can be synced securely to the cloud. On-device processing ensures sensitive data stays on your phone when offline." },
  { q: "Where can I download the app?", a: "PRANA-G AI is available on the Google Play Store. You can download it directly from the link on this website." },
];

const HelpSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="help" ref={ref} className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Support</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Common questions about the PRANA-G AI app and how it works.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left text-sm font-medium hover:bg-muted/50 transition-colors"
                >
                  {f.q}
                  <ChevronDown size={16} className={`shrink-0 ml-2 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
