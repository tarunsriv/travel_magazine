import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [solid, setSolid] = useState(true)
  const [navColor, setNavColor] = useState('light')

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero')
      const aboutStory = document.querySelector('.about__story')
      const explore = document.querySelector('.explore')
      const featured = document.querySelector('.featured')

      const heroBottom = hero?.getBoundingClientRect().bottom || 0
      const aboutStoryRect = aboutStory?.getBoundingClientRect()
      const exploreRect = explore?.getBoundingClientRect()
      const featuredRect = featured?.getBoundingClientRect()

      // solid navbar only over hero
      setSolid(heroBottom > 70)

      // check if cream sections are at top of viewport
      const inAboutStory = aboutStoryRect &&
        aboutStoryRect.top <= 70 && aboutStoryRect.bottom >= 0

      const inExplore = exploreRect &&
        exploreRect.top <= 70 && exploreRect.bottom >= 0

      const inFeatured = featuredRect &&
        featuredRect.top <= 70 && featuredRect.bottom >= 0

      if (inAboutStory || inExplore) {
        setNavColor('dark')
      } else {
        setNavColor('light')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${solid ? 'navbar--solid' : ''} ${navColor === 'dark' ? 'navbar--dark' : ''}`}>
      <p className="navbar__logo">TOUR ME</p>
      <div className="navbar__links">
        <a href="#">Explore</a>
        <a href="#">About</a>
      </div>
    </nav>
  )
}

export default Navbar