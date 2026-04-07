import { useState, useEffect } from 'react'

export default function FloatingFab() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = 0
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 100)
      lastY = y <= 0 ? 0 : y
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`floating-social-fab${open ? ' active' : ''}${hidden ? ' fab-hidden' : ''}`}
    >
      <div className="social-options">
        <a href="mailto:PrimoVerainc@gmail.com" className="social-item" title="Email Us">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+639189214395" className="social-item" title="Call Us">
          <i className="fas fa-phone"></i>
        </a>
        <a
          href="https://www.facebook.com/primoverainc"
          target="_blank"
          rel="noreferrer"
          className="social-item"
          title="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-item" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <button className="main-fab" onClick={() => setOpen(o => !o)}>
        <i className="fas fa-home"></i>
        <i className="fas fa-times close-icon"></i>
      </button>
    </div>
  )
}
