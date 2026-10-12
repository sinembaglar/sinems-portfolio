import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'

// The page is built section by section. Projects and Footer come next.
function App() {
  return (
    <main>
      <Hero />
      <Skills />
      <Profile />
    </main>
  )
}

export default App
