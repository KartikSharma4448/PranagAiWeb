import { useState } from "react";
import { ChevronDown, MessageCircle, Phone, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "How does PRANAG-AI work without hardware?", a: "PRANAG-AI uses your smartphone's built-in camera, microphone, and motion sensors combined with advanced AI models to perform comprehensive livestock health diagnostics." },
  { q: "Does it work without internet?", a: "Yes! All core diagnostic features run entirely on your device using edge-optimized AI models. No internet connection needed." },
  { q: "How accurate is the Muzzle-ID system?", a: "Our biometric muzzle recognition achieves 99.2% accuracy, comparable to human fingerprint identification systems." },
  { q: "Which animals are supported?", a: "Currently supports cattle, buffalo, goats, and sheep. We're expanding to poultry and other livestock soon." },
  { q: "Is my data secure?", a: "All biometric data is encrypted end-to-end and processed locally on your device. We follow strict privacy standards." },
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
            Help & <span className="text-gradient-gold">Support</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {/* FAQ */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Frequently Asked Questions</h3>
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

          {/* Contact + Emergency */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-primary/30 outline-none" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-primary/30 outline-none" />
                <textarea placeholder="Your Message" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:ring-2 focus:ring-primary/30 outline-none resize-none" />
                <button className="gradient-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-accent/20 text-primary text-sm font-medium hover:bg-accent/30 transition-colors">
                <MessageCircle size={18} /> AI Chat Support
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors">
                <Phone size={18} /> Emergency Helpline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
