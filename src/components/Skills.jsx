import useLanguage from '../hooks/useLanguage'
import skillIcons from './skillIcons'

export default function Skills() {
  const { content } = useLanguage()
  const { skills } = content

  return (
    <section aria-labelledby="skills-title" className="mx-auto max-w-5xl px-6 py-14">
      <h2 id="skills-title" className="text-center text-3xl font-medium">
        {skills.title}
      </h2>

      <ul className="mt-10 grid grid-cols-3 justify-items-center gap-8 sm:grid-cols-6">
        {skills.items.map((skill) => {
          const { Icon, tile } = skillIcons[skill]
          return (
            <li key={skill} className="flex flex-col items-center gap-3">
              <span
                aria-hidden="true"
                className={`flex h-16 w-16 items-center justify-center rounded-lg text-4xl shadow-md transition-transform motion-safe:hover:-translate-y-1 ${tile}`}
              >
                <Icon />
              </span>
              <span className="text-xs font-medium tracking-wide text-muted uppercase">{skill}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
