import { SiPostgresql, SiSpringboot } from 'react-icons/si'
import ecommerceImage from '../assets/project-ecommerce.jpg'
import moviesImage from '../assets/project-movies.jpg'

// Screenshots live in the view layer; data.js only knows the project id.
const projectImages = {
  ecommerce: ecommerceImage,
  movies: moviesImage,
}

// Card backgrounds cycle through the design's pastel palette.
const cardColors = ['bg-project-1', 'bg-project-2', 'bg-project-3']

export default function ProjectCard({ project, index, labels }) {
  const image = projectImages[project.id]

  return (
    <article className={`flex flex-col rounded-xl px-10 pt-12 ${cardColors[index % cardColors.length]}`}>
      <h3 className="font-serif text-[32px] font-bold">{project.title}</h3>
      <p className="mt-5 leading-relaxed">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <li key={tag} lang="en" className="rounded-full bg-tag px-5 py-1.5 font-serif text-base font-bold lowercase">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-between gap-4 text-xl font-semibold">
        <a href={project.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
          {labels.githubLabel}
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            {labels.liveLabel}
          </a>
        )}
      </div>

      {/* Laptop mockup; the base overhangs the bottom of the card like in the design */}
      <div className="-mx-10 mt-auto -mb-8 pt-12 transition-transform motion-safe:hover:-translate-y-1">
        <div className="mx-auto w-[76%] rounded-t-2xl border-2 border-b-0 border-[#9a9a9a] bg-black p-2.5 pb-3">
          {image ? (
            <img src={image} alt={project.title} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
          ) : (
            <div aria-hidden="true" className="flex aspect-[16/10] w-full items-center justify-center gap-6 bg-gradient-to-br from-[#6db33f] to-[#336791] text-6xl text-white">
              <SiSpringboot />
              <SiPostgresql />
            </div>
          )}
        </div>
        <div className="relative h-5 rounded-b-[40%_100%] bg-gradient-to-b from-[#e2e2e2] via-[#b9b9b9] to-[#7a7a7a]">
          <span aria-hidden="true" className="absolute top-0 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-[#9a9a9a]" />
        </div>
      </div>
    </article>
  )
}
