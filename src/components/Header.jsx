import useTheme from '../hooks/useTheme'
import useLanguage from '../hooks/useLanguage'
import Highlight from './Highlight'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { content, toggleLanguage } = useLanguage()
  const { header } = content

  return (
    <header className="flex justify-end md:h-[38px]">
      <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] whitespace-nowrap text-muted sm:gap-[14px] sm:text-[15px]">
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
              className={`absolute h-4 w-4 overflow-hidden rounded-full bg-toggle-knob transition-transform duration-300 ${
                isDark ? 'translate-x-1' : 'translate-x-[35px]'
              }`}
            >
              {/* In dark mode a track-colored circle covers part of the knob, turning it into a moon */}
              <span
                className={`absolute top-0 left-1 size-4 rounded-full bg-toggle-track transition-opacity duration-300 ${
                  isDark ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </span>
          </span>
          {isDark ? header.lightMode : header.darkMode}
        </button>

        <span aria-hidden="true" className="text-subtle">|</span>

        <button type="button" onClick={toggleLanguage} className="text-subtle">
          <Highlight text={header.switchLanguage} />
        </button>
      </div>
    </header>
  )
}
