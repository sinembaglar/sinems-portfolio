// State of the content request for each language (request -> success / failure, like Redux).

export const CONTENT_REQUEST = 'CONTENT_REQUEST'
export const CONTENT_SUCCESS = 'CONTENT_SUCCESS'
export const CONTENT_FAILURE = 'CONTENT_FAILURE'

export const initialState = {
  status: {}, // e.g. { tr: 'loading', en: 'success' }
  content: {}, // server responses by language
}

export function contentReducer(state, action) {
  switch (action.type) {
    case CONTENT_REQUEST:
      return { ...state, status: { ...state.status, [action.language]: 'loading' } }
    case CONTENT_SUCCESS:
      return {
        status: { ...state.status, [action.language]: 'success' },
        content: { ...state.content, [action.language]: action.payload },
      }
    case CONTENT_FAILURE:
      return { ...state, status: { ...state.status, [action.language]: 'error' } }
    default:
      return state
  }
}
