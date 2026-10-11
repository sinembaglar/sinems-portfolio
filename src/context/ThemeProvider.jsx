import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { ThemeContext } from './contexts'

// If there is no saved theme, use the system preference.
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', systemTheme)

  // Tailwind dark: classes work when the html tag has the "dark" class.
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
