import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Projekt Nexus',
    description: 'Echtzeit-Plattform für Deep-Data-Telemetrie.',
    dashboardType: 'analytics',
    details: 'Eine Hochfrequenz-Engine für Datenaufnahme und Visualisierung, die 2,4 Millionen Ereignisse pro Sekunde über verteilte isometrische Cluster verarbeitet.',
  },
  {
    title: 'Void Terminal OS',
    description: 'Dezentrale Kommandozeilenumgebung.',
    dashboardType: 'terminal',
    details: 'Eine vollständig dezentrale Terminalumgebung, die über das isometrische Gitter operiert. Befehle werden parallel über Knoten ausgeführt und kryptografisch verifiziert.',
  },
  {
    title: 'Quanten-Relay',
    description: 'Kommunikationsbrücke zwischen Ebenen.',
    dashboardType: 'analytics',
    details: 'Ermöglicht nahtlose Datenweiterleitung zwischen unterschiedlichen isometrischen Ebenen. Adaptives Routing optimiert sich selbst anhand von Änderungen der Netzwerktopologie.',
  },
  {
    title: 'Obsidian-Vault',
    description: 'Unveränderliches Datenarchiv.',
    dashboardType: 'terminal',
    details: 'Write-once-read-many-Speicherarchitektur mit kryptografischer Verkettung. Die Datenintegrität wird alle 60 Sekunden über das gesamte Gitter geprüft.',
  },
]

export default function Projects() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-4 opacity-0 animate-fade-up">
            <span className="w-2 h-px bg-zinc-400 dark:bg-zinc-500" />
            <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase dark:text-zinc-500">
              Bereitgestellte Konstrukte
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-zinc-950 mb-8 opacity-0 animate-fade-up delay-100 dark:text-white">
            Alle <span className="text-gradient">Systeme</span>.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
            Ein Verzeichnis aller Konstrukte, die im STARDIVE-Gitter bereitgestellt sind.
            Jedes System arbeitet autonom in seiner zugewiesenen isometrischen Ebene.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="opacity-0 animate-fade-up">
              <ProjectCard
                title={project.title}
                description={project.description}
                dashboardType={project.dashboardType}
              />
              <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-light px-2 dark:text-zinc-600">
                {project.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
