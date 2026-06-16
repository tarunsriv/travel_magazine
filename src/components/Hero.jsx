import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import heroImage from '../assets/Rectangle 10.png'
import './Hero.css'
import { createContext } from 'react'

function Hero() {
  const headingRef = useRef(null)
  const subtextRef = useRef(null)

  useEffect(() => {
    // animate heading from below
    gsap.from(headingRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })

    // animate subtext
    gsap.from(subtextRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero">
      <img className="hero__image" src={heroImage} alt="Travel destination" />
      <h1 className="hero__heading" ref={headingRef}>TOUR ME</h1>
      <p className="hero__subtext" ref={subtextRef}>Find your next escape</p>
    </section>
  )
}

export default Hero