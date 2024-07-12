import "../style/styleCardPage.css"
import Navbar from "./components/Navbar";

function CardPage(){

    return (
        <>
            <Navbar/>

            <div className="Card-data">
                <div className="container">
                    <div className="card-block">
                        <h2 className="section-title">Введите ваши данные</h2>
                        <div className="card-bank">
                           <div className="card-container">
                            <div className="number-card">
                                    <p className="subtitle">Номер*</p>
                                    <input type="text" className="input-field number-field" placeholder="0000 0000"/>
                                </div>
                                <div className="hidden-infa">
                                    <div className="term-card">
                                        <p className="subtitle">Срок*</p>
                                        <input type="text" className="input-field term-field" placeholder="00/00"/>
                                    </div>
                                    <div className="cvv-card">
                                        <p className="subtitle">CVV*</p>
                                        <input type="text" className="input-field term-field" placeholder="0000"/>
                                    </div>
                                </div>
                           </div>
                        </div>
                        <button className="select-btn pay-btn">
                                <a href="#" className="enter">Оплатить</a>
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPage;