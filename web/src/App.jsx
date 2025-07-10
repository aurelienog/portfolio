import { Routes, Route } from "react-router-dom"
import StickyHeader from "./components/sticky-header/StickyHeader"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import Footer from "./components/footer/Footer"
import GradientLayout from "./components/layout/GradientLayout"
import ProjectPage from "./pages/ProjectPage"


function App() {

  return (
    <>
      <GradientLayout>
        <StickyHeader> 
          <Navbar/>
        </StickyHeader>  
        <Routes>
          <Route path="/home?" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/projects/:id" element={<ProjectPage/>}/>
        </Routes>
        <Footer/>
      </GradientLayout>
    </>
  )
}

export default App
