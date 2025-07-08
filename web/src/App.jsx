import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <header className="sticky top-0 bg-background z-50 h-[var(--header-height)] content-center"> 
        {/*  shadow-lg */}
        <Navbar/>
      </header>
      <Routes>
        <Route path="/home?" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
