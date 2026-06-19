import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [solid, setSolid] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 0
      setSolid(window.scrollY < heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${solid ? 'navbar--solid' : ''}`}>
      <p className="navbar__logo">TOUR ME</p>
      <div className="navbar__links">
        <a href="#">Explore</a>
        <a href="#">About</a>
      </div>
    </nav>
  )
}

export default Navbar