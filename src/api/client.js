import axios from 'axios'

// Single axios instance: base URL, API key and timeout are configured in one place.
const client = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_REQRES_API_KEY,
  },
})

export default client
