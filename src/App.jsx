import { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Projets', to: '/projets' },
  { label: 'A propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

export default function App() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-grain">
      <header className="sticky top-0 z-20">
        <div className="glass mx-4 mt-4 rounded-2xl px-6 py-4 shadow-soft md:mx-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-ink">
                KITSORO Shekinah Louissel1er
              </p>
              <p className="text-sm text-ink/70">
                Etudiant en génie informatique · 2e année
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <nav className="flex flex-wrap gap-4 text-sm font-medium">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-2 transition ${
                        isActive
                          ? 'bg-ink text-ash'
                          : 'bg-ash/60 text-ink hover:bg-ink hover:text-ash'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                aria-pressed={isDark}
                className="rounded-full border border-ink/15 bg-ash/70 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-ink transition hover:bg-ink hover:text-ash"
              >
                {isDark ? 'Mode clair' : 'Mode sombre'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-4 mt-10 pb-16 md:mx-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="mx-4 pb-8 md:mx-10">
        <div className="glass rounded-2xl px-6 py-4 text-sm text-ink/70">
          <p>Disponible pour un stage ou un projet académique collaboratif.</p>
        </div>
      </footer>
    </div>
  )
}
