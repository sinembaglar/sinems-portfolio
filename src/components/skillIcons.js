import {
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
} from 'react-icons/si'

// View-layer mapping from a skill name (in data.js) to its logo and tile colors.
const skillIcons = {
  JavaScript: { Icon: SiJavascript, tile: 'bg-[#f7df1e] text-black' },
  React: { Icon: SiReact, tile: 'bg-[#20232a] text-[#61dafb]' },
  Redux: { Icon: SiRedux, tile: 'bg-[#764abc] text-white' },
  Tailwind: { Icon: SiTailwindcss, tile: 'bg-[#0f172a] text-[#38bdf8]' },
  'Spring Boot': { Icon: SiSpringboot, tile: 'bg-[#6db33f] text-white' },
  PostgreSQL: { Icon: SiPostgresql, tile: 'bg-[#336791] text-white' },
}

export default skillIcons
