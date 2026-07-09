import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Destination from './components/FeaturedDestinations'
import Categories from './components/ExploreCategories'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    },500)
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Destination />
      <Categories />
      <Footer />
    </div>
  )
}

export default App