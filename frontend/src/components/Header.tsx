import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">TechFlow</span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#industries" className="nav-link">Industries</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#highlights" className="nav-link">Insights</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#careers" className="nav-link">Careers</a>
        </nav>

        <div className="header-actions">
          <button className="btn-contact">
            Let's Connect
            <span className="btn-arrow">→</span>
          </button>
          
          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header


