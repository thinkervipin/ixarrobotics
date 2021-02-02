import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <=960){

            
                setButton(false);
            }
            else
            {
                setButton(true);
            }
        }
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize',showButton);
    return (
        <> 
           
           <div className="container-fluid mb-5">
       
            <nav className="navbarc">
                <div className="navbar-containerc">
                    <Link to='/' className="navbar-logoc" onClick={closeMobileMenu}>
                        IXAR <i className="fab fa-typo3"/>
                    </Link>
                  <div className='menu-iconc' onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                      </div> 
                      <ul className={click ? 'nav-menuc active' : 'nav-menuc'}>
                      <li className='nav-itemc'>
                          <Link  className='nav-linksc' to='/' onClick={closeMobileMenu}>Home</Link>
                          </li>
                          
                          <li className='nav-itemc'>
                          <Link to='/services' className='nav-linksc' onClick={closeMobileMenu}>Service</Link>
                          </li>
                          <li className='nav-itemc'>
                          <Link to='/product' className='nav-linksc' onClick={closeMobileMenu}>Products</Link>
                          </li>
                          <li className='nav-itemc'>
                          <Link to='/contact' className='nav-linksc' onClick={closeMobileMenu}>Contact</Link>
                          </li>
                          <li className='nav-itemc'>
                          <Link to='/' className='nav-links-mobilec' onClick={closeMobileMenu}>Call</Link>
                      </li>
                    </ul>
                    {button && <Button  buttonStyle='btn--outline'> <a Link to="tel:+918967542354">Call</a></Button>} 
                </div>
 

            </nav>
            </div>
   
        </>
    )
}

export default Navbar
