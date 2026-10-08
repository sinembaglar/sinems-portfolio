// Renders { before, highlight, after } text, styling only the highlighted part.
export default function Highlight({ text, className = 'text-brand' }) {
  return (
    <>
      {text.before}
      <span className={className}>{text.highlight}</span>
      {text.after}
    </>
  )
}
