import useLanguage from '../hooks/useLanguage'
import skillIcons from './skillIcons'

function Skills() {
  const { content } = useLanguage()
  const { skills } = content

  return (
    <section aria-labelledby="skills-title" className="relative overflow-hidden bg-page">
      <span aria-hidden="true" className="absolute bottom-12 left-0 hidden h-12 w-28 -translate-x-1/4 rounded-full bg-decor-dark md:block" />
      <span aria-hidden="true" className="absolute right-0 -bottom-8 hidden size-30 translate-x-1/2 rounded-full border-[20px] border-brand md:block" />

      <div className="relative container-content pt-16 pb-20 md:pt-[86px] md:pb-[132px]">
        <h2 id="skills-title" className="text-center text-4xl font-medium md:text-5xl md:leading-[1.21]">
          {skills.title}
        </h2>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-8 md:mt-14 xl:gap-x-9">
          {skills.list.map((skill) => {
            const { Icon, tile } = skillIcons[skill]
            return (
              // lang="en" so the Turkish uppercase rule doesn't turn "i" into "İ"
              <li key={skill} lang="en" className="flex min-w-24 flex-col items-center gap-3 md:min-w-[120px]">
                <span aria-hidden="true" className={`flex size-24 items-center justify-center rounded-sm text-6xl md:size-[120px] md:text-7xl ${tile}`}>
                  <Icon />
                </span>
                <span className="text-lg whitespace-nowrap text-muted uppercase md:text-2xl">{skill}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Skills
