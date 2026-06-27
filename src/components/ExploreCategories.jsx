import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import categories from '../data/categories'
import './ExploreCategories.css'

function ExploreCategories() {
    const [activeCategory, setActiveCategory] = useState(0)
    const imageRefs = useRef([])

    const handleCategoryHover = (index) => {
        // fade out current
        gsap.to(imageRefs.current[activeCategory], {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
        // fade in new
        gsap.to(imageRefs.current[index], {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        })
        setActiveCategory(index)
    }

    return (
        <section className="explore">

            {/* left side */}
            <div className="explore__left">
                <p className="explore__label">Explore</p>
                <h2 className="explore__heading">Categories</h2>
            </div>

            {/* right side - image stack */}
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
                        className={`explore__item ${activeCategory === index ? 'explore__item--active' : ''}`}
                        onMouseEnter={() => handleCategoryHover(index)}
                    >
                        {cat.name}
                    </li>
                ))}
            </ul>



        </section>
    )
}

export default ExploreCategories