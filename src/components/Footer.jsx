import './Footer.css'

function Footer() {
    return (
        <footer className="footer">

            {/* top row */}
            <div className="footer__top">

                {/* left - links */}
                <div className="footer__links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#explore">Explore</a>
                </div>

                {/* right - connect form */}
                <div className="footer__connect">
                    <p className="footer__connect-label">Connect with us</p>
                    <div className="footer__form">
                        <input type="text" placeholder="NAME" className="footer__form-input"/>
                        <input type="text" placeholder="E-MAIL ADDRESS" className="footer__form-input" />
                    </div>
                    <button className="footer__submit">SUBMIT</button>
                </div>
            </div>

            {/* bottom left - large heading */}
            <div className="footer__bottom">
                <span className="footer__year">2026 TOURME</span>
                <h2 className="footer__heading">TOUR ME</h2>
            </div>
        </footer>
    )
}

export default Footer