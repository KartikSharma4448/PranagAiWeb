const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.pranagai.app";

const GooglePlayButton = ({ className = "", dark = false }: { className?: string; dark?: boolean }) => (
  <a
    href={PLAYSTORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border transition-all hover:scale-105 ${
      dark
        ? "bg-background/10 border-background/30 hover:bg-background/20"
        : "bg-accent/30 border-accent hover:bg-accent/50"
    } ${className}`}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.61 1.814L13.793 12 3.61 22.186a1.12 1.12 0 0 1-.61-.99V2.804c0-.413.228-.774.61-.99z" fill="#4285F4" />
      <path d="M17.112 8.688L13.793 12l3.319 3.312 3.752-2.136c.672-.383.672-1.01 0-1.393l-3.752-2.095z" fill="#FBBC04" />
      <path d="M3.61 1.814L13.793 12l3.319-3.312L5.64.644a1.12 1.12 0 0 0-2.03 1.17z" fill="#34A853" />
      <path d="M3.61 22.186L13.793 12l3.319 3.312L5.64 23.356a1.12 1.12 0 0 1-2.03-1.17z" fill="#EA4335" />
    </svg>
    <div className="text-left">
      <p className={`text-[10px] leading-none font-medium ${dark ? "text-background/70" : "text-muted-foreground"}`}>Download on</p>
      <p className={`text-sm font-bold leading-tight ${dark ? "text-background" : "text-foreground"}`}>Google Play</p>
    </div>
  </a>
);

export default GooglePlayButton;
