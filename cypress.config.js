import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // Tests run against the production build served by `npm run preview`.
    baseUrl: 'http://localhost:4173',
    supportFile: false,
    video: false,
  },
})
