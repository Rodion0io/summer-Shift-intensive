import Navbar from "./components/Navbar";
import "../style/styleBasketPage.css";
import ChoosePizzaInformation from "./components/ChoosePizzaInformation";
import { useEffect, useState } from "react";
import photo from "../assets/photos/pizz.png"
 
function BasketPage({ selectedPizzaInformation }) {

    const [pizzasArray, setPizzasArray] = useState([]);

    useEffect(() => {
        if (selectedPizzaInformation != null && selectedPizzaInformation != undefined) {
            setPizzasArray([...pizzasArray, selectedPizzaInformation]);
        }
    }, [selectedPizzaInformation]);

    console.log(pizzasArray);
    
    const calcCost = () => {
        let cost = 0;
        pizzasArray.forEach(basketElement => cost += parseInt(basketElement.price));
        return cost;
    }

    return (
        <>
            <Navbar/>

            <section className={pizzasArray.length === 0 ? "order none" : "order"}>
                <div className="basket-container">
                    <div className="chosen-pizza-block">
                        {pizzasArray.map((data, index) => (
                            <ChoosePizzaInformation
                                key={index}
                                photo={data.pizzaPhoto}
                                title={data.pizzaName}
                                descripion={data.description}
                                price={data.price}
                                size={data.size}
                                toppings={data.toppin}
                            />
                        ))}
                    </div>

                    <div className="line"></div>

                    <div className="order-result">
                        <div className="text-result">
                            <h2 className="cost">{`Стоимость заказа: ${calcCost()}`}</h2>
                            <h2 className="price"></h2>
                        </div>
                        <button className="select-btn order-btn">
                            <a href="/data" className="enter">Оформить заказ</a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BasketPage;