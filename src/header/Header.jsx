import "./Header.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="exclusive"><span><h3>Exclusive</h3></span></div>
            <div className="nav">
                <div className="home">home</div>
                <div className="home">contact</div>
                <div className="home">about</div>
                <div className="home">sign Up</div>
            </div>
            <div className="search">
                <input type="text" name="search" placeholder="what are you looking for" id="searchme" />
            </div>
            <div className="icons">
                <div className="fav">
                    <img src="" alt="" />
                    fav
                </div>
                <div className="fav">cart</div>
                <div className="fav">login</div>
            </div>
        </div>
    )
}
export default Header