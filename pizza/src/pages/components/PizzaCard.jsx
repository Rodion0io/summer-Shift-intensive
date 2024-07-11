import "../../style/stylePizzaCard.css"
import "../../style/styleModalWindow.css"
import ModalWindow from "./ModalWindow"
import { useState } from "react"


function PizzaCard({pizzaName, pizzaPhoto, description, pizzaPrice, toppingsArray, id}){

    const [modalActive, setModalActive] = useState(false);
    
    return(
        <>
        <div className="card">
            <img src={pizzaPhoto} alt="" className="card-pizza-photo pizza-photo" />
            <div className="pizza-information">
                <div className="pizza-text">
                    <h3 className="pizza-name">{pizzaName}</h3>
                    <p className="description">{description}</p>
                     <div className="footer-card">
                    <h3 className="price-tag">{`от ${pizzaPrice}`}</h3>
                    <button href="#" className="select-btn" onClick={() => setModalActive(true)}>Выбрать</button>
                </div>
                </div>
                
            </div>
        </div>
        <ModalWindow 
        active={modalActive}
        setActive={setModalActive}
        pizzaName={pizzaName}
        pizzaPhoto={pizzaPhoto}
        description={description}
        toppingsArray={toppingsArray}
        id={id}
        />
        </>
    )
}

export default PizzaCard