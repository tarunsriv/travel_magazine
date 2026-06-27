import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Destination from './components/FeaturedDestinations'
import Categories from './components/ExploreCategories'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Destination />
      <Categories />
    </div>
  )
}

export default App