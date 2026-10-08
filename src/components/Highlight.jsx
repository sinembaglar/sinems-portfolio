// Renders { before, highlight, after } text, styling only the highlighted part.
// Pass `wrap` to render the highlighted part with a custom component (e.g. Marker).
export default function Highlight({ text, className = 'text-brand', wrap }) {
  const highlighted = wrap ? wrap(text.highlight) : <span className={className}>{text.highlight}</span>

  return (
    <>
      {text.before}
      {highlighted}
      {text.after}
    </>
  )
}
