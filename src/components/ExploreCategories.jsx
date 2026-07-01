import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import categories from '../data/categories'
import './ExploreCategories.css'

function ExploreCategories() {
  const sectionRef = useRef(null)
  const imageRefs = useRef([])
  const itemRefs = useRef([])
  const currentIndex = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          if (index === currentIndex.current) return

          gsap.to(imageRefs.current[currentIndex.current], {
            opacity: 0, duration: 0.5, overwrite: true
          })
          gsap.to(imageRefs.current[index], {
            opacity: 1, duration: 0.5, overwrite: true
          })

          itemRefs.current.forEach((item, i) => {
            item.style.opacity = i === index ? '1' : '0.3'
            item.style.fontWeight = i === index ? '400' : '400'
          })

          currentIndex.current = index
        }
      })
    }, { threshold: 0.1 })

    const zones = sectionRef.current.querySelectorAll('.explore__zone')
    zones.forEach(zone => observer.observe(zone))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="explore" ref={sectionRef}>

      <div className="explore__sticky">
        <div className="explore__heading-block">
          <p className="explore__label">Explore</p>
          <h2 className="explore__heading">Categories</h2>
        </div>

        <div className="explore__image-wrapper">
          {categories.map((cat, index) => (
            <img
              key={cat.id}
              ref={el => imageRefs.current[index] = el}
              className="explore__image"
              src={cat.image}
              alt={cat.name}
              style={{ opacity: index === 0 ? 1 : 0 }}
            />
          ))}
        </div>

        <ul className="explore__list">
          {categories.map((cat, index) => (
            <li
              key={cat.id}
              ref={el => itemRefs.current[index] = el}
              className="explore__item"
              style={{ opacity: index === 0 ? 1 : 0.3 }}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="explore__zones">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="explore__zone"
            data-index={index}
          />
        ))}
      </div>

    </section>
  )
}

export default ExploreCategories