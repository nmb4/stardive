import React from 'react'
import IsometricIllustration from '../components/IsometricIllustration'
import FeatureCard from '../components/FeatureCard'
import { TerminalIcon, DatabaseIcon, BoxIcon } from '../components/icons'

export default function Architecture() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4 opacity-0 animate-fade-up">
              <span className="w-2 h-px bg-zinc-400 dark:bg-zinc-500" />
              <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase dark:text-zinc-500">
                Arbeitsweise
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-zinc-950 mb-8 opacity-0 animate-fade-up delay-100 dark:text-white">
              Vom Entwurf zur{' '}
              <span className="text-gradient">Veröffentlichung</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
              STARDIVE ist ein praktisches System aus Ideen, Repos, Vercel-Links,
              Screenshots und schnellen Iterationen. Ziel ist nicht ein perfektes
              Archiv, sondern ein sichtbarer Hub für reale Projekte und neue Aufträge.
            </p>
          </div>
          <div className="flex-1 w-full opacity-0 animate-fade-up delay-300">
            <IsometricIllustration />
          </div>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <FeatureCard
            icon={BoxIcon}
            title="Sichten & sammeln"
            description="GitHub-Repos, Vercel-Deployments, lokale Vibe-Sites und TL-Draw-Timelines werden zusammengeführt, damit klar wird, was bereits existiert und was noch online gehört."
          />
          <FeatureCard
            icon={DatabaseIcon}
            title="Kuratiert zeigen"
            description="Projekte bekommen verständliche Beschreibungen, Screenshots und Kontext: von Shard, Rio, Needs und Boss bis zu Prompt Study, LeLe und dem Ragtree-Tool."
          />
          <FeatureCard
            icon={TerminalIcon}
            title="Rework liefern"
            description="Der kommerzielle Einstieg liegt bei Website-Reworks und Neudesigns: visuell stark, schnell umgesetzt und so dokumentiert, dass man den Sprung vom Altzustand zur neuen Seite sieht."
          />
        </div>

        {/* Deep Dive Stats */}
        <div className="glass-panel p-12 md:p-16 rounded-[2rem]">
          <h2 className="text-3xl font-display font-bold text-zinc-950 mb-12 tracking-tight dark:text-white">
            Launch-Metriken
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 'GitHub', label: 'Quellprojekte' },
              { value: 'Vercel', label: 'Live-Seiten' },
              { value: 'AI', label: 'Design-Track' },
              { value: 'cal.com', label: 'Termine' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-zinc-950 mb-2 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
