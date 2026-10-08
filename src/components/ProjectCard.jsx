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
    <article
      className={`flex flex-col rounded-2xl p-7 transition-transform motion-safe:hover:-translate-y-1 ${
        cardColors[index % cardColors.length]
      }`}
    >
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-tag px-3 py-1 text-xs font-semibold">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between gap-4 text-sm font-semibold">
        <a href={project.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
          {labels.githubLabel}
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            {labels.liveLabel}
          </a>
        )}
      </div>

      {/* Laptop mockup */}
      <div aria-hidden={!image} className="mt-auto pt-8">
        <div className="mx-auto w-11/12 rounded-t-xl bg-screen p-2 pb-3">
          {image ? (
            <img src={image} alt={project.title} loading="lazy" className="aspect-[16/10] w-full rounded object-cover object-top" />
          ) : (
            <div className="flex aspect-[16/10] w-full items-center justify-center gap-6 rounded bg-gradient-to-br from-[#6db33f] to-[#336791] text-5xl text-white">
              <SiSpringboot />
              <SiPostgresql />
            </div>
          )}
        </div>
        <div className="h-3 rounded-b-xl bg-gradient-to-b from-gray-400 to-gray-500" />
      </div>
    </article>
  )
}
