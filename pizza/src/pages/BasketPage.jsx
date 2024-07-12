import Navbar from "./components/Navbar";
import "../style/styleBasketPage.css"
import ChoosePizzaInformation from "./components/ChoosePizzaInformation";


function BasketPage(){

    const listOrders = [];

    return (
        <>
            <Navbar></Navbar>

            <section className="order">
                <div className="basket-container">
                    <div className="chosen-pizza-block">
                        <ChoosePizzaInformation></ChoosePizzaInformation>
                        <ChoosePizzaInformation></ChoosePizzaInformation>
                    </div>

                    <div className="line"></div>

                    <div className="order-result">
                        <div className="text-result">
                            <h2 className="cost">Стоимость заказа:</h2>
                            <h2 className="price">1240 р</h2>
                        </div>
                        <button className="select-btn order-btn" >
                            <a href="/data" className="enter">Оформить заказ</a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BasketPage;