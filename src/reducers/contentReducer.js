// Request state for the remote content, per language.
// Same request -> success / failure pattern as Redux, without the extra library.

export const CONTENT_REQUEST = 'CONTENT_REQUEST'
export const CONTENT_SUCCESS = 'CONTENT_SUCCESS'
export const CONTENT_FAILURE = 'CONTENT_FAILURE'

export const initialContentState = {
  status: {}, // { tr: 'loading' | 'success' | 'error', en: ... }
  content: {}, // { tr: {...}, en: {...} } responses from the server
}

export function contentReducer(state, action) {
  const { language } = action
  switch (action.type) {
    case CONTENT_REQUEST:
      return { ...state, status: { ...state.status, [language]: 'loading' } }
    case CONTENT_SUCCESS:
      return {
        status: { ...state.status, [language]: 'success' },
        content: { ...state.content, [language]: action.payload },
      }
    case CONTENT_FAILURE:
      return { ...state, status: { ...state.status, [language]: 'error' } }
    default:
      return state
  }
}
