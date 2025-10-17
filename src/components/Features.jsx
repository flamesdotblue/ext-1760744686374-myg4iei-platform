import React from 'react';
import { Star, Shield, Sparkles, Cpu } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Glassmorphic Aesthetics',
    desc: 'Translucent layers with subtle borders and blur for a premium, futuristic feel.'
  },
  {
    icon: Cpu,
    title: '3D Interactive Hero',
    desc: 'A responsive Spline scene provides depth and motion without sacrificing performance.'
  },
  {
    icon: Star,
    title: 'Polished Micro-Interactions',
    desc: 'Smooth transitions and hover states that delight without distraction.'
  },
  {
    icon: Shield,
    title: 'Accessible & Responsive',
    desc: 'Thoughtful contrast, keyboard-friendly targets, and adaptable layout.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">Designed for Clarity</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
        Build elegant toolbars and surfaces that feel at home in modern operating systems.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <f.icon size={18} />
            </div>
            <h3 className="text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-sm text-white/75">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
