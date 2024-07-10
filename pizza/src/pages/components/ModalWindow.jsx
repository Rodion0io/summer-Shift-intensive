import "../../style/styleModalWindow.css"
import cross from "../../assets/icon/Cross.svg"
import piz from "../../assets/photos/pizz.png"
import { useState } from "react"
import SupplementCard from "./supplementCard"
import "../../style/styleSupplementCard.css"

function ModalWindow({active, setActive}){



    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className="modal__content">
                    <div className="modal__content_header">
                        <div className="modal__content__btn">
                        <img src={cross} alt="" className="modal__content__close" onClick={() => setActive(false)} />
                        </div>  
                    </div>
                    <div className="modal__content__container">
                        <img src={piz} alt="" className="pizza-photo currnet-pizza-photo" />
                        <div className="pizza-parametrs">
                            <div className="pizza-parametrs__text">
                                <div className="text-information">
                                    <h2 className="title">Двойной цыпленок</h2>
                                    <p className="text-description">30 см, традиционное тесто</p>
                                    <p className="pizza-structure">Цыпленок , моцарелла, фирменный соус альфредо</p>
                                </div>
                                <div className="choose-block">
                                    <button className="choose-size active">Маленькая</button>
                                    <button className="choose-size">Средняя</button>
                                    <button className="choose-size">Большая</button>
                                </div>
                            </div>
                            <div className="pizza-parametrs__additives">
                                <p className="pizza-parametrs__additives__subtitle">Добавить по вкусу</p>
                                <div className="pizza-parametrs__additives-container">
                                    <SupplementCard></SupplementCard>
                                    <SupplementCard></SupplementCard>
                                    <SupplementCard></SupplementCard>
                                </div>
                                
                            </div>
                            <a href="#" className="select-btn add-basket">Добавить в корзину</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalWindow;