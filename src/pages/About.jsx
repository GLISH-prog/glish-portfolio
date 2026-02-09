const skills = [
  'HTML , CSS',
  'JavaScript(bases)',
  'Java(bases)',
  'Php(bases)',
  'Reactjs, TailwindCss',
  'Python (bases, tkinter)',
  'Git, organisation de code',
  'Linux(Ubuntu)',
  
]

const timeline = [
  {
    date: '2024 - 2026',
    title: '2e annee en genie informatique',
    place: "Ecole Communautaire de l'enseignement supérieur(ECES)",
  },
  {
    date: '2025',
    title: 'Projet: site e-commerce React',
    place: 'Projet academique',
  },
  {
    date: '2026',
    title: 'Stage recherche',
    place: 'Cible: developpement web',
  },
]

export default function About() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <div className="glass rounded-3xl px-8 py-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-ink/50">A propos</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Mon profil</h1>
          <p className="mt-4 text-lg text-ink/80">
            Je suis étudiant en génie informatique, passionné par la création de solutions
            digitales utiles. J'aime travailler en équipe, apprendre des nouvelles technologies
            et transformer des briefs flous en produits clairs.
          </p>
        </div>

        <div className="glass rounded-3xl px-8 py-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Compétences</h2>
          <ul className="mt-4 grid gap-3 text-ink/80 md:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded-2xl border border-ink/10 bg-ash/70 px-4 py-3">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="glass rounded-3xl px-8 py-10 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Parcours</h2>
          <div className="mt-6 space-y-4">
            {timeline.map((step) => (
              <div key={step.title} className="rounded-2xl border border-ink/10 bg-ash/70 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.25em] text-ink/50">{step.date}</p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</p>
                <p className="text-sm text-ink/70">{step.place}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-ink px-8 py-10 text-ash shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-ash/60">Objectif</p>
          <p className="mt-4 text-2xl font-semibold">
            Construire une base solide en développement fullstack et me lancer dans la cyber-sécurité.
          </p>
        </div>
      </aside>
    </section>
  )
}
