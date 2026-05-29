import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main><Outlet /></main>
      <footer className="border-t border-border py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>© 2026 Plastikverzicht — Wissenschaftliches Projekt</span>
          <span>52.5200° N, 13.4050° E</span>
        </div>
      </footer>
    </div>
  );
}