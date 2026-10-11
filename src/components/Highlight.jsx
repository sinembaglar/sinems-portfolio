// Shows { before, highlight, after } text and styles only the highlighted part.
function Highlight({ text, className = 'text-brand' }) {
  return (
    <>
      {text.before}
      <span className={className}>{text.highlight}</span>
      {text.after}
    </>
  )
}

export default Highlight
