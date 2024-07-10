import Navbar from "./Navbar";
import PizzaCard from "./PizzaCard";
import ModalWindow from "./ModalWindow";
import "../../style/Navbar.css"
import "../../style/mainPage.css"
import "../../style/App.css"
import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://shift-backend.onrender.com/pizza/catalog";

function MainPage(){

    const [pizzaData, getPizzaDate] = useState([]);
    const [modalActive, setModalActive] = useState(true);

    useEffect(() => {
     axios.get(URL).then(
      (respones) => {
        getPizzaDate(respones.data.catalog);
      }
     ).catch((error) => {
      console.log("Error!");
     })
    })

    return (
        <>
        <Navbar/>
        <section className="pizza-section">
        <div className="container">
          <div className="pizza-container">
            {pizzaData.map((data) => (
                <PizzaCard 
                key={data.id}
                title={data.name}
                photo={`https://shift-backend.onrender.com${data.img}`}
                description={data.description}
                price={`${data.sizes[0].price} ₽`}
                />
            ))}
          </div>
        </div>
      </section>
      <ModalWindow active={modalActive} setActive={setModalActive}/>
        </>
    )
}

export default MainPage;