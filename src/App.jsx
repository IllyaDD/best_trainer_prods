import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import { TRAINER } from './data/site'

export default function App() {
  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Pricing />
        <Contact />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {TRAINER.name}. Персональні тренування.
      </footer>
    </>
  )
}
