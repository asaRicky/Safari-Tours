import React from "react"
import { Link } from "react-router-dom"
import logo from "../img.png"
const Navbar = () =>{
  return(
      <div className="Navbar">
        <div>
          <img id="logo" src={logo} alt="logo"/>
        </div>
        <div className="list">
          <li><Link to="/">Home</Link></li>
         <li><Link to ="/booked">Tours</Link></li>
         <li><Link to="/">price</Link></li>
        
        </div>
      </div>
  )
}

export default Navbar;