import { useEffect, useReducer, useRef } from 'react'
import { toast } from 'react-toastify'
import { postContent } from '../api/contentApi'
import data from '../data/data'
import {
  CONTENT_FAILURE,
  CONTENT_REQUEST,
  CONTENT_SUCCESS,
  contentReducer,
  initialContentState,
} from '../reducers/contentReducer'

// Data flow from the README diagram: language -> local TR/EN data -> axios POST -> reqres -> app.
// Each language is fetched once and cached, so switching back does not send a new request.
// Until the response arrives (or if it fails) the local data is shown, so the page is never empty.
export default function useRemoteContent(language) {
  const [state, dispatch] = useReducer(contentReducer, initialContentState)
  // Guards against sending the same request twice (e.g. React StrictMode runs effects twice in dev).
  const requested = useRef(new Set())

  useEffect(() => {
    if (requested.current.has(language)) return
    requested.current.add(language)

    const local = data[language]
    const request = postContent(local)
    dispatch({ type: CONTENT_REQUEST, language })

    toast.promise(request, {
      pending: local.toast.pending,
      success: local.toast.success,
      error: local.toast.error,
    })

    request
      .then((content) => dispatch({ type: CONTENT_SUCCESS, language, payload: content }))
      .catch((error) => {
        console.error('Content request failed:', error)
        dispatch({ type: CONTENT_FAILURE, language })
        // Allow a retry next time this language is selected.
        requested.current.delete(language)
      })
  }, [language])

  return {
    content: state.content[language] ?? data[language],
    status: state.status[language] ?? 'loading',
  }
}
