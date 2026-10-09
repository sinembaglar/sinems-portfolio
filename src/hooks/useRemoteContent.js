import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { postContent } from '../api/contentApi'
import data from '../data/data'

// Data flow from the README diagram: language -> local TR/EN data -> axios POST -> reqres -> app.
// Each language is fetched once and cached, so switching back does not send a new request.
// Until the response arrives (or if it fails) the local data is shown, so the page is never empty.
export default function useRemoteContent(language) {
  const [cache, setCache] = useState({})
  const requested = useRef(new Set())

  useEffect(() => {
    if (requested.current.has(language)) return
    requested.current.add(language)

    const local = data[language]
    const request = postContent(local)

    toast.promise(request, {
      pending: local.toast.pending,
      success: local.toast.success,
      error: local.toast.error,
    })

    request
      .then((content) => setCache((prev) => ({ ...prev, [language]: content })))
      .catch((error) => {
        console.error('Content request failed:', error)
        // Allow a retry next time this language is selected.
        requested.current.delete(language)
      })
  }, [language])

  return cache[language] ?? data[language]
}
