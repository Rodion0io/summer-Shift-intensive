import "../../style/Navbar.css"
import humanLogo from "../../assets/icon/Human.svg"
import clockLogo from "../../assets/icon/Clock.svg"
import basketLogo from "../../assets/icon/Basket.svg"
import exitLogo from "../../assets/icon/Exit.svg"

function Navbar(){

    return (
        <header className="hero">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <div className="title">
                            <p className="shft-text">ШИФТ</p>
                            <p className="shift-pizza">PIZZA</p>
                        </div>
                        <div className="circle"></div>
                    </div>
                    <div className="links">
                        <div className="first-links">
                            <div className="linkk">
                                <img src={humanLogo} alt="" className="link-icon"/>
                                <a href="/" className="link-text">Профиль</a>
                            </div>
                            <div className="link">
                                <img src={clockLogo} alt="" className="link-icon"/>
                                <a href="#" className="link-text">Заказы</a>
                            </div>
                        </div>
                        <div className="second-links">
                            <div className="linkk">
                                <img src={basketLogo} alt="" className="link-icon"/>
                                <a href="/basket" className="link-text">Корзина</a>
                            </div>
                            <div className="link">
                                <img src={exitLogo} alt="" className="link-icon"/>
                                <a href="#" className="link-text">Войти</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;