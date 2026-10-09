import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useRemoteContent from '../hooks/useRemoteContent'

const LanguageContext = createContext(null)

// First visit: Turkish browsers get TR, everyone else EN.
const getBrowserLanguage = () => (navigator.language?.startsWith('tr') ? 'tr' : 'en')

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', getBrowserLanguage)
  const { content, status } = useRemoteContent(language)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'))

  return (
    <LanguageContext.Provider value={{ language, content, status, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
