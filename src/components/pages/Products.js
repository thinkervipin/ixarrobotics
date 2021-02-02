import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Media from 'react-media'



 export default function Prodcuts () {

return(
        <>
        
                

    <div>
    
    <h1 className='products'>ROV</h1>
    </div>
    <h2 style={{color:"rgb(70,145,202)", textAlign:"center", fontSize:"50px"}}><strong>Our Product Details</strong></h2>
    <section>
    <div className="col-lg-6 order-1 order-leg-2 header-img">
                                    <img src="../" className="img-fluid animated" alt="home img" />
                                </div>
    
    <div classname="container">

    <table class="table table-dark" style={{ textAlign:"justify"}}>
    <strong>
    
  <thead>
    <tr style={{ fontSize:"25px", color:"darkblue", textAlign:"center"}}>
      
      <th>Parameter</th>
      <th>Specifications</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dimensions</td>
      <td>Length -650mm, Width-408mm ,Height-380mm</td>
      
    </tr>
    <tr>
      <td>Weight In Air</td>
      <td>22kgs</td>
    
    </tr>
    <tr>
      <td>Power Input</td>
      <td> 230V, 4.5A ,@50-60Hz (Single Phase)</td>
      
    </tr>
    <tr>
      <td>Power Consumptions</td>
      <td>900W (Nominal), 12000W (Max)</td>
      
    </tr>
    <tr>
      <td>Depth Rating</td>
      <td> 200m</td>
      
    </tr>
    <tr>
      <td>Operating Temperature Range</td>
      <td> 15-45 Deg.c</td>
      
    </tr>
    <tr>
      <td>Deployment and Recovery</td>
      <td> Manual + Crane</td>
      
    </tr>
    <tr>
      <td>Controller Pad</td>
      <td> 6 Axis </td>
      
    </tr>
    <tr>
      <td>Electrical Safety & Distribution</td>
      <td> Short-Circuit Protection; Ground-Fault<span>Current-Leak Protection; Emergency Shut Down; Over Current Prtection</span></td>
      
    </tr>
    <tr>
      <td>Control System</td>
      <td> Openloop System with Human Machine Inerface</td>
      
    </tr>
    <tr>
      <td>Depth Accurancy</td>
      <td>10mm Resolution</td>
      
    </tr>
    <tr>
      <td>Payloads</td>
      <td> Laser Scaler, 360 Sonar Profiling</td>
      
    </tr>
    <tr>
      <td>Illumination  </td>
      <td> 6000 Lumen Forward</td>
      
    </tr>
    <tr>
      <td>Vision Feed</td>
      <td> 1920*1080p @30 FPS</td>
      
    </tr>
  </tbody>
  </strong>
  </table>
    </div>
    </section>
    
    <Footer/>
    
    
    

    
    
    </>
    )
}

