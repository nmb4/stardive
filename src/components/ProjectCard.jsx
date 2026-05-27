import React from 'react'
import MockDashboard from './MockDashboard'
import { ExternalLinkIcon } from './icons'

export default function ProjectCard({ title, description, dashboardType }) {
  return (
    <div className="group rounded-[2rem] overflow-hidden bg-white border border-zinc-200/80 transition-all duration-300 hover:border-zinc-400 hover:shadow-md dark:bg-zinc-900/20 dark:border-zinc-800/50 dark:hover:border-zinc-600 dark:hover:shadow-none">
      <div className="aspect-[4/3] w-full bg-[#fcfcfd] relative overflow-hidden border-b border-zinc-200/80 dark:bg-[#050505] dark:border-zinc-800/50">
        <div className="absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100 dark:opacity-50">
          <MockDashboard type={dashboardType} />
        </div>
      </div>
      <div className="p-8 flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-display font-semibold text-zinc-950 mb-2 transition-colors group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
            {title}
          </h3>
          <p className="text-zinc-500 font-light text-sm">{description}</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 transition-all duration-200 group-hover:bg-zinc-950 group-hover:text-white dark:bg-zinc-800/50 dark:text-zinc-400 dark:group-hover:bg-white dark:group-hover:text-black" aria-label={`${title} öffnen`}>
          <ExternalLinkIcon />
        </button>
      </div>
    </div>
  )
}
