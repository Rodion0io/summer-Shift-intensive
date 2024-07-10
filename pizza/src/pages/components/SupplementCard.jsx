import cheese from "../../assets/photos/chez.png"

function SupplementCard(){

    return (
        <div className="supplement-card">
            <div className="card-container">
                <img src={cheese} alt="" className="supplement-photo" />
                <div className="supplement-information">
                    <p className="supplement-name">Сырный бортик</p>
                    <p className="supplement-price">179 ₽</p>
                </div>
            </div>
        </div>
    )
}

export default SupplementCard;