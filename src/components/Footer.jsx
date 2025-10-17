import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} GlassUI. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-white/70">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#">Docs</a>
          <a className="hover:text-white" href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}
