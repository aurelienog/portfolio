import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navBar/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

function App() {

  return (
    <div className="[--header-height:4rem]">
    <Navbar/>
    <Routes>
      <Route path="/home?" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    </div>
  )
}

export default App
