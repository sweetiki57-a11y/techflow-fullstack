import './CTA.css'

const CTA = () => {
  return (
    <section className="cta" id="careers">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Grow your impact<br />
              <span className="highlight">with us</span>
            </h2>
            <p className="cta-description">
              Searching for the next step in your career? Learn more about joining our 
              team and discover opportunities that match your skills and ambitions.
            </p>
            <button className="btn-join">
              Join our team
              <span className="btn-icon">→</span>
            </button>
          </div>
          
          <div className="cta-visual">
            <div className="visual-card">
              <div className="visual-glow"></div>
              <div className="visual-content">
                <span className="visual-icon">🚀</span>
                <span className="visual-text">Build your future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA


