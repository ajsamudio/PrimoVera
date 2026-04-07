import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = 0
    let downCount = 0

    const onScroll = () => {
      const y = window.scrollY
      if (y > lastY) {
        downCount++
        if (downCount >= 2) setHidden(true)
      } else {
        downCount = 0
        setHidden(false)
      }
      lastY = y <= 0 ? 0 : y
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, target) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!target) return
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={hidden ? 'header-hidden' : ''}>
      <div className="header-logo-container">
        <img src="/imgs/logo.png" alt="Primo Vera Logo" className="header-logo" />
      </div>

      <nav className="desktop-nav" aria-label="Main navigation">
        <div className="desktop-nav-links">
          <ul>
            <li><a href="#" onClick={e => handleNavClick(e, null)}>Our Company</a></li>
            <li><a href="#projects-section" onClick={e => handleNavClick(e, '#projects-section')}>Our Projects</a></li>
            <li><a href="#contact-section" onClick={e => handleNavClick(e, '#contact-section')}>Contact Us</a></li>
          </ul>
        </div>
      </nav>

      <div className="mobile-nav">
        <button className="hamburger-icon" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle mobile navigation menu" aria-expanded={menuOpen}>
          <i className="fas fa-bars"></i>
        </button>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <ul>
            <li><a href="#" onClick={e => handleNavClick(e, null)}>Our Company</a></li>
            <li><a href="#projects-section" onClick={e => handleNavClick(e, '#projects-section')}>Our Projects</a></li>
            <li><a href="#contact-section" onClick={e => handleNavClick(e, '#contact-section')}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
