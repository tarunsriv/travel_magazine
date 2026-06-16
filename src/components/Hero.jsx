import heroImage from '../assets/Rectangle 10.png'
import './Hero.css'

function Hero(){
    return(
        <section className="hero">
            <img className="hero__image" src={heroImage} alt="Travel destination"/>
            <h1 className="hero__heading">TOUR ME</h1>
            <p className="hero__subtext">Find your next escape</p>
        </section>
    )
}

export default Hero