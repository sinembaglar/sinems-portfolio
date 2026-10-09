import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import Hero from './components/Hero'
import useTheme from './hooks/useTheme'
import useLanguage from './hooks/useLanguage'

// The hero is the first screen, so it loads with the main bundle.
// Sections below the fold are split into their own chunks and loaded right after.
const Skills = lazy(() => import('./components/Skills'))
const Profile = lazy(() => import('./components/Profile'))
const Projects = lazy(() => import('./components/Projects'))
const Footer = lazy(() => import('./components/Footer'))

// Keeps space for the lazy sections so the page does not jump while they load.
function SectionFallback() {
  return <div aria-hidden="true" className="min-h-screen bg-page" />
}

export default function App() {
  const { theme } = useTheme()
  const { status } = useLanguage()

  return (
    <>
      {/* aria-busy tells screen readers the content is being updated */}
      <main aria-busy={status === 'loading'}>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
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
