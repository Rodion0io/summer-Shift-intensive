import pizz from "../../assets/photos/pizz.png"
import cross from "../../assets/icon/BlackCross.svg"
import "../../style/styleChoosePizzaInformaton.css"
import { useState } from "react"


function ChoosePizzaInformation({photo, title, size, toppings}){

    const [count, countUpdate] = useState(1);

    return (
        <>
            <div className="order-card">
                <img src={pizz} alt="" className="order-photo" />
                <p className="order-name">Двойной цыпленок</p>
                <p className="order-description">Средняя 30 см, традиционное тесто + моцарелла, халапеньо</p>
                <div className="count-block">
                    <div className="bar">
                        <div className="bar-settings">
                            <button className="minus" onClick={() => count == 1 ? countUpdate(count) : countUpdate(count - 1)}>-</button>
                            <span className="current-count">{count}</span>
                            <button className="plus" onClick={() => countUpdate(count + 1)}>+</button>
                        </div>
                    </div>
                </div>
                <button className="change-order">Изменить</button>
                <p className="order-cost">{`${620 * count} р`}</p>
                <img src={cross} alt="" className="delete-order" />
            </div>
        </>
    )
}

export default ChoosePizzaInformation;