import "../style/App.css"
import MainPage from "./MainPage"
import BasketPage from "./BasketPage"
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/basket" element={<BasketPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
