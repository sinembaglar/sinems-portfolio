import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useContent from '../hooks/useContent'
import { LanguageContext } from './contexts'

// If there is no saved language, use the browser language.
const browserLanguage = navigator.language.startsWith('tr') ? 'tr' : 'en'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', browserLanguage)
  // content of the selected language, sent to reqres and taken from its response
  const { content, status } = useContent(language)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function toggleLanguage() {
    setLanguage(language === 'tr' ? 'en' : 'tr')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content, status }}>
      {children}
    </LanguageContext.Provider>
  )
}
