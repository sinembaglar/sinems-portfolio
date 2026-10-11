import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import data from '../data/data'
import { LanguageContext } from './contexts'

// If there is no saved language, use the browser language.
const browserLanguage = navigator.language.startsWith('tr') ? 'tr' : 'en'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', browserLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function toggleLanguage() {
    setLanguage(language === 'tr' ? 'en' : 'tr')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content: data[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
