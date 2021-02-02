import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBoot.css'
import logo from '../images/ixar.png'
import 'bootstrap'
import {Button} from './Button'
const NavBoot =() =>{


    
    return(
        <>
        
        <nav className="navbar  sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="90" height="30"/>
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       {/* <ul className="navbar-nav mr-auto mb-6 mb-lg-0 ">  */}
       
       <ul className="nav navbar-nav navbar-center ">
       
        <li className="nav-item  ">
        <a className="nav-link active" aria-current="page" href="/" align-text ="center">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/services">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/product">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
      
      </ul>
      
      <ul className="nav navbar-nav navbar-right">
     
     
      <a  href="tel: 9930652916" style={{textDecoration:"none", color:"white"}}>
       <button type="button" class="btn btn-success">
          Call
      </button> 
      </a>
       
      </ul>
       {/* <button type="button" className="btn btn--primary" href="/call">Call</button>    */}
     
    </div>
  </div>
</nav>


        </>
    )
}
export default NavBoot