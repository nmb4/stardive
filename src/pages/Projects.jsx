import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Vercel Sites Directory',
    description: 'Alle veröffentlichten Websites an einem Ort.',
    dashboardType: 'analytics',
    details: 'Die vorhandenen Vercel-Links werden gesammelt, geprüft und als Projekthub mit Screenshots, Kontext und klarer Navigation veröffentlicht.',
  },
  {
    title: 'STARDIVE API',
    description: 'API-Bausteine für Dateien, Projekte und Agenten.',
    dashboardType: 'terminal',
    details: 'Die API bildet den technischen Unterbau für Files, spätere Projektfeeds und kleine Automationen, die aus Experimenten nutzbare Werkzeuge machen.',
  },
  {
    title: 'Reworks & Redesigns',
    description: 'Vorher-Nachher-Arbeiten für bessere Webseiten.',
    dashboardType: 'analytics',
    details: 'Geplant sind Side-by-Side-Vergleiche alter und neuer Seiten, inklusive Bild-Mockups und anschließendem Code-Rebuild für echte Deployments.',
  },
  {
    title: 'AI Models Track',
    description: 'Notizen, Tests und Modellvergleiche aus der Praxis.',
    dashboardType: 'terminal',
    details: 'Der KI-Track sammelt Erfahrungen mit Modellen, Prompt-Studien, Bild-Workflows und Code-Agenten, soweit sie für reale Website- und Tool-Arbeit relevant sind.',
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
              Projekt-Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-zinc-950 mb-8 opacity-0 animate-fade-up delay-100 dark:text-white">
            Alles <span className="text-gradient">sichtbar machen</span>.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
            STARDIVE soll die verstreuten Arbeiten aus GitHub, Vercel und lokalen
            Verzeichnissen bündeln: Websites, Tools, APIs, Designstudien und kommende
            Redesigns.
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
