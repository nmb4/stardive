import React from 'react'

export default function MockDashboard({ type }) {
  if (type === 'analytics') {
    return (
      <div className="w-full h-full bg-[#fcfcfd] p-6 flex flex-col gap-4 relative overflow-hidden dark:bg-[#0a0a0c]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[40px] rounded-full dark:bg-indigo-500/10" />
        <div className="flex justify-between items-center mb-2">
          <div className="w-24 h-3 bg-zinc-200 rounded-full dark:bg-zinc-800" />
          <div className="w-8 h-3 bg-zinc-200 rounded-full dark:bg-zinc-800" />
        </div>
        <div className="flex gap-4 mb-2">
          <div className="flex-1 h-16 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl border border-zinc-200/60 dark:from-zinc-800/50 dark:to-zinc-900/50 dark:border-zinc-800" />
          <div className="flex-1 h-16 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl border border-zinc-200/60 dark:from-zinc-800/50 dark:to-zinc-900/50 dark:border-zinc-800" />
          <div className="flex-1 h-16 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl border border-zinc-200/60 dark:from-zinc-800/50 dark:to-zinc-900/50 dark:border-zinc-800" />
        </div>
        <div className="flex-1 bg-gradient-to-t from-zinc-100/55 to-transparent rounded-xl border border-zinc-200/60 relative flex items-end p-4 dark:from-zinc-900/80 dark:border-zinc-800/50">
          <div className="w-full flex justify-between items-end h-full gap-2 opacity-60">
            {[40, 70, 45, 90, 65, 85, 55, 100].map((h, i) => (
              <div
                key={i}
                className="w-full bg-zinc-300 rounded-t-sm dark:bg-zinc-700"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-[#fcfcfd] p-6 flex flex-col gap-4 relative overflow-hidden dark:bg-[#0a0a0c]">
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/5 blur-[50px] rounded-full dark:bg-emerald-500/10" />
      <div className="flex gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="space-y-3">
        <div className="w-3/4 h-2 bg-zinc-200 rounded-full dark:bg-zinc-800" />
        <div className="w-1/2 h-2 bg-zinc-200 rounded-full dark:bg-zinc-800" />
        <div className="w-5/6 h-2 bg-zinc-200 rounded-full dark:bg-zinc-800" />
      </div>
      <div className="mt-auto p-4 bg-zinc-50/80 rounded-xl border border-zinc-200/60 font-mono text-[10px] text-zinc-500 leading-relaxed dark:bg-zinc-900/50 dark:border-zinc-800">
        {'>'} initializing cluster network...<br />
        {'>'} verifying cryptographic hashes... [OK]<br />
        {'>'} connection established at 0.4ms
      </div>
    </div>
  )
}
