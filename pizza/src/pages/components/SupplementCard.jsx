import { useEffect, useState } from "react";

function SupplementCard({id, toppingsPhoto, toppingsName, toppingsPrice, currentModalWindowStatus, toppingStatus, changeToppingStatus}){

    let nameClass = "supplement-card";

    const clickHandle = () => {
        changeToppingStatus(id);
    }

    useEffect(() => {
        if (!toppingStatus){
            nameClass = "supplement-card";
        }
        else{
            nameClass = "supplement-card selected";
        }
    }, [toppingStatus]);

    return (
        <div className={nameClass} onClick={() => clickHandle()}>
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