import { useEffect, useReducer, useRef } from 'react'
import { toast } from 'react-toastify'
import { postContent } from '../api/contentApi'
import data from '../data/data'
import { CONTENT_FAILURE, CONTENT_REQUEST, CONTENT_SUCCESS, contentReducer, initialState } from '../reducers/contentReducer'

// Flow from the README: language -> TR/EN data -> axios POST -> reqres -> app.
// Each language is requested only once. Until the answer comes (or if it fails),
// the local data is shown so the page is never empty.
function useContent(language) {
  const [state, dispatch] = useReducer(contentReducer, initialState)
  // remembers which languages were already requested
  // (React StrictMode runs effects twice in development)
  const requested = useRef([])

  useEffect(() => {
    if (requested.current.includes(language)) return
    requested.current.push(language)

    const localData = data[language]
    dispatch({ type: CONTENT_REQUEST, language })

    const request = postContent(localData)
    toast.promise(request, {
      pending: localData.toast.pending,
      success: localData.toast.success,
      error: localData.toast.error,
    })

    request
      .then((serverData) => dispatch({ type: CONTENT_SUCCESS, language, payload: serverData }))
      .catch((error) => {
        console.error('Content request failed', error)
        dispatch({ type: CONTENT_FAILURE, language })
        // try again next time this language is selected
        requested.current = requested.current.filter((item) => item !== language)
      })
  }, [language])

  return {
    content: state.content[language] || data[language],
    status: state.status[language] || 'loading',
  }
}

export default useContent
