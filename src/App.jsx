import useTheme from './hooks/useTheme'
import useLanguage from './hooks/useLanguage'

// Temporary page to check that theme and language switching work.
// The real sections will replace this in the next steps.
function App() {
  const { theme, toggleTheme } = useTheme()
  const { content, toggleLanguage } = useLanguage()
  const { changeLanguage } = content.header

  return (
    <div className="min-h-screen bg-white p-10 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-end gap-4 text-sm font-bold">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? content.header.lightMode : content.header.darkMode}
        </button>
        <span>|</span>
        <button onClick={toggleLanguage}>
          {changeLanguage.before}
          {changeLanguage.highlight}
          {changeLanguage.after}
        </button>
      </div>

      <p className="mt-10 text-xl">{content.hero.greeting}</p>
      <h1 className="mt-2 text-3xl font-bold">
        {content.hero.name} {content.hero.intro}
      </h1>

      <h2 className="mt-10 text-2xl">{content.skills.title}</h2>
      <ul className="mt-2">
        {content.skills.list.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
