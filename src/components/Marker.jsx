// Text with a colored bar behind its lower half, like a highlighter pen in the design.
export default function Marker({ children, barClassName }) {
  return (
    <span className="relative z-0 inline-block">
      <span aria-hidden="true" className={`absolute -z-10 rounded-sm ${barClassName}`} />
      {children}
    </span>
  )
}
