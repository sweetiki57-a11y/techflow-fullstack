import './Industries.css'

const industries = [
  { name: 'Finance & Banking', icon: '💳', description: 'Digital transformation for financial services' },
  { name: 'Healthcare', icon: '🏥', description: 'Innovative solutions for better patient care' },
  { name: 'Retail & E-commerce', icon: '🛒', description: 'Seamless shopping experiences' },
  { name: 'Technology', icon: '💻', description: 'Cutting-edge software solutions' },
  { name: 'Insurance', icon: '🛡️', description: 'Modernizing insurance operations' },
  { name: 'Telecommunications', icon: '📡', description: 'Connecting the world digitally' },
  { name: 'Energy', icon: '⚡', description: 'Powering sustainable futures' },
  { name: 'Media & Entertainment', icon: '🎬', description: 'Creating engaging experiences' },
]

const Industries = () => {
  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="section-header">
          <span className="section-tag">Industries</span>
          <h2 className="section-title">Move your industry forward</h2>
          <p className="section-description">
            From payments and finance to healthcare and gaming, our sector-specific 
            knowledge allows us to build solutions that accommodate what's happening 
            in your industry today – and prepare you for what's next.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              className="industry-card" 
              key={industry.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="industry-icon">{industry.icon}</span>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
              <span className="industry-arrow">→</span>
            </div>
          ))}
        </div>

        <div className="industries-cta">
          <button className="btn-explore">
            Explore all industries
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Industries


