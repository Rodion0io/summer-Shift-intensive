import pizz from "../../assets/photos/pizz.png"
import cross from "../../assets/icon/BlackCross.svg"
import "../../style/styleChoosePizzaInformaton.css"

function ChoosePizzaInformation(){

    return (
        <>
            <div className="order-card">
                <img src={pizz} alt="" className="order-photo" />
                <p className="order-name">Двойной цыпленок</p>
                <p className="order-description">Средняя 30 см, традиционное тесто + моцарелла, халапеньо</p>
                <div className="count-block">
                    <div className="bar">
                        <div className="bar-settings">
                            <span className="minus">-</span>
                            <span className="current-count">1</span>
                            <span className="plus">+</span>
                        </div>
                    </div>
                </div>
                <button className="change-order">Изменить</button>
                <p className="order-cost">620 р</p>
                <img src={cross} alt="" className="delete-order" />
            </div>
        </>
    )
}

export default ChoosePizzaInformation;