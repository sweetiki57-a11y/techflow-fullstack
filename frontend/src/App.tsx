import Header from './components/Header'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Capabilities from './components/Capabilities'
import Highlights from './components/Highlights'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Industries />
        <Capabilities />
        <Highlights />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
