import useLanguage from '../hooks/useLanguage'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { content } = useLanguage()
  const { projects } = content

  return (
    <section aria-labelledby="projects-title" className="container-page py-20">
      <h2 id="projects-title" className="text-center text-4xl font-medium md:text-[40px]">
        {projects.title}
      </h2>

      <div className="mt-12 grid gap-x-16 gap-y-20 md:grid-cols-2">
        {projects.items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} labels={projects} />
        ))}
      </div>
    </section>
  )
}
