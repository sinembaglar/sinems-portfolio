import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
