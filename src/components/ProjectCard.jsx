import React from 'react'
import MockDashboard from './MockDashboard'
import { ExternalLinkIcon } from './icons'

export default function ProjectCard({ title, description, dashboardType, imageSrc, tags, status, details }) {
  return (
    <div className="group rounded-[2rem] overflow-hidden bg-white border border-zinc-200/80 transition-all duration-300 hover:border-zinc-400 hover:shadow-md dark:bg-zinc-900/20 dark:border-zinc-800/50 dark:hover:border-zinc-600 dark:hover:shadow-none flex flex-col h-full">
      <div className="aspect-[4/3] w-full bg-[#fcfcfd] relative overflow-hidden border-b border-zinc-200/80 dark:bg-[#050505] dark:border-zinc-800/50">
        <div className="absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100 dark:opacity-50">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <MockDashboard type={dashboardType} />
          )}
        </div>
        {status && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono rounded-full border shadow-sm bg-white/90 border-zinc-200/80 text-zinc-800 dark:bg-zinc-950/80 dark:border-zinc-800 dark:text-zinc-200 backdrop-blur-md">
              <span className={`w-1.5 h-1.5 rounded-full ${
                status === 'Aktiv' || status === 'Produktion' || status === 'Live'
                  ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse'
                  : status === 'Beta' || status === 'Entwicklung'
                  ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse'
                  : 'bg-zinc-400'
              }`} />
              {status}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div className="space-y-4">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-500 dark:bg-zinc-800/60 dark:text-zinc-400 border border-zinc-200/30 dark:border-zinc-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div>
            <h3 className="text-2xl font-display font-semibold text-zinc-950 mb-2 transition-colors group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
              {title}
            </h3>
            <p className="text-zinc-500 font-light text-sm leading-relaxed dark:text-zinc-400">
              {description}
            </p>
          </div>

          {details && (
            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-light leading-relaxed border-t border-zinc-100 pt-3 dark:border-zinc-800/40">
              {details}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
            Details & Kontext
          </span>
          <button 
            className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 transition-all duration-200 group-hover:bg-zinc-950 group-hover:text-white dark:bg-zinc-800/50 dark:text-zinc-400 dark:group-hover:bg-white dark:group-hover:text-black" 
            aria-label={`${title} öffnen`}
          >
            <ExternalLinkIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
