import { useContext } from 'react'
import { ThemeContext } from '../context/contexts'

// Shortcut so components don't import the context everywhere.
function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme
