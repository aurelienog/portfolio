import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className=" bg-background [--header-height:6rem]">
      <Navbar/>
      <Routes>
        <Route path="/home?" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
