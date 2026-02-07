const socials = [
  {
    label: 'Email',
    value: 'shekinahkitsoro@gmail.com',
    href: 'mailto:shekinahkitsoro@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shekinah-kitsoro-a44ba1344',
    href: 'https://linkedin.com/in/shekinah-kitsoro-a44ba1344',
  },
  { label: 'GitHub', value: 'github.com/GLISH-prog', href: 'https://github.com/GLISH-prog' },
]

export default function Contact() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="glass rounded-3xl px-8 py-10 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-ink/50">Contact</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Discutons d'un projet</h1>
        <p className="mt-4 text-lg text-ink/80">
          Tu peux me contacter pour un stage, un projet academique ou une collaboration.
          Je reponds rapidement et j'aime clarifier les objectifs dès le debut.
        </p>
        <div className="mt-6 grid gap-4">
          {socials.map((item) => (
            <a
              key={item.label}
              className="block rounded-2xl border border-ink/10 bg-ash/70 px-4 py-3 transition hover:border-ink/30 hover:bg-ash"
              href={item.href}
              target={item.label === 'Email' ? undefined : '_blank'}
              rel={item.label === 'Email' ? undefined : 'noreferrer'}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-ink/50">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-ink">{item.value}</p>
            </a>
          ))}
        </div>
      </div>

      <aside className="space-y-6">
        <div className="glass rounded-3xl px-8 py-10 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Disponibilité</h2>
        <p className="mt-4 text-ink/80">Stage 2026 · 2e année · Mobilité à discuter.</p>
          <div className="mt-6 rounded-2xl bg-ember px-6 py-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Spécialité</p>
            <p className="mt-2 text-lg font-semibold">Developpement web</p>
          </div>
        </div>

        <div className="rounded-3xl bg-ink px-8 py-10 text-ash shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-ash/60">Pitch rapide</p>
          <p className="mt-4 text-2xl font-semibold">
            Un dev curieux, rigoureux et toujours prêt à apprendre.
          </p>
        </div>
      </aside>
    </section>
  )
}
