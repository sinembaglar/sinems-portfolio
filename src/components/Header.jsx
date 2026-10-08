import useTheme from '../hooks/useTheme'
import useLanguage from '../hooks/useLanguage'
import Highlight from './Highlight'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { content, toggleLanguage } = useLanguage()
  const { header } = content

  return (
    <header className="flex justify-end">
      <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] whitespace-nowrap text-muted sm:gap-3 sm:text-[15px]">
        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          onClick={toggleTheme}
          className="flex items-center gap-2"
        >
          <span
            aria-hidden="true"
            className="relative inline-flex h-6 w-[55px] items-center rounded-full bg-toggle-track transition-colors"
          >
            <span
              className={`absolute h-4 w-4 rounded-full bg-toggle-knob transition-transform duration-300 ${
                isDark ? 'translate-x-1' : 'translate-x-[35px]'
              }`}
            />
          </span>
          {isDark ? header.lightMode : header.darkMode}
        </button>

        <span aria-hidden="true">|</span>

        <button type="button" onClick={toggleLanguage}>
          <Highlight text={header.switchLanguage} />
        </button>
      </div>
    </header>
  )
}
