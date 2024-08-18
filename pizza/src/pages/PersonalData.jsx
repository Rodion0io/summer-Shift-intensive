import Navbar from "./components/Navbar";


function PersonalData(){

    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <h2 className="title-data">Введите ваши данные</h2>
                <form action="" className="input-personal-data">
                    <div className="personal-form">
                        <label htmlFor="surname">Фамилия*</label>
                        <input type="text"/>
                    </div>
                    <div className="personal-form">
                        <label htmlFor="name">Имя*</label>
                        <input type="text"/>
                    </div>
                    <div className="personal-form">
                        <label htmlFor="phone-number">Номер телефона*</label>
                        <input type="number"/>
                    </div>
                    <div className="personal-form">
                        <label htmlFor="email">Email</label>
                        <input type="text"/>
                    </div>
                    <div className="personal-form">
                        <label htmlFor="address">Адрес</label>
                        <input type="text"/>
                    </div>
                </form>
                <div className="button-navigation">
                    <button className="select-btn ">
                        <a href="#" className="enter">Оформить заказ</a>
                    </button>
                    <button className="select-btn">
                        <a href="#" className="enter">Оформить заказ</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PersonalData;