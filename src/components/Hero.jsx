import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import useLanguage from '../hooks/useLanguage'
import Header from './Header'
import heroPhoto from '../assets/sinem-1.jpg'

export default function Hero() {
  const { content } = useLanguage()
  const { hero } = content
  const contactHref = hero.links.email ? `mailto:${hero.links.email}` : hero.links.linkedin

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-surface">
      {/* Decorative shapes from the design */}
      <span aria-hidden="true" className="absolute top-0 left-1/3 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-decor md:block" />
      <span aria-hidden="true" className="absolute right-0 bottom-16 hidden h-8 w-24 translate-x-1/3 rounded-full bg-brand md:block" />
      <span aria-hidden="true" className="absolute bottom-0 left-2/3 hidden h-12 w-12 translate-y-1/2 rounded-full border-8 border-decor md:block" />

      <div className="relative mx-auto max-w-5xl px-6 py-8 md:py-10">
        <Header />

        <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <p className="text-xl">{hero.greeting}</p>
            <h1 id="hero-title" className="mt-4 text-3xl leading-snug font-medium md:text-4xl md:leading-snug">
              <span className="relative z-0 inline-block">
                {hero.name}
                <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded bg-brand" />
              </span>{' '}
              {hero.intro}
            </h1>

            <ul className="mt-8 flex gap-4 text-2xl">
              {hero.links.linkedin && (
                <li>
                  <a href={hero.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-brand">
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
              <li>
                <a href={hero.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-brand">
                  <FaGithub />
                </a>
              </li>
            </ul>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              {hero.availability}{' '}
              {contactHref && (
                <a href={contactHref} target="_blank" rel="noreferrer" className="text-brand underline underline-offset-4">
                  {hero.contactLabel}
                </a>
              )}
            </p>
          </div>

          <div className="relative mx-auto w-56 md:w-64">
            <span aria-hidden="true" className="absolute -top-3 -left-3 h-full w-full rounded-3xl bg-brand" />
            <img
              src={heroPhoto}
              alt={hero.photoAlt}
              className="relative aspect-square w-full rounded-3xl object-cover object-[60%_30%] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
