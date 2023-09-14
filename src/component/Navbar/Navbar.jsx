import React from 'react'
import { Link } from 'react-router-dom'
import navStyles from '../Navbar/Navbar.module.css'
import $ from "jquery"






export default function Navbar() {




  return (
    <>
    <nav id='NavBar' className={`navbar navbar-expand-lg  fixed-top ${navStyles.bg__nav}` } >
  <div className="container">
    <Link className="navbar-brand text-white fs-2 fw-bolder " to="">START FRAMEWORK
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  text-white fw-bold active  "  aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white fw-bold " aria-current="page" to="Portofolio">PORTOFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white fw-bold " aria-current="page" to="Contact">CONTACT</Link>
        </li>
       
       
        
      </ul>
     
    </div>
  </div>
</nav>
    
    
  
    
    </>
  )
}

