import Navbar from "./components/Navbar";
import "../style/styleEnterData.css"


function EnterData(){

    return (

        <>
        <Navbar/>

        <section className="autorization">
            <div className="container">
                <div className="aut-block">
                    <h2 className="section-title">Введите ваши данные</h2>
                    <div className="enter-block">
                        <p className="subtitle">Фамилия*</p>
                        <input type="text" className="input-field information-input" placeholder="Фамилия"/>
                    </div>
                    <div className="enter-block">
                        <p className="subtitle">Имя*</p>
                        <input type="text" className="input-field information-input" placeholder="Имя"/>
                    </div>
                    <div className="enter-block">
                        <p className="subtitle">Номер телефона*</p>
                        <input type="text" className="input-field information-input" placeholder="Номер телефона"/>
                    </div>
                    <div className="enter-block">
                        <p className="subtitle">Email</p>
                        <input type="text" className="input-field information-input" placeholder="Email" />
                    </div>
                    <div className="enter-block">
                        <p className="subtitle">Адрес</p>
                        <input type="text" className="input-field information-input" placeholder="Адрес"/>
                    </div>
                    <div className="btn-module">
                        <button className="select-btn back-btn">
                            <a href="#" className="enter-back">Назад</a>
                        </button>
                        <button className="select-btn cont-btn">
                            <a href="/card" className="enter">Продолжить</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default EnterData;