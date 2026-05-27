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
                Systembauplan
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-zinc-950 mb-8 opacity-0 animate-fade-up delay-100 dark:text-white">
              Isometrische{' '}
              <span className="text-gradient">Architektur</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
              Jeder Cluster ist als multidimensionales Gitter entworfen. Daten durchqueren
              isometrische Ebenen ohne zusätzlichen Latenzaufwand. Unten findest du die
              vollständige Struktur des STARDIVE-Protokollstapels.
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
            title="Gitterebene"
            description="Das grundlegende isometrische Raster. Jeder Knoten belegt eine präzise Koordinate im 3D-Raum und ermöglicht deterministisches Datenrouting über Ebenen hinweg, ohne Kollisionen."
          />
          <FeatureCard
            icon={DatabaseIcon}
            title="Vault-Engine"
            description="Persistenter Speicher, verteilt über Void-Ebenen. Datenblöcke werden kryptografisch aufgeteilt und bei Bedarf mit Zugriff im Sub-Millisekundenbereich rekonstruiert."
          />
          <FeatureCard
            icon={TerminalIcon}
            title="Räumliches Protokoll"
            description="Eine Low-Level-Kommunikationsschicht, die Distanz als zentrale Metrik behandelt. Pakete durchlaufen isometrische Pfade und minimieren Hops über planare Nachbarschaften."
          />
        </div>

        {/* Deep Dive Stats */}
        <div className="glass-panel p-12 md:p-16 rounded-[2rem]">
          <h2 className="text-3xl font-display font-bold text-zinc-950 mb-12 tracking-tight dark:text-white">
            Protokollmetriken
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '0.4ms', label: 'Durchschn. Latenz' },
              { value: '99.997%', label: 'Verfügbarkeit' },
              { value: '2.4PB', label: 'Gespeicherte Daten' },
              { value: '256-bit', label: 'Verschlüsselung' },
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
