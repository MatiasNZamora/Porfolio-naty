const Flower = () => (
  <svg
    className="mrq-flower"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <g transform="translate(10,10)">
      <ellipse cx="0" cy="-4.2" rx="2"   ry="3.7" transform="rotate(0)"   />
      <ellipse cx="0" cy="-4.2" rx="2"   ry="3.7" transform="rotate(72)"  />
      <ellipse cx="0" cy="-4.2" rx="2"   ry="3.7" transform="rotate(144)" />
      <ellipse cx="0" cy="-4.2" rx="2"   ry="3.7" transform="rotate(216)" />
      <ellipse cx="0" cy="-4.2" rx="2"   ry="3.7" transform="rotate(288)" />
      <circle cx="0" cy="0" r="2.2" fill="var(--rose-mist)" />
    </g>
  </svg>
)

const items = [
  'UX/UI Design', 'Branding', 'Mobile Apps',
  'Web Design', 'Marketing Digital', 'Community Manager',
]

export default function Marquee() {
  const set = items.map((item, i) => (
    <span key={i} className="mrq-item">
      <Flower />
      {item}
    </span>
  ))

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        <span>{set}</span>
        <span>{set}</span>
      </div>
    </div>
  )
}
