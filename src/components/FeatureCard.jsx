import React from 'react'

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="glass-panel glass-card-hover p-10 rounded-[2rem] group cursor-default">
      <div className="w-14 h-14 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 mb-8 shadow-sm transition-all duration-500 group-hover:border-zinc-400 group-hover:bg-zinc-50 group-hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:shadow-lg dark:group-hover:border-zinc-400 dark:group-hover:bg-zinc-800 dark:group-hover:text-white">
        <Icon />
      </div>
      <h3 className="text-xl font-display font-semibold text-zinc-950 mb-4 tracking-tight dark:text-white">
        {title}
      </h3>
      <p className="text-zinc-500 leading-relaxed font-light text-sm dark:text-zinc-400">
        {description}
      </p>
    </div>
  )
}
