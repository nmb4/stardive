import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { MenuIcon, MoonIcon, SunIcon } from '../components/icons'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/architecture', label: 'Architecture' },
  { to: '/projects', label: 'Constructs' },
  { to: '/protocol', label: 'Protocol' },
]

export default function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )
  const location = useLocation()

  useEffect(() => {
    let animationFrameId = null
    const handleScroll = () => {
      if (animationFrameId !== null) return
      animationFrameId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20)
        animationFrameId = null
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (nextTheme) => {
      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      setTheme(nextTheme)
    }

    const storedTheme = localStorage.getItem('stardive-theme')
    applyTheme(storedTheme || (mediaQuery.matches ? 'dark' : 'light'))

    const handleSystemThemeChange = (event) => {
      if (!localStorage.getItem('stardive-theme')) {
        applyTheme(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('stardive-theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setTheme(nextTheme)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Grid & Smooth Ambient Light Orbs */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-[-2]" />
      <div className="fixed top-[10%] left-[-10%] w-[50%] h-[50%] bg-zinc-200/50 rounded-full blur-[140px] pointer-events-none z-[-1] animate-glow-shift dark:bg-zinc-800/20" />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-300/40 rounded-full blur-[120px] pointer-events-none z-[-1] animate-glow-shift dark:bg-zinc-700/15"
        style={{ animationDelay: '3s' }}
      />

      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#f9f9fb]/90 backdrop-blur-xl border-b border-zinc-200/50 py-4 shadow-sm dark:bg-[#020202]/80 dark:border-white/5 dark:shadow-2xl'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center bg-white transition-all duration-200 group-hover:border-zinc-500 group-hover:shadow-[0_0_15px_rgba(9,9,11,0.05)] dark:border-zinc-600/50 dark:bg-zinc-900/80 dark:group-hover:border-zinc-400 dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <div className="w-2 h-2 bg-zinc-900 rounded-full animate-pulse-slow shadow-[0_0_8px_rgba(9,9,11,0.4)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>
            <span className="font-display font-bold tracking-[0.25em] text-lg text-zinc-950 dark:text-white">
              STARDIVE
            </span>
          </Link>

          <nav className="hidden md:flex gap-10 text-sm font-mono text-zinc-500 tracking-wide dark:text-zinc-400">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-zinc-950 dark:text-white' : 'hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/protocol" className="hidden md:flex items-center gap-2 font-mono text-xs border border-zinc-200 hover:border-zinc-400 px-6 py-2.5 rounded-full transition-all duration-200 text-zinc-800 bg-white hover:bg-zinc-50 backdrop-blur-md shadow-sm group dark:border-zinc-700 dark:text-white dark:bg-zinc-900/50 dark:hover:bg-zinc-800 dark:shadow-lg">
              Init Sequence
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full group-hover:bg-emerald-500 transition-colors" />
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all duration-200 hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-white"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="md:hidden p-2 text-zinc-500 hover:text-zinc-950 bg-white rounded-full border border-zinc-200 backdrop-blur-md dark:text-zinc-400 dark:hover:text-white dark:bg-zinc-900/50 dark:border-zinc-800"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mx-6 mt-4 rounded-2xl border border-zinc-200 bg-white/90 p-3 shadow-lg backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block rounded-xl px-4 py-3 font-mono text-sm transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white'
                      : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-white dark:bg-[#020202]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-zinc-300 flex items-center justify-center bg-zinc-100 shadow-inner dark:border-zinc-600 dark:bg-zinc-900" />
            <span className="font-display font-bold tracking-[0.2em] text-sm text-zinc-800 dark:text-zinc-300">
              STARDIVE
            </span>
          </div>

          <div className="text-xs font-mono text-zinc-600 tracking-wider dark:text-zinc-600">
            &copy; 2026 STARDIVE Systems.
          </div>

          <div className="flex gap-8 text-sm text-zinc-400 font-medium dark:text-zinc-500">
            <a href="#" className="hover:text-zinc-950 transition-colors duration-200 dark:hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-zinc-950 transition-colors duration-200 dark:hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-zinc-950 transition-colors duration-200 dark:hover:text-white">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
