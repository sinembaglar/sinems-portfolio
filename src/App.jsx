import { ToastContainer } from 'react-toastify'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'

export default function App() {
  const { theme } = useTheme()

  return (
    <>
      <main>
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
