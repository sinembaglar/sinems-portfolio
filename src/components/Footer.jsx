import useLanguage from '../hooks/useLanguage'
import Highlight from './Highlight'
import Marker from './Marker'

const linkColors = {
  github: 'text-link-github',
  linkedin: 'text-link-linkedin',
  email: 'text-accent',
}

export default function Footer() {
  const { content } = useLanguage()
  const { footer } = content

  // Only show links that are filled in data.js.
  const items = Object.entries(footer.links)
    .filter(([, url]) => url)
    .map(([key, url]) => ({ key, url: key === 'email' ? `mailto:${url}` : url }))

  return (
    <footer className="container-page flex flex-col items-center gap-10 pt-24 pb-24 md:flex-row md:pt-[81px] md:pb-[165px] md:items-start md:justify-center md:gap-14">
      <p className="max-w-[480px] text-center text-3xl leading-[1.45] font-medium md:text-right md:text-[42px]">
        <Highlight
          text={footer.message}
          wrap={(words) => <Marker barClassName="inset-x-0 top-[62%] h-[28%] bg-marker-footer">{words}</Marker>}
        />
      </p>

      <ul className="flex gap-6 text-2xl md:flex-col md:gap-1">
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
