import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../assets/Rectangle 10.png'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const headingRef = useRef(null)
  const subtextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()
      gsap.from(headingRef.current, {
        y: 10,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })

      gsap.from(subtextRef.current, {
        y: 10,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out'
      })

      gsap.to(headingRef.current, {
        y: -80,
        ease: 'none',
        transformOrigin: 'top top',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          invaliddateOnRefresh: true
        }
      })

      gsap.to(subtextRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          invaliddateOnRefresh: true
        }
      })

    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id='home'>
      <img className="hero__image" src={heroImage} alt="Travel destination" />
      <h1 className="hero__heading" ref={headingRef}>TOUR ME</h1>
      <p className="hero__subtext" ref={subtextRef}>Find your next escape</p>
    </section>
  )
}

export default Hero