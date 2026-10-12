import { ToastContainer } from 'react-toastify'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import useLanguage from './hooks/useLanguage'

function App() {
  const { theme } = useTheme()
  const { status } = useLanguage()

  return (
    <>
      {/* aria-busy tells screen readers that the content is updating */}
      <main aria-busy={status === 'loading'}>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} theme={theme} />
    </>
  )
}

export default App
