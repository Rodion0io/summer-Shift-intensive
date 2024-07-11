import cheese from "../../assets/photos/chez.png"

function SupplementCard({toppingsPhoto, toppingsName, toppingsPrice, id}){

    return (
        <div className="supplement-card">
            <div className="card-container">
                <img src={toppingsPhoto} alt="" className="supplement-photo" />
                <div className="supplement-information">
                    <p className="supplement-name">{toppingsName}</p>
                    <p className="supplement-price">{`${toppingsPrice} ₽`}</p>
                </div>
            </div>
        </div>
    )
}

export default SupplementCard;