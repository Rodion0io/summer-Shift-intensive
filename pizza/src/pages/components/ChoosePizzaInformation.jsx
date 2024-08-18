import cross from "../../assets/icon/BlackCross.svg"
import "../../style/styleChoosePizzaInformaton.css"
import { useState } from "react"
import { DOUGH } from "../../constants";
import PizzaCard from "./PizzaCard";


function ChoosePizzaInformation({photo, title, descripion, price, size, toppings}){

    const [count, countUpdate] = useState(1);
    const pizzSize = size === 0 ? "Маленькая 25см" : size === 1 ? "Средняя 30см" : "Большая 35см"

    return (
        <>
            <div className="order-card">
                <img src={photo} alt="" className="order-photo" />
                <p className="order-name">{title}</p>
                <p className="order-description">{`${pizzSize}, ${DOUGH}`}<br />{toppings.length != 0 ? "+ " +  toppings.map(topping => topping.name.toLowerCase()).join(', ') : " "}</p>
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
                <p className="order-cost">{`${parseInt(price) * count} ₽`}</p>
                <img src={cross} alt="" className="delete-order" />
            </div>
        </>
    )
}

export default ChoosePizzaInformation;