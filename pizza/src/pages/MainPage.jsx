import Navbar from "./components/Navbar";
import PizzaCard from "./components/PizzaCard";
import "../style/Navbar.css"
import "../style/mainPage.css"
import "../style/App.css"
import axios from "axios";
import { getPizza } from "../api/getPizza";
import { useState, useEffect } from "react";
import { URL } from "../constants";


function MainPage(){

    const [pizzaData, getPizzaDate] = useState([]);

    useEffect(() => {
     getPizza(URL, getPizzaDate);
    }, []);

    let toppingsArray = [];

    pizzaData.forEach(element => {
        toppingsArray.push(element.toppings);
    });

    return (
        <>
        <Navbar/>
        <section className="pizza-section">
        <div className="container">
          <div className="pizza-container">
            {pizzaData.map((data) => (
                <PizzaCard 
                key={data.id}
                pizzaName={data.name}
                pizzaPhoto={`https://shift-backend.onrender.com${data.img}`}
                description={data.description}
                pizzaPrice={`${data.sizes[0].price} ₽`}
                toppingsArray={toppingsArray[data.id - 1]}
                id={data.id}
                />
            ))}
          </div>
        </div>
      </section>
        </>
    )
}

export default MainPage;