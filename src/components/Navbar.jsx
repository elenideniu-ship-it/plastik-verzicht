import { Link } from "react-router-dom";
const links = [
  { to: "/", label: "Übersicht" },
  { to: "/tagebuch", label: "Protokoll" },
  { to: "/analyse", label: "Analysen" },
  { to: "/ergebnisse", label: "Ergebnisse" },
  { to: "/quellen", label: "Quellen" },
];
export default function Navbar() {
  const pathname = window.location.pathname;
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-inter font-semibold text-foreground tracking-tight text-sm">
          PLASTIK<span className="text-muted-foreground font-normal">VERZICHT</span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.to} to={l.to}
              className={`px-3 py-1.5 rounded-md text-xs font-inter font-medium transition-colors ${
                pathname === l.to 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}