import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Project Nexus',
    description: 'Real-time deep data telemetry platform.',
    dashboardType: 'analytics',
    details: 'A high-frequency data ingestion and visualization engine processing 2.4 million events per second across distributed isometric clusters.',
  },
  {
    title: 'Void Terminal OS',
    description: 'Decentralized command line interface environment.',
    dashboardType: 'terminal',
    details: 'A fully decentralized terminal environment that operates across the isometric lattice. Commands are executed in parallel across nodes with cryptographic verification.',
  },
  {
    title: 'Quantum Relay',
    description: 'Cross-plane communication bridge.',
    dashboardType: 'analytics',
    details: 'Enables seamless data relay between disparate isometric planes. Features adaptive routing that self-optimizes based on network topology changes.',
  },
  {
    title: 'Obsidian Vault',
    description: 'Immutable data archival system.',
    dashboardType: 'terminal',
    details: 'Write-once, read-many storage architecture with cryptographic chain-linking. Data integrity is verified across the entire lattice every 60 seconds.',
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
              Deployed Constructs
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-zinc-950 mb-8 opacity-0 animate-fade-up delay-100 dark:text-white">
            All <span className="text-gradient">Systems</span>.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
            A directory of every construct deployed across the STARDIVE lattice. Each
            system operates autonomously within its assigned isometric plane.
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
