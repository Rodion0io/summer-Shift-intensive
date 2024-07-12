import "../style/App.css"
import MainPage from "./MainPage"
import BasketPage from "./BasketPage"
import EnterData from "./EnterData"
import CardPage from "./CardPage"
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/basket" element={<BasketPage/>}></Route>
          <Route path="/data" element={<EnterData/>}></Route>
          <Route path="/card" element={<CardPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
