import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import data from '../data/data'

const LanguageContext = createContext(null)

// First visit: Turkish browsers get TR, everyone else EN.
const getBrowserLanguage = () => (navigator.language?.startsWith('tr') ? 'tr' : 'en')

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', getBrowserLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'))

  return (
    <LanguageContext.Provider value={{ language, content: data[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
