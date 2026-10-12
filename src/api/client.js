import axios from 'axios'

// One axios instance for the whole app: base URL, API key and timeout are set here.
const client = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
  headers: {
    'x-api-key': import.meta.env.VITE_REQRES_API_KEY,
  },
})

export default client
