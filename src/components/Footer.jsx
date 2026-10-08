import useLanguage from '../hooks/useLanguage'
import Highlight from './Highlight'

const linkColors = {
  github: 'text-[#1769ff]',
  linkedin: 'text-[#0077b5]',
  email: 'text-[#af0c48] dark:text-brand-soft',
}

export default function Footer() {
  const { content } = useLanguage()
  const { footer } = content

  // Only show links that are filled in data.js.
  const items = Object.entries(footer.links)
    .filter(([, url]) => url)
    .map(([key, url]) => ({ key, url: key === 'email' ? `mailto:${url}` : url }))

  return (
    <footer className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:justify-center md:gap-16">
      <p className="max-w-sm text-center text-3xl leading-snug font-medium md:text-right">
        <Highlight
          text={footer.message}
          className="underline decoration-brand decoration-4 underline-offset-8"
        />
      </p>

      <ul className="flex gap-6 text-sm font-semibold md:flex-col md:gap-2">
        {items.map(({ key, url }) => (
          <li key={key}>
            <a href={url} target="_blank" rel="noreferrer" className={`hover:underline ${linkColors[key]}`}>
              {footer.linkLabels[key]}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
