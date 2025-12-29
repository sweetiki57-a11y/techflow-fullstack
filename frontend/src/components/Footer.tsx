import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="logo-icon">◆</span>
              <span className="logo-text">TechFlow</span>
            </a>
            <p className="footer-tagline">
              Shaping the future with intelligence through innovative 
              technology solutions and digital transformation.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">𝕏</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">▶</a>
              <a href="#" className="social-link">f</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">What We Do</h4>
              <a href="#">Industries</a>
              <a href="#">Capabilities</a>
              <a href="#">Case Studies</a>
              <a href="#">AI Solutions</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">What We Think</h4>
              <a href="#">Reports</a>
              <a href="#">Whitepapers</a>
              <a href="#">Articles</a>
              <a href="#">Podcasts</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Who We Are</h4>
              <a href="#">Leadership</a>
              <a href="#">Locations</a>
              <a href="#">Partners</a>
              <a href="#">Sustainability</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Careers</h4>
              <a href="#">Open Positions</a>
              <a href="#">Early Careers</a>
              <a href="#">Life at TechFlow</a>
              <a href="#">Culture</a>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <h3 className="contact-title">Have a question? Drop us a line!</h3>
          <button className="btn-contact-footer">
            Let's connect
            <span className="btn-icon">→</span>
          </button>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright © 2025 TechFlow | All Rights Reserved
          </p>
          <div className="footer-legal">
            <a href="#">Legal</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Glossary</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


