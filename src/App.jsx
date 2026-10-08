import useTheme from './hooks/useTheme'
import useLanguage from './hooks/useLanguage'

// Temporary shell to verify theme + language switching.
// Section components will replace this once the design is in.
export default function App() {
  const { isDark, toggleTheme } = useTheme()
  const { content, toggleLanguage } = useLanguage()

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-gray-100">
      <header className="flex justify-end gap-6 p-6 text-sm font-bold">
        <button type="button" onClick={toggleTheme}>
          {isDark ? content.header.lightMode : content.header.darkMode}
        </button>
        <button type="button" onClick={toggleLanguage}>
          {content.header.switchLanguage}
        </button>
      </header>
    </div>
  )
}
