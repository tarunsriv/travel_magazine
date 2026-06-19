import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import destinations from '../data/destinations'
import './FeaturedDestinations.css'

gsap.registerPlugin(ScrollTrigger)

function FeaturedDestinations() {
  const [active, setActive] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const sectionRef = useRef(null)
  const imageRefs = useRef([])

  const current = destinations[active]

  const handleMouseEnter = (index) => {
    // fade out current image
    gsap.to(imageRefs.current[activeImage], {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    })
    // fade in new image
    gsap.to(imageRefs.current[index], {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
    setActiveImage(index)
  }

  // reset images when destination changes
  const handleDestinationChange = (index) => {
    setActive(index)
    setActiveImage(0)
    // reset all images
    imageRefs.current.forEach((img, i) => {
      gsap.to(img, { opacity: i === 0 ? 1 : 0, duration: 0 })
    })
  }

  return (
    <section className="featured" ref={sectionRef}>

      <h2 className="featured__section-heading">Featured Destinations</h2>

      {/* image stack */}
        <div className="featured__image-wrapper">
        {current.images.map((img, index) => (
            <img
            key={index}
            ref={el => imageRefs.current[index] = el}
            className="featured__image"
            src={img}
            alt={current.name}
            style={{ opacity: index === 0 ? 1 : 0 }}
            />
        ))}

        {/* invisible hover zones */}
        <div className="featured__hover-zones">
            {current.images.map((_, index) => (
            <div
                key={index}
                className="featured__hover-zone"
                onMouseEnter={() => handleMouseEnter(index)}
            />
            ))}
        </div>
        </div>

      {/* destination info */}
      <div className="featured__info">
        <div className="featured__title-block">
          <h3 className="featured__name">{current.name}</h3>
          <p className="featured__location">{current.location}</p>
        </div>
        <div className="featured__descriptions">
          <p className="featured__desc">{current.description1}</p>
          <p className="featured__desc">{current.description2}</p>
        </div>
      </div>

      {/* navigation thumbnails */}
      <div className="featured__nav">
        {destinations.map((dest, index) => (
          <div
            key={dest.id}
            className={`featured__indicator ${active === index ? 'featured__indicator--active' : ''}`}
            onClick={() => handleDestinationChange(index)}
          >
            <img src={dest.images[0]} alt={dest.name} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default FeaturedDestinations