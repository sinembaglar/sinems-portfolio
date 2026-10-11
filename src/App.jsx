import Header from './components/Header'
import useLanguage from './hooks/useLanguage'

// Temporary page: the real header is ready, the other sections come in the next steps.
function App() {
  const { content } = useLanguage()

  return (
    <div className="min-h-screen bg-surface">
      <div className="container-hero pt-10 lg:pt-[63px]">
        <Header />

        <p className="mt-10 text-xl">{content.hero.greeting}</p>
        <h1 className="mt-2 text-3xl font-bold">
          {content.hero.name} {content.hero.intro}
        </h1>

        <h2 className="mt-10 text-2xl">{content.skills.title}</h2>
        <ul className="mt-2">
          {content.skills.list.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
