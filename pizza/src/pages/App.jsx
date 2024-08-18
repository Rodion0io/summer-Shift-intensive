import "../style/App.css"
import MainPage from "./MainPage"
import BasketPage from "./BasketPage"
import PersonalData from "./PersonalData"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react"

function App(){
  const [currentOrder, setCurrentOrder] = useState(null);

  const updateOrderState = (orderObject) => {
    setCurrentOrder(orderObject);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage updateState={updateOrderState}/>}></Route>
          <Route path="/basket" element={<BasketPage selectedPizzaInformation={currentOrder}/>}></Route>
          <Route path="/data" element={<PersonalData/>}></Route>
        </Routes> 
      </BrowserRouter>
      
    </>
  )
}

export default App