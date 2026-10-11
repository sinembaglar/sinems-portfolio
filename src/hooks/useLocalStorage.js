import { useEffect, useState } from 'react'

// Works like useState, but also saves the value to localStorage as JSON.
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      if (saved !== null) {
        return JSON.parse(saved)
      }
    } catch (error) {
      // localStorage can be blocked (e.g. private mode), then we use the default
      console.error('Could not read from localStorage', error)
    }
    return defaultValue
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Could not write to localStorage', error)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
