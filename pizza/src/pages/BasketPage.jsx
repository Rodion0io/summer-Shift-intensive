import Navbar from "./components/Navbar";
import "../style/styleBasketPage.css"
import ChoosePizzaInformation from "./components/ChoosePizzaInformation";


function BasketPage(){

    return (
        <>
            <Navbar></Navbar>

            <section className="order">
                <div className="basket-container">
                    
                    <div className="chosen-pizza-block">
                        
                    </div>

                    <ChoosePizzaInformation></ChoosePizzaInformation>

                    <div className="order-result">
                        <div className="text-result">
                            <h2 className="cost">Стоимость заказа:</h2>
                            <h2 className="price">1240 р</h2>
                        </div>
                        <button className="select-btn order-btn">Оформить заказ</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BasketPage;