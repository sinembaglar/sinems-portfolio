import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'

// The page is built section by section. The footer comes next.
function App() {
  return (
    <main>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
    </main>
  )
}

export default App
