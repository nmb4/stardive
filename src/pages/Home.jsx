import React from 'react'
import { Link } from 'react-router-dom'
import IsometricIllustration from '../components/IsometricIllustration'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'
import { BoxIcon, DatabaseIcon, TerminalIcon, ArrowRightIcon } from '../components/icons'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1 flex flex-col gap-8 z-10 relative">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-zinc-200 rounded-full w-fit bg-white/60 backdrop-blur-md shadow-sm opacity-0 animate-fade-up dark:border-zinc-700/50 dark:bg-zinc-900/40 dark:shadow-lg">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:bg-green-400 dark:shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase dark:text-zinc-300">
                System Online v2.4
              </span>
            </div>

            <h1 className="text-6xl md:text-[5.5rem] font-display font-bold tracking-tight text-zinc-950 leading-[1.05] opacity-0 animate-fade-up delay-100 dark:text-white">
              <span className="text-gradient">Structure.</span>
              <br />
              <span className="text-gradient-dark italic pr-4 font-semibold">Void.</span>
              <br />
              <span className="text-gradient">Order.</span>
            </h1>

            <p className="text-lg text-zinc-500 max-w-md leading-relaxed font-light tracking-wide opacity-0 animate-fade-up delay-200 dark:text-zinc-400">
              Build the impossible with isometric precision. STARDIVE offers fluid
              infrastructure for deep-data storage and frictionless spatial computing.
            </p>

            <div className="flex flex-wrap gap-5 pt-4 opacity-0 animate-fade-up delay-300">
              <Link to="/projects" className="flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 font-semibold text-sm rounded-full transition-all duration-200 ease-out hover:scale-105 hover:bg-zinc-800 hover:shadow-[0_10px_30px_rgba(9,9,11,0.15)] dark:bg-white dark:text-black dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Deploy Node <ArrowRightIcon />
              </Link>
              <Link to="/protocol" className="flex items-center gap-2 px-8 py-4 font-mono text-sm border border-zinc-200 text-zinc-600 backdrop-blur-md transition-all duration-200 ease-out rounded-full shadow-sm hover:text-zinc-950 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700/60 dark:text-zinc-300 dark:shadow-lg dark:hover:text-white dark:hover:border-zinc-400 dark:hover:bg-zinc-800/40">
                Read Documentation
              </Link>
            </div>

            {/* Trusted By / Stats */}
            <div className="flex flex-col gap-4 pt-12 mt-4 opacity-0 animate-fade-up delay-400">
              <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-[0.2em] dark:text-zinc-600">
                Trusted by deep-tech pioneers
              </div>
              <div className="flex gap-8 items-center text-zinc-400 font-display font-bold text-xl tracking-tighter opacity-70 grayscale dark:text-zinc-500 dark:opacity-50">
                <div>ACME_CORP</div>
                <div>NEXUS</div>
                <div>VOID_SYS</div>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:block order-1 lg:order-2 w-full relative opacity-0 animate-fade-up delay-200">
            <IsometricIllustration />
          </div>
        </div>
      </section>

      {/* Features/Architecture Section */}
      <section className="py-32 relative z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-950 mb-6 dark:text-white">
                Architectural Fluidity.
              </h2>
              <p className="text-lg text-zinc-500 font-light leading-relaxed dark:text-zinc-400">
                Our isometric vault clusters are designed with frictionless boundaries,
                ensuring seamless data flow even in hostile network environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BoxIcon}
              title="Modular Synthesis"
              description="Deploy isolated architectural blocks. Stack, scale, and reorganize data structures with frictionless transitions and zero downtime."
            />
            <FeatureCard
              icon={DatabaseIcon}
              title="Void Storage"
              description="Data is fluidly distributed across isometric planes. Perfect cryptographic darkness wrapped in a seamless access protocol."
            />
            <FeatureCard
              icon={TerminalIcon}
              title="Command Protocol"
              description="Interact with your clusters via our low-level API or the tactile terminal interface. Built for absolute, smooth control."
            />
          </div>
        </div>
      </section>

      {/* Projects / Constructs Section */}
      <section className="py-32 relative z-10 bg-[#fafafc] dark:bg-[#040405]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-px bg-zinc-400 dark:bg-zinc-500" />
              <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase dark:text-zinc-500">
                Deployed Constructs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-950 mb-6 dark:text-white">
              Systems in the Void.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Project Nexus"
              description="Real-time deep data telemetry platform."
              dashboardType="analytics"
            />
            <ProjectCard
              title="Void Terminal OS"
              description="Decentralized command line interface environment."
              dashboardType="terminal"
            />
          </div>
        </div>
      </section>
    </>
  )
}
