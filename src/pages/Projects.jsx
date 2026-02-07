const projects = [
  {
    title: 'Site e-commerce',
    stack: 'React, Tailwind CSS',
    role: 'Developpeur front',
    description:
      'Site e-commerce complet avec pages produits, panier et parcours utilisateur clair.',
    impact: 'Projet academique principal en React.',
    repo: 'https://github.com/groupe1-react/frontend.git',
    demo: 'https://techstore-88.vercel.app/',
  },
  {
    title: 'Calculatrice Python',
    stack: 'Python',
    role: 'Developpeur',
    description:
      'Calculatrice simple et fiable pour operations de base, avec interface graphique.',
    impact: 'Mise en pratique des bases de Python.',
    repo:'https://github.com/GLISH-prog/calculette-python.git',
  },
  {
    title: 'Portfolio personnel',
    stack: 'React, React Router, Tailwind',
    role: 'Developpeur front',
    description:
      'Site vitrine pour presenter mon profil, mes competences et mes projets.',
    impact: 'Base evolutive pour futurs projets.',
    repo:'https://github.com/GLISH-prog/glish-portfolio.git', 
  },
  {
    title: "Site d'apprentissage du langage Python",
    stack: 'Reactjs,TailwindCss',
    role: 'Developpeur front',
    description:
      'Site developpé pour aider les jeunes passionnés à apprendre Python simplement.',
    impact: 'Aider les jeunes de mon pays à apprendre efficacement.',
    repo:'https://github.com/GLISH-prog/glishCodeApp.git',
  },
  {
    title: "ToDo App",
    stack: 'Reactjs,TailwindCss',
    role: 'Developpeur front',
    description:
      'Simple projet pour la consolidation des concepts React et Tailwind.',
    impact: "Pas d'impact",
  },
]

const cards = [
  {
    label: 'Ce que je construis',
    value: 'Interfaces claires et rapides',
  },
  {
    label: 'Mon rythme',
    value: 'Iteration rapide et tests frequents',
  },
  {
    label: "Ce que j'apprends",
    value: 'Developpement web front-end',
  },
]

export default function Projects() {
  return (
    <section className="space-y-10">
      <div className="glass rounded-3xl px-8 py-10 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-ink/50">Projets</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
          Projets academiques sélectionnés
        </h1>
        <p className="mt-4 text-lg text-ink/75">
          Voici mes projets academiques. J'ajouterai les liens GitHub et les demos.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.title} className="glass rounded-3xl p-8 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-ink">{project.title}</h2>
                <span className="rounded-full bg-ink/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-ink/70">
                  {project.role}
                </span>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ink/50">{project.stack}</p>
              <p className="mt-4 text-ink/80">{project.description}</p>
              <p className="mt-3 text-sm text-ember">Impact: {project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-ink/15 bg-ash/70 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-ash"
                  >
                    Voir le repo
                  </a>
                ) : (
                  <span className="cursor-not-allowed rounded-full border border-ink/10 bg-ash/40 px-4 py-2 text-sm font-semibold text-ink/40">
                    Repo bientot
                  </span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-ink/15 bg-ash/70 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-ash"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="cursor-not-allowed rounded-full border border-ink/10 bg-ash/40 px-4 py-2 text-sm font-semibold text-ink/40">
                    Demo bientot
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          {cards.map((card) => (
            <div key={card.label} className="glass rounded-2xl px-6 py-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{card.label}</p>
              <p className="mt-3 font-display text-lg font-semibold text-ink">{card.value}</p>
            </div>
          ))}
          <div className="rounded-3xl bg-ember px-6 py-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Resultats</p>
            <p className="mt-3 text-2xl font-semibold">5 projets academiques</p>
            <p className="mt-2 text-sm text-white/80">En cours d'évolution et de documentation.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
