import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const textPathRef = useRef(null)
  const storyRef = useRef(null)
  const storyText = "A COLLECTION OF PLACES DISCOVERED THROUGH RABBIT HOLES, RANDOM REELS, AND LATE NIGHT CURIOSITY. THE KIND OF PLACES THAT MAKE YOU STOP SCROLLING AND START PLANNING."

  useEffect(() => {
    gsap.to(textPathRef.current, {
      attr: { startOffset: '100%' },
      ease: 'none',
      scrollTrigger: {
        trigger: '.about__manifesto',
        start: 'top top',
        end: '+=1000',
        pin: true,
        scrub: 1
      }
    })

    //part B
    gsap.to('.about__char', {
      opacity: 1,
      color: '#214915',
      stagger: 0.02,
      scrollTrigger: {
        trigger: '.about__story',
        start: 'top top',
        end: '+=1000',
        pin: true,
        scrub: 1
      }
    })
  }, [])

  return (
    <section className="about">

      {/* Part A - Circular text */}
      <div className="about__manifesto">
        <svg
          viewBox="0 0 1441 259"
          className="about__circle-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 0,163 C 224,40 496,40 720,163 C 944,288 1216,288 1440,163"
            />
          </defs>
          <text>
            <textPath
              ref={textPathRef}
              className="about__circle-text"
              href="#circlePath"
              startOffset="-150%"
            >
              GO SOMETHING BETTER • GO SOMETHING BETTER •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Part B - Color transition text */}
      <div className="about__story">
        <p className="about__story-text" ref={storyRef}>
          {storyText.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="about__word">
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="about__char">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>

    </section>
  )
}

export default About