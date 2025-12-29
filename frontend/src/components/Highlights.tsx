import './Highlights.css'

const highlights = [
  {
    type: 'News',
    title: 'Launches Global Advisory Board Amid AI-Driven Transformation',
    image: '🏢',
    color: '#6366f1'
  },
  {
    type: 'Report',
    title: 'AI Everywhere: How Business Leaders View AI in Life, Work and Society',
    image: '👁️',
    color: '#8b5cf6'
  },
  {
    type: 'News',
    title: 'Strengthens Executive Team with New Strategic Leaders',
    image: '👥',
    color: '#06b6d4'
  },
  {
    type: 'News',
    title: 'Pioneers OpenAI\'s Exclusive Partner Program',
    image: '🧠',
    color: '#f43f5e'
  },
  {
    type: 'Report',
    title: 'AI and the Digital Shift: Reinventing the Business Landscape',
    image: '📊',
    color: '#10b981'
  },
  {
    type: 'Video',
    title: 'How We\'re Shaping the Future With Intelligence',
    image: '🎬',
    color: '#f59e0b'
  }
]

const Highlights = () => {
  return (
    <section className="highlights" id="highlights">
      <div className="highlights-container">
        <div className="section-header">
          <span className="section-tag">Insights</span>
          <h2 className="section-title">Highlights</h2>
          <p className="section-description">
            Stay informed with our latest news, reports, and thought leadership content.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div 
              className="highlight-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="highlight-image" style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)` }}>
                <span className="highlight-emoji">{item.image}</span>
              </div>
              <div className="highlight-content">
                <span className="highlight-type" style={{ color: item.color }}>{item.type}</span>
                <h3 className="highlight-title">{item.title}</h3>
                <span className="highlight-link">
                  Read more <span className="arrow">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="highlights-cta">
          <button className="btn-more">
            See more insights
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Highlights


