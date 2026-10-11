import Hero from './components/Hero'
import useLanguage from './hooks/useLanguage'

// Temporary page: the hero (with the header inside) is ready, the other sections come next.
function App() {
  const { content } = useLanguage()

  return (
    <main>
      <Hero />

      <div className="container-content py-10">
        <h2 className="text-2xl">{content.skills.title}</h2>
        <ul className="mt-2">
          {content.skills.list.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App
