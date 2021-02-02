import React, { Component } from 'react'
import  {MenuItems} from "./MenuItems"
import './Navbar2.css'
class Navbar2 extends Component{
    render(){
        return(
        <nav className="NavbarItems">
            <h1
            className="navbar-logo"
            >IXAR

            </h1>
            
            <ul>
                {MenuItems.map((items,index)=>{
                    <li><a className={items.cName} href={items.url}>
                        {items.title}
                        </a>
                   </li>

                })}
                
            </ul>
        </nav>
        )
    }
}

export default Navbar2