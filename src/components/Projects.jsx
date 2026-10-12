import useLanguage from '../hooks/useLanguage'
import ProjectCard from './ProjectCard'

function Projects() {
  const { content } = useLanguage()
  const { projects } = content

  return (
    <section aria-labelledby="projects-title" className="container-content pt-16 pb-20 md:pt-[82px]">
      <h2 id="projects-title" className="text-center text-4xl font-medium md:text-5xl md:leading-[1.21]">
        {projects.title}
      </h2>

      <div className="mt-12 grid gap-x-16 gap-y-20 md:mt-[68px] lg:grid-cols-2">
        {projects.list.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} githubText={projects.githubText} liveText={projects.liveText} />
        ))}
      </div>
    </section>
  )
}

export default Projects
