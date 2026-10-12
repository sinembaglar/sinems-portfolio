import useLanguage from '../hooks/useLanguage'
import Marker from './Marker'

const linkColors = {
  github: 'text-github',
  linkedin: 'text-linkedin',
  email: 'text-accent',
}

function Footer() {
  const { content } = useLanguage()
  const { footer, links } = content

  return (
    <footer className="container-content flex flex-col items-center gap-10 py-24 md:flex-row md:items-start md:justify-center md:gap-14 md:pt-[81px] md:pb-[165px]">
      <p className="max-w-[480px] text-center text-3xl leading-[1.45] font-medium md:text-right md:text-[42px]">
        {footer.text.before}
        <Marker barClassName="inset-x-0 top-[62%] h-[28%] bg-marker-footer">{footer.text.highlight}</Marker>
        {footer.text.after}
      </p>

      <ul className="flex gap-6 text-2xl md:flex-col md:gap-1">
        {Object.keys(links).map((key) => (
          <li key={key}>
            <a
              href={key === 'email' ? `mailto:${links[key]}` : links[key]}
              target="_blank"
              rel="noreferrer"
              className={`hover:underline ${linkColors[key]}`}
            >
              {footer.linkNames[key]}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
