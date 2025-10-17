import React from 'react';
import { motion } from 'framer-motion';
import { Home, Rocket, Star, Settings, Search } from 'lucide-react';

const NavItem = ({ icon: Icon, label }) => (
  <button className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 transition hover:text-white">
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-sm transition group-hover:bg-white/10">
      <Icon size={16} />
    </span>
    <span className="hidden sm:block">{label}</span>
  </button>
);

export default function GlassToolbar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-4 z-20 flex w-full justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pointer-events-auto mx-auto flex w-full max-w-3xl items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <NavItem icon={Home} label="Home" />
          <NavItem icon={Rocket} label="Launch" />
          <NavItem icon={Star} label="Favorites" />
        </div>
        <div className="hidden flex-1 items-center justify-end gap-2 sm:flex">
          <div className="relative">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Search"
              className="w-44 rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none ring-0 transition focus:border-white/20 focus:bg-white/10"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/20">
            <Settings size={16} />
            <span className="hidden md:block">Settings</span>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
