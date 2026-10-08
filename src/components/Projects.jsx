import useLanguage from '../hooks/useLanguage'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { content } = useLanguage()
  const { projects } = content

  return (
    <section aria-labelledby="projects-title" className="mx-auto max-w-5xl px-6 py-14">
      <h2 id="projects-title" className="text-center text-3xl font-medium">
        {projects.title}
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} labels={projects} />
        ))}
      </div>
    </section>
  )
}
