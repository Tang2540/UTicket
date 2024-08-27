import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Mainlayout = () => {
  return (
    <div className="flex flex-col h-screen">
    <Navbar/>
    <main className="flex-1">
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default Mainlayout