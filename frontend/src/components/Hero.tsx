import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Shaping the Future with Intelligence</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">Technology is our</span>
          <span className="title-highlight">how.</span>
          <span className="title-line">And people are our</span>
          <span className="title-highlight">why.</span>
        </h1>
        
        <p className="hero-description">
          As emerging technologies reshape industries, we've developed an AI-native 
          approach to digital transformation. By harnessing the power of AI and 
          innovative technologies, we help accelerate growth and drive success.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary">
            Get to know us
            <span className="btn-icon">→</span>
          </button>
          <button className="btn-secondary">
            <span className="play-icon">▶</span>
            Watch our story
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">40+</span>
            <span className="stat-label">Global Locations</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">12K+</span>
            <span className="stat-label">Team Members</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero


