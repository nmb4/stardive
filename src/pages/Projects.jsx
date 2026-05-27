import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

// Import screenshots
import leleLandingpageImg from '../assets/projects/lele_landingpage.png'
import stardiveApiImg from '../assets/projects/stardive_api.png'
import ragtreeToolImg from '../assets/projects/ragtree_tool.png'
import reworksRedesignsImg from '../assets/projects/reworks_redesigns.png'
import shardPlatformImg from '../assets/projects/shard_platform.png'
import rioPortalImg from '../assets/projects/rio_portal.png'
import needsAppImg from '../assets/projects/needs_app.png'
import bossDashboardImg from '../assets/projects/boss_dashboard.png'
import promptStudyImg from '../assets/projects/prompt_study.png'
import shardLogoSubjectImg from '../assets/projects/shard_logo_subject.png'
import claudeDesignAppstoreImg from '../assets/projects/claude_design_appstore.png'

const featuredProject = {
  title: 'Vercel Sites Directory',
  description: 'Der geplante Einstiegspunkt für alle STARDIVE-Webprojekte.',
  imageSrc: reworksRedesignsImg,
  details: 'Die vorhandenen Vercel-Links werden gesammelt, geprüft und als Projekthub mit Screenshots, Kontext und klarer Navigation veröffentlicht. Ziel ist ein sauberer Überblick über Live-Seiten, Experimente und kommende Reworks.',
  tags: ['Vercel Hub', 'Screenshots', 'Projektindex', 'Launch'],
  status: 'In Aufbau',
  category: 'vercel'
}

const projects = [
  {
    title: 'Shard Platform Redesign',
    description: 'Visuelle Studie und möglicher Rework für Shard.',
    imageSrc: shardPlatformImg,
    details: 'Shard gehört zu den Projekten, die auf der Seite mit Screenshots und Kontext sichtbar werden sollen. Der Fokus liegt auf klarerer Präsentation und einem präziseren Interface-Auftritt.',
    tags: ['Website Rework', 'Branding', 'Screenshot', 'Vercel'],
    status: 'Kandidat',
    category: 'vercel'
  },
  {
    title: 'STARDIVE API Gateway',
    description: 'Backend-Bausteine für Files, Projekte und Automatisierung.',
    imageSrc: stardiveApiImg,
    details: 'Die API bildet den technischen Unterbau für File-Flows, spätere Projektfeeds und kleine Automationen, die aus Experimenten nutzbare Werkzeuge machen.',
    tags: ['API & Backend', 'Files', 'Agenten', 'Automation'],
    status: 'Aktiv',
    category: 'devtools'
  },
  {
    title: 'Ragtree Semantik-Editor',
    description: 'Tool-Kandidat aus dem STARDIVE-Projektfundus.',
    imageSrc: ragtreeToolImg,
    details: 'Das Ragtree-Tool ist eines der Projekte, die mit Screenshots, kurzem Nutzenversprechen und GitHub/Vercel-Kontext in den Hub gehören.',
    tags: ['AI Experimente', 'Tooling', 'Screenshot', 'Dev-Tool'],
    status: 'Einordnen',
    category: 'aiexperiments'
  },
  {
    title: 'Rio Management-Portal',
    description: 'Bestehende Website mit Potenzial für bessere Präsentation.',
    imageSrc: rioPortalImg,
    details: 'Rio ist eines der Vercel-Projekte, die im neuen Index nicht nur verlinkt, sondern visuell erklärt und sauber eingeordnet werden sollen.',
    tags: ['Vercel Website', 'Portfolio', 'Screenshot', 'Rework'],
    status: 'Prüfen',
    category: 'vercel'
  },
  {
    title: 'Needs App Mobile Portal',
    description: 'Mobile-orientierter Projektkandidat für den Hub.',
    imageSrc: needsAppImg,
    details: 'Needs soll als visuelles Beispiel für kleinere Produktideen und mobile Interfaces auftauchen, sobald die vorhandenen Deployments und Screenshots sortiert sind.',
    tags: ['Mobile UI', 'Vercel Website', 'Produktidee', 'Screenshot'],
    status: 'Prüfen',
    category: 'vercel'
  },
  {
    title: 'Boss Dashboard',
    description: 'Dashboard-Projekt aus dem lokalen/Vercel-Bestand.',
    imageSrc: bossDashboardImg,
    details: 'Boss gehört zu den Projekten, die als Screenshots und kurze Fallstudien in den Projekthub aufgenommen werden sollen.',
    tags: ['Dev-Tools', 'Dashboard', 'Screenshot', 'GitHub'],
    status: 'Einordnen',
    category: 'devtools'
  },
  {
    title: 'Prompt-Engineering Labor',
    description: 'Prompt Study und Modellnotizen aus der Praxis.',
    imageSrc: promptStudyImg,
    details: 'Der KI-Track sammelt Erfahrungen mit Modellen, Prompts, Bild-Workflows und Code-Agenten, soweit sie für reale Website- und Tool-Arbeit relevant sind.',
    tags: ['AI Experimente', 'Prompt Study', 'Modelle', 'Notizen'],
    status: 'Aktiv',
    category: 'aiexperiments'
  },
  {
    title: 'Shard Logo-Studie',
    description: 'Branding-Material für Shard und verwandte Seiten.',
    imageSrc: shardLogoSubjectImg,
    details: 'Design-Assets und visuelle Richtungen können später in einer Inspirations- oder Redesign-Unterseite gebündelt werden.',
    tags: ['Design Studie', 'Branding', 'Visuals', 'Inspiration'],
    status: 'Material',
    category: 'vercel'
  },
  {
    title: 'Claude UI Appstore Mockup',
    description: 'UI-Inspiration für KI-native Produktoberflächen.',
    imageSrc: claudeDesignAppstoreImg,
    details: 'Solche visuellen Referenzen helfen, Reworks schneller vorzudenken, bevor ein KI- oder Code-Agent die Oberfläche in Code überführt.',
    tags: ['AI Experimente', 'UI-Konzept', 'Inspiration', 'Rework'],
    status: 'Referenz',
    category: 'aiexperiments'
  },
  {
    title: 'LeLe Portal Rework',
    description: 'Website-Rework-Kandidat mit eigener Projektseite.',
    imageSrc: leleLandingpageImg,
    details: 'LeLe ist eines der Beispiele, die sich für einen Vorher-Nachher-Vergleich und ein sauberes Neudesign eignen.',
    tags: ['Website Rework', 'Landingpage', 'Vercel', 'Vergleich'],
    status: 'Kandidat',
    category: 'reworks'
  }
]

const categories = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'vercel', label: 'Vercel Websites' },
  { id: 'devtools', label: 'Dev-Tools & APIs' },
  { id: 'aiexperiments', label: 'KI-Experimente' },
  { id: 'reworks', label: 'Website Reworks' }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Concise Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4 opacity-0 animate-fade-up">
            <span className="w-2 h-px bg-zinc-400 dark:bg-zinc-500" />
            <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase dark:text-zinc-500">
              Projekt-Index
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-950 mb-6 opacity-0 animate-fade-up delay-100 dark:text-white">
            Ausgewählte <span className="text-gradient">Projekte & Experimente</span>
          </h1>
          <p className="text-base text-zinc-500 max-w-2xl leading-relaxed font-light opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
            Ein komprimierter Überblick über Vercel-Websites, Backend-APIs,
            KI-Modellstudien und Website-Reworks. Der Hub macht sichtbar, was schon
            existiert und was als Nächstes online gehört.
          </p>
        </div>

        {/* Featured Project Area */}
        {selectedCategory === 'all' && (
          <div className="mb-20 opacity-0 animate-fade-up delay-300">
            <div className="glass-panel p-6 md:p-10 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-zinc-200/80 dark:bg-zinc-900/20 dark:border-zinc-800/50">
              <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 relative group bg-[#fcfcfd] dark:bg-[#050505]">
                <img 
                  src={featuredProject.imageSrc} 
                  alt={featuredProject.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full border shadow-sm bg-white/95 border-zinc-200 text-emerald-600 dark:bg-zinc-950/90 dark:border-zinc-800 dark:text-emerald-400 backdrop-blur-md">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    {featuredProject.status}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    <span className="font-mono text-[10px] tracking-widest text-indigo-500 uppercase font-bold dark:text-indigo-400">
                      Hervorgehobenes Projekt
                    </span>
                  </div>
                  <h2 className="text-3xl font-display font-bold tracking-tight text-zinc-950 mb-3 dark:text-white">
                    {featuredProject.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-300 font-light text-sm leading-relaxed mb-4">
                    {featuredProject.description}
                  </p>
                  <p className="text-zinc-400 dark:text-zinc-500 font-light text-xs leading-relaxed mb-6">
                    {featuredProject.details}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-400 border border-zinc-200/30 dark:border-zinc-700/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 bg-zinc-950 text-white dark:bg-white dark:text-black px-6 py-3 font-semibold text-xs rounded-full transition-transform duration-200 hover:scale-[1.03]" aria-label="Featured Dashboard öffnen">
                    Dashboard öffnen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10 opacity-0 animate-fade-up delay-200">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-black'
                  : 'bg-white/60 border border-zinc-200/80 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800 dark:bg-zinc-900/30 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200 backdrop-blur-sm'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Dense Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.title} 
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${(idx % 3) * 80 + 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                status={project.status}
                details={project.details}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
