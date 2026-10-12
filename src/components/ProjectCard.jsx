import { SiPostgresql, SiSpringboot } from 'react-icons/si'
import ecommerceImage from '../assets/ecommerce.jpg'
import moviesImage from '../assets/movies.jpg'

// Screenshots by project id (the backend project has no screenshot)
const images = {
  1: ecommerceImage,
  2: moviesImage,
}

// Card colors from the design, used in order
const colors = ['bg-project-1', 'bg-project-2', 'bg-project-3']

function ProjectCard({ project, index, githubText, liveText }) {
  const image = images[project.id]

  return (
    <article className={`flex flex-col rounded-xl px-6 pt-11 sm:px-10 ${colors[index % colors.length]}`}>
      <h3 className="font-serif text-[29px] font-bold tracking-[0.04em]">{project.title}</h3>
      <p className="mt-5 text-[15px] leading-6 tracking-[0.025em]">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2.5">
        {project.tags.map((tag) => (
          <li key={tag} lang="en" className="flex h-8 items-center rounded-full bg-tag px-[21px] font-serif text-base font-bold tracking-[0.01em]">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-9 flex justify-between gap-4 text-[19px] font-medium tracking-[0.03em]">
        <a href={project.github} target="_blank" rel="noreferrer" className="hover:underline">
          {githubText}
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="hover:underline">
            {liveText}
          </a>
        )}
      </div>

      {/* laptop picture: screen + base, the base goes a little below the card */}
      <div className="-mx-6 mt-auto -mb-8 pt-12 sm:-mx-10">
        <div className="mx-auto w-[75%] rounded-t-2xl border-2 border-b-0 border-[#9a9a9a] bg-black p-2.5 pb-3">
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

export default ProjectCard
