import React from 'react'
import mainLogo from "../assets/mainlogo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/home.css"
const Home = () => {
  return (
    <div className="text-center">
    <img src={mainLogo} className="rounded" alt="..."/>
  </div>
  )
}

export default Home
