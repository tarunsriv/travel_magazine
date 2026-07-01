import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Destination from './components/FeaturedDestinations'
import Categories from './components/ExploreCategories'
import Footer from './components/Footer'


function App() {
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