import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'Developpeur junior',
    desc: 'Python, developpement web et environnement Linux pour creer des solutions utiles.',
  },
  {
    title: 'Site e-commerce',
    desc: 'Conception d un site de vente en ligne avec pages produits et parcours client clair.',
  },
  {
    title: 'Site de judo',
    desc: 'Site vitrine pour club de judo: infos, horaires et actualites.',
  },
]

export default function Home() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <div className="glass rounded-3xl px-8 py-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-ink/50">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Etudiant en génie informatique (2e année)
            <span className="block text-ember">Je transforme des idées en applications utiles.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/80">
            Je construis des experiences web modernes avec React, TailwindCss et Python. Ici tu
            trouves mes projets academiques, mes competences et la maniere dont je travaille.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projets"
              className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-1"
            >
              Voir les projets
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-ash"
            >
              Me contacter
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`glass rounded-2xl px-5 py-6 shadow-soft animate-rise`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <aside className="space-y-6">
        <div className="glass rounded-3xl px-8 py-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-ink/50">Focus</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink">Stack &amp; outils</h2>
          <ul className="mt-4 space-y-3 text-ink/80">
            <li>React, React Router, Tailwind, Vite</li>
            <li>Python</li>
            <li>UI propre, composants reutilisables</li>
          </ul>
          <div className="mt-8 rounded-2xl bg-ink px-6 py-6 text-ash">
            <p className="font-display text-2xl font-semibold">2026</p>
            <p className="mt-2 text-sm text-ash/70">
              Recherche de stage: développement web frontend.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-10 text-ash shadow-soft">
          <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-ember/40 blur-2xl" />
          <div className="absolute bottom-8 left-10 h-24 w-24 rounded-full bg-sea/40 blur-2xl" />
          <p className="text-sm uppercase tracking-[0.3em] text-ash/60">Signature</p>
          <h3 className="mt-4 font-display text-2xl font-semibold">
            "Créer des produits simples, utiles et efficaces."
          </h3>
          <p className="mt-4 text-sm text-ash/70">- KITSORO Shekinah Louissel1er</p>
        </div>
      </aside>
    </section>
  )
}
