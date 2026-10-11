// A colored bar behind the text, like a highlighter pen (used for the name, About me and footer).
function Marker({ children, barClassName }) {
  return (
    <span className="relative z-0 inline-block">
      <span aria-hidden="true" className={`absolute -z-10 rounded-sm ${barClassName}`} />
      {children}
    </span>
  )
}

export default Marker
