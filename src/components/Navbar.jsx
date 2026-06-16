import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <p className="navbar__logo">TOUR ME</p>
            <div className="navbar__links">
                <a href="#">Explore</a>
                <a href="#">About</a>
            </div>
        </nav>
    )
}

export default Navbar