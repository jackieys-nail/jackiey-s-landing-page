const work = [
  { src: '/portfolio/gelx-nude.png', label: 'Gel-X Nude', span: 'row-span-2' },
  { src: '/portfolio/volume-lash.png', label: 'Volume Lashes', span: '' },
  { src: '/portfolio/gelx-detailed.png', label: 'Detailed Design', span: '' },
  { src: '/portfolio/classic-lash.png', label: 'Classic Lashes', span: '' },
  { src: '/portfolio/gelx-minimal.png', label: 'Minimal Design', span: '' },
  { src: '/portfolio/lash-lift.png', label: 'Lash Lift', span: 'row-span-2' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-sand/60 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
          The Portfolio
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Real Work. Real Results.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-muted-foreground">
          Every photo is a service performed by Jaqueline. Follow{' '}
          <a
            href="https://instagram.com/jackieymata"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold underline-offset-4 transition-colors hover:underline"
          >
            @jackieymata
          </a>{' '}
          for daily inspiration.
        </p>
        <div className="gold-rule mx-auto mt-6 h-px w-24" />
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[260px] md:grid-cols-3">
        {work.map((item) => (
          <figure
            key={item.label}
            className={`group relative overflow-hidden rounded-2xl ${item.span}`}
          >
            <img
              src={item.src || '/placeholder.svg'}
              alt={item.label}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="font-serif text-lg font-medium text-cream">
                {item.label}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
