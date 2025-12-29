import './Capabilities.css'

const capabilities = [
  {
    title: 'AI & Machine Learning',
    description: 'Embed intelligence into every aspect of your business with our AI-native approach to development and delivery.',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Accelerate your cloud journey with modern infrastructure, automation, and continuous delivery practices.',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
  },
  {
    title: 'Digital Products',
    description: 'Design and build products that users love, from concept to launch and continuous evolution.',
    icon: '📱',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)'
  },
  {
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights that drive informed decision-making across your organization.',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  }
]

const Capabilities = () => {
  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities-container">
        <div className="capabilities-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="capabilities-title">
            Create real value with<br />
            <span className="highlight">leading capabilities</span>
          </h2>
        </div>

        <div className="capabilities-content">
          <div className="capabilities-text">
            <p className="capabilities-description">
              Whether you're bringing a new product to life or strategising how to 
              leverage AI to embrace the digital shift, we can help you meet the 
              ever-changing needs of your industry, market and customers.
            </p>
            <button className="btn-learn">
              See how we can help
              <span className="btn-icon">→</span>
            </button>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((cap, index) => (
              <div 
                className="capability-card" 
                key={cap.title}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="capability-icon" style={{ background: cap.gradient }}>
                  <span>{cap.icon}</span>
                </div>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-description">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities


