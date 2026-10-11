import { useContext } from 'react'
import { LanguageContext } from '../context/contexts'

// Shortcut so components don't import the context everywhere.
function useLanguage() {
  return useContext(LanguageContext)
}

export default useLanguage
