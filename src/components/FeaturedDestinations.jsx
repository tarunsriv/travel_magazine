import { useRef, useState, useEffect } from 'react'
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
    const stripRef = useRef(null)
    const headingRef = useRef(null)

    const current = destinations[active]

    const handleMouseEnter = (slideIndex, imgIndex) => {
        const slideImages = imageRefs.current[slideIndex]
        if (!slideImages) return

        slideImages.forEach((img, i) => {
            gsap.to(img, {
                opacity: i === imgIndex ? 1 : 0,
                duration: 0.5,
                ease: 'power2.out'
            })
        })
        setActiveImage(imgIndex)
    }

    // reset images when destination changes
    const handleDestinationChange = (index) => {
        setActive(index)
        setActiveImage(0)

        // scroll to that destination
        const stripWidth = stripRef.current.scrollWidth - window.innerWidth
        const targetX = (index / (destinations.length - 1)) * stripWidth

        gsap.to(stripRef.current, {
            x: -targetX,
            duration: 1,
            ease: 'power3.inOut'
        })
    }

    useEffect(() => {
        const section = sectionRef.current
        const strip = stripRef.current

        gsap.to(strip, {
            x: () => -(strip.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${strip.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const newActive = Math.round(self.progress * (destinations.length - 1))
                    setActive(newActive)

                    //fade heading out after first slide
                    if (self.progress > 0.1) {
                        gsap.to(headingRef.current, { opacity: 0, duration: 0.3 })
                    } else {
                        gsap.to(headingRef.current, {opacity: 1, duration: 0.3 })
                    }
                }
            }
        })

        gsap.from(headingRef.current, {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'top top',
                scrub: 1
            }
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])


    return (
        <section className="featured" ref={sectionRef}>

            {/* heading - only shows once */}
            <h2 className="featured__section-heading" ref={headingRef}>Featured Destinations</h2>

            {/* horizontal strip */}
            <div className="featured__strip" ref={stripRef}>
                {destinations.map((dest, index) => (
                    <div key={dest.id} className="featured__slide">

                        <div className="featured__image-wrapper">
                            {dest.images.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    ref={el => {
                                        if (!imageRefs.current[index]) imageRefs.current[index] = []
                                        imageRefs.current[index][imgIndex] = el
                                    }}
                                    className="featured__image"
                                    src={img}
                                    alt={dest.name}
                                    style={{ opacity: imgIndex === 0 ? 1 : 0 }}
                                />
                            ))}

                            <div className="featured__hover-zones">
                                {dest.images.map((_, i) => (
                                    <div
                                        key={i}
                                        className="featured__hover-zone"
                                        onMouseEnter={() => handleMouseEnter(index, i)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="featured__info">
                            <div className="featured__title-block">
                                <h3 className="featured__name">{dest.name}</h3>
                                <p className="featured__location">{dest.location}</p>
                            </div>
                            <div className="featured__descriptions">
                                <p className="featured__desc">{dest.description1}</p>
                                <p className="featured__desc">{dest.description2}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* navigation - outside strip, always visible */}
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