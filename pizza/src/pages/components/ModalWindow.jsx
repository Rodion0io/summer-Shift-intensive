import "../../style/styleModalWindow.css";
import cross from "../../assets/icon/Cross.svg";
import { useState, useEffect } from "react";
import SupplementCard from "./SupplementCard";
import "../../style/styleSupplementCard.css";
import { useNavigate } from "react-router-dom";
import { DOUGH } from "../../constants";
import { TRANSLATE } from "../../constants";


function ModalWindow({ active, setActive, pizzaName, pizzaPhoto, description, toppings, id, updateState, price}) {

    const [toppingStatus, setToppingStatus] = useState(0);
    const navigateBasket = useNavigate();
    const [currentCondition, updateCondition] = useState(0);
    const [chosenToppingArray, setChosenToppingArray] = useState([]);
    
    const toppingsCopy = [...toppings];
    

    useEffect(() => {
        if (active === false){
            setToppingStatus(0);
        }
    }, [active]);


    toppingsCopy.map(topping => topping["isSelected"] = false);

    const [selectedPizzaInfa, setSelectedPizzaInfa] = useState({
        pizzaName: pizzaName,
        pizzaPhoto: pizzaPhoto,
        price: price,
        toppin: chosenToppingArray,
        size: currentCondition,
    });

    const [toppingsArray, setToppingsArray] = useState(toppingsCopy);

    useEffect(() => {
        if (!active) {
            updateCondition(0);
            setSelectedPizzaInfa({
                pizzaName: pizzaName,
                pizzaPhoto: pizzaPhoto, 
                price: price, 
                toppin: chosenToppingArray,
                size: currentCondition,
            });
        }
        else{
            setSelectedPizzaInfa({
                pizzaName: pizzaName,
                pizzaPhoto: pizzaPhoto, 
                price: price, 
                toppin: chosenToppingArray,
                size: currentCondition,
            });
        }
    }, [active, currentCondition, chosenToppingArray]);

    const handleClick = () => {
        navigateBasket("/basket");
        updateState(selectedPizzaInfa);
        updateCondition(0);
        setActive(false);
    }

    const supplementClick = (identifier) => {
        if (!toppingStatus){
            setToppingStatus(toppingsArray[identifier].isSelected = true);
            setChosenToppingArray([...chosenToppingArray, toppingsArray[identifier]])
        }
        else{
            setToppingStatus(toppingsArray[identifier].isSelected = false);
            setChosenToppingArray(chosenToppingArray.filter((topping, index) => index !== identifier));
        }
    }

    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className="modal__content_header">
                        <div className="modal__content__btn">
                            <img src={cross} alt="" className="modal__content__close" onClick={() => { setActive(false); updateCondition(0); }} />
                        </div>
                    </div>
                    <div className="modal__content__container">
                        <img src={pizzaPhoto} alt="" className="pizza-photo currnet-pizza-photo" />
                        <div className="pizza-parametrs">
                            <div className="pizza-parametrs__text">
                                <div className="text-information">
                                    <h2 className="title">{pizzaName}</h2>
                                    <p className="text-description">{`${currentCondition === 0 ? "25см" : currentCondition === 1 ? "30см" : "35см"}, ${DOUGH}`}</p>
                                    <p className="pizza-structure">{description}</p>
                                </div>
                                <div className="choose-block">
                                    <button className={currentCondition === 0 ? "choose-size active" : "choose-size"} onClick={() => updateCondition(0)}>Маленькая</button>
                                    <button className={currentCondition === 1 ? "choose-size active" : "choose-size"} onClick={() => updateCondition(1)}>Средняя</button>
                                    <button className={currentCondition === 2 ? "choose-size active" : "choose-size"} onClick={() => updateCondition(2)}>Большая</button>
                                </div>
                            </div>
                            <div className="pizza-parametrs__additives">
                                <p className="pizza-parametrs__additives__subtitle">Добавить по вкусу</p>
                                <div className="pizza-parametrs__additives-container">
                                    {toppingsCopy.map((data, index) => (
                                        <SupplementCard
                                            key={data.id}
                                            id={index}
                                            toppingsPhoto={`https://shift-backend.onrender.com${data.img}`}
                                            toppingsName={data.name}
                                            toppingsPrice={data.cost}
                                            toppingStatus={toppingStatus}
                                            changeToppingStatus={supplementClick}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button className="select-btn add-basket" onClick={handleClick}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalWindow;