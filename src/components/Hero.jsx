import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import useLanguage from '../hooks/useLanguage'
import Header from './Header'
import Highlight from './Highlight'
import Marker from './Marker'
import heroPhoto from '../assets/sinem.jpg'

// Desktop sizes and spacing are measured from the Figma frame (1440px wide).
export default function Hero() {
  const { content } = useLanguage()
  const { hero } = content

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-surface">
      {/* Decorative shapes from the design */}
      <span aria-hidden="true" className="absolute top-0 left-[28%] hidden size-28 -translate-y-1/2 rounded-full bg-decor lg:block" />
      <span aria-hidden="true" className="absolute top-[540px] right-0 hidden h-14 w-32 translate-x-1/4 rounded-full bg-brand lg:block" />
      <span aria-hidden="true" className="absolute bottom-0 left-[76%] hidden size-30 translate-y-1/2 rounded-full border-[20px] border-decor lg:block" />

      <div className="relative container-hero pt-10 pb-20 lg:pt-[63px] lg:pb-24">
        <Header />

        <div className="mt-10 grid items-start gap-14 lg:mt-[50px] lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="max-w-[655px] lg:pl-[25px]">
            <p className="text-2xl leading-[1.21] tracking-[0.14em] lg:text-[30px]">{hero.greeting}</p>
            <h1
              id="hero-title"
              className="mt-5 text-3xl leading-[1.5] font-medium tracking-[0.01em] lg:mt-[17px] lg:text-[42px] lg:leading-[64px]"
            >
              <Marker barClassName="-left-[15px] right-0 top-[38px] h-[30px] bg-brand max-lg:top-[55%] max-lg:h-[45%] max-lg:-left-3">
                {hero.name}
              </Marker>{' '}
              {hero.intro}
            </h1>

            <ul className="mt-10 flex gap-4 text-4xl leading-none lg:mt-[60px]">
              <li>
                <a href={hero.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="block text-icon transition-colors hover:text-brand">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href={hero.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="block text-icon transition-colors hover:text-brand">
                  <FaGithub />
                </a>
              </li>
            </ul>

            <p className="mt-[22px] text-base leading-8 tracking-[0.05em] lg:text-lg">
              <Highlight text={hero.availability} className="text-accent" />
              <br />
              {hero.contactLabel}{' '}
              <a href={`mailto:${hero.links.email}`} className="text-accent underline underline-offset-4">
                {hero.links.email}
              </a>
            </p>
          </div>

          <div className="relative mx-auto mt-6 w-64 lg:mt-[52px] lg:mr-[19px] lg:w-[340px]">
            <span aria-hidden="true" className="absolute -top-5 -left-5 size-full rounded-3xl bg-brand" />
            <img
              src={heroPhoto}
              alt={hero.photoAlt}
              fetchPriority="high"
              className="relative aspect-square w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
