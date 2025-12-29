import './Partners.css'

const partners = [
  'Microsoft', 'AWS', 'Google Cloud', 'Salesforce', 
  'ServiceNow', 'Snowflake', 'Databricks', 'OpenAI'
]

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-content">
          <div className="partners-text">
            <span className="partners-label">Trusted by industry leaders</span>
            <h2 className="partners-title">
              Our unique combination of expertise empowers our customers to 
              <span className="highlight"> shape the future with intelligence.</span>
            </h2>
          </div>
          
          <div className="partners-features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <h4>Engineering and industry expertise</h4>
              <p>Multidisciplinary teams integrating cutting-edge technology with deep subject matter expertise.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🤖</span>
              <h4>AI-native delivery</h4>
              <p>Embedding AI into every aspect of delivery, redefining how organisations drive efficiency.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🔧</span>
              <h4>Core modernisation</h4>
              <p>Paving the way to build a digital core, enabling leverage of advanced technologies.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🤝</span>
              <h4>Trusted partnership</h4>
              <p>Close collaboration to augment intelligence across organisations and accelerate growth.</p>
            </div>
          </div>
        </div>

        <div className="partners-logos">
          <div className="logos-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner-logo" key={index}>
                <span className="partner-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners


