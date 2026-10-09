import useLanguage from '../hooks/useLanguage'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { content } = useLanguage()
  const { projects } = content

  return (
    <section aria-labelledby="projects-title" className="container-page pt-16 pb-20 md:pt-[82px]">
      <h2 id="projects-title" className="text-center text-4xl font-medium md:text-5xl md:leading-[1.21]">
        {projects.title}
      </h2>

      <div className="mt-12 grid gap-x-16 gap-y-20 md:mt-[68px] md:grid-cols-2">
        {projects.items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} labels={projects} />
        ))}
      </div>
    </section>
  )
}
