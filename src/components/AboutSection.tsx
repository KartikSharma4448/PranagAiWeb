import { Fingerprint, Eye, Volume2, WifiOff, FileBarChart, FolderOpen, Bot, CloudUpload } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Fingerprint, title: "Muzzle-ID Identification", desc: "Recognize each animal using its unique muzzle pattern for better tracking." },
  { icon: Eye, title: "Skin Health Analysis", desc: "Analyze cattle skin images to identify visible health risk indicators." },
  { icon: Volume2, title: "Acoustic AI Screening", desc: "Audio-based analysis detects health-related signals from cattle sounds." },
  { icon: WifiOff, title: "Offline-Ready AI", desc: "On-device workflows for rural and low-network areas." },
  { icon: FileBarChart, title: "Health Reports & Alerts", desc: "Generate health insights, risk status, and recommendations after each scan." },
  { icon: FolderOpen, title: "Digital Cattle Records", desc: "Manage cattle profiles, scan history, and health logs in one place." },
  { icon: Bot, title: "AI Assistant Support", desc: "Understand reports, review data, and get guidance more easily." },
  { icon: CloudUpload, title: "Secure Cloud Sync", desc: "Sync data, profiles, and health records securely across sessions." },
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="about" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About the Project</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            What is <span className="text-gradient-gold">PRANA-G AI</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            PRANA-G AI is a smart livestock health management solution built for dairy farmers and farm teams. 
            The app combines cattle identification, image-based health analysis, sound-based screening, alerts, 
            records, and AI assistance in one platform. Its goal is to make cattle monitoring faster, simpler, 
            and more actionable — even in low-connectivity environments.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {features.map((f, i) => (
            <div key={i} className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <f.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
