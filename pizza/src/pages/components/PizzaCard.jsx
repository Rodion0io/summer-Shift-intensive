import "../../style/stylePizzaCard.css"
import pizzaPhoto from "../../assets/photos/pizz.png"

function PizzaCard({title, photo, description, price}){
    
    return(
        <div className="card">
            <img src={photo} alt="" className="card-pizza-photo pizza-photo" />
            <div className="pizza-information">
                <div className="pizza-text">
                    <h3 className="pizza-name">{title}</h3>
                    <p className="description">{description}</p>
                     <div className="footer-card">
                    <h3 className="price-tag">{`от ${price}`}</h3>
                    <a href="#" className="select-btn">Выбрать</a>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default PizzaCard