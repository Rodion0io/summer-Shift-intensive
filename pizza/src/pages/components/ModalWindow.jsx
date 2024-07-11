import "../../style/styleModalWindow.css"
import cross from "../../assets/icon/Cross.svg"
import { useState } from "react"
import SupplementCard from "./SupplementCard"
import "../../style/styleSupplementCard.css"

function ModalWindow({active, setActive, pizzaName, pizzaPhoto, description, toppingsArray, id}){

    const [currentCondition, updateCondition] = useState(0);

    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className="modal__content" onClick={blocker => blocker.stopPropagation()}>
                    <div className="modal__content_header">
                        <div className="modal__content__btn">
                        <img src={cross} alt="" className="modal__content__close" onClick={() => setActive(false)} />
                        </div>  
                    </div>
                    <div className="modal__content__container">
                        <img src={pizzaPhoto} alt="" className="pizza-photo currnet-pizza-photo" />
                        <div className="pizza-parametrs">
                            <div className="pizza-parametrs__text">
                                <div className="text-information">
                                    <h2 className="title">{pizzaName}</h2>
                                    <p className="text-description">30 см, традиционное тесто</p>
                                    <p className="pizza-structure">{description}</p>
                                </div>
                                <div className="choose-block">
                                    <button className={currentCondition == 0 ? "choose-size active" : "choose-size"} onClick={() => updateCondition(0)}>Маленькая</button>
                                    <button className={currentCondition == 1 ? "choose-size active" : "choose-size"} onClick={() => updateCondition(1)}>Средняя</button>
                                    <button className={currentCondition == 2 ? "choose-size active" : "choose-size"} onClick={() => updateCondition(2)}>Большая</button>
                                </div>
                            </div>
                            <div className="pizza-parametrs__additives">
                                <p className="pizza-parametrs__additives__subtitle">Добавить по вкусу</p>
                                <div className="pizza-parametrs__additives-container">                                
                                    {toppingsArray.map((data) => (
                                        <SupplementCard
                                        key={data.id}
                                        toppingsPhoto={`https://shift-backend.onrender.com${data.img}`}
                                        toppingsName={data.name}
                                        toppingsPrice={data.cost}
                                        id={id}
                                        />
                                    ))}
                                </div>
                                
                            </div>
                            <button href="#" className="select-btn add-basket">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalWindow;