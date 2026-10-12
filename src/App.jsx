import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import Hero from './components/Hero'
import useTheme from './hooks/useTheme'
import useLanguage from './hooks/useLanguage'

// Hero is the first screen, so it is loaded right away.
// The sections below it are loaded as separate files (code splitting).
const Skills = lazy(() => import('./components/Skills'))
const Profile = lazy(() => import('./components/Profile'))
const Projects = lazy(() => import('./components/Projects'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const { theme } = useTheme()
  const { status } = useLanguage()

  return (
    <>
      {/* aria-busy tells screen readers that the content is updating */}
      <main aria-busy={status === 'loading'}>
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-page" />}>
          <Skills />
          <Profile />
          <Projects />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ToastContainer position="bottom-right" autoClose={2500} theme={theme} />
    </>
  )
}

export default App
