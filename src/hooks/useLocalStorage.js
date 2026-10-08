import { useEffect, useState } from 'react'

// useState that is persisted to localStorage as JSON.
// initialValue can be a value or a function (used only when nothing is stored yet).
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) return JSON.parse(stored)
    } catch (error) {
      console.error(`useLocalStorage: could not read "${key}"`, error)
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`useLocalStorage: could not write "${key}"`, error)
    }
  }, [key, value])

  return [value, setValue]
}
