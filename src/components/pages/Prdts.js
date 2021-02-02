import React from 'react';
import './Prdts.css';
import CardItem from '../CardItem'
import Media from 'react-bootstrap/Media'
import Carousel from 'react-bootstrap/Carousel'

import pic from '../pages/img/ROV2.png'
import pic1 from '../pages/img/ROV4.jpg'
import detail from '../pages/img/RovDetails.jpg'
import label from '../pages/img/Labled3.jpg'
import Footer from '../Footer'
import soft from '../pages/img/soft.jpg'

import Rov from './img/ROV2.png'
function Prdts() {
  return (
    <>
      <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={pic1} class="d-block w-100" alt="..." />
            </div>

          </div>
        </div>
      </div>




      <div className="container-fluid mb-5">
        
          <div className="container">
            <h1 style={{ padding: "3%", fontSize: "2.5rem" }} > Product Details</h1>
          </div>

      </div>

      
      


            <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto"></div>


          <div className="container" style={{ textAlign: "justify" }}>
            <div className="row"  >

              <div className="col-md-6" style={{ padding: "0px 0px 0px 5%"}} >
              <img src={detail} className="img-fluid" 
              width="90%"
              height="45%"/>
              </div>
              <div className="col-md-6"  style={{ padding: "2.5% 0px 0px 0px"}} >
                <img src="../images/ROV2.PNG" className="img-fluid" />
              </div>
            </div>
          </div>

        </div>
      </div>



    



      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto"></div>


          <div className="container" style={{ padding: "3%", textAlign: "justify" }}>
            <div className="row">

              <div className="col-md-6" >
                <h1 style={{ fontSize: "2.3rem" }} >Description</h1>
                <h2 style={{ fontSize: "1.5rem", paddingTop: "5%" }}>

                  The ROV is an affordable high-performance underwater ROV. With six-thruster configurations, a number of available accessories, and open source software, it has an high level of performance, flexibility, and expandability.The ROV is one of the optimized  underwater ROV on the market!

               </h2>

                <h1 style={{ fontSize: "2.3rem", paddingTop: "5%" }} >Modular Lightweight Frame</h1>
                <h2 style={{ fontSize: "1.5rem", paddingTop: "5%" }}>
                  The ROV chassis is constructed using HDPE material,  making it lite and sturdy.
                  This simple design is robust and expandable, making it easy to attach various payloads for different applications.
</h2>
              </div>
              <div className="col-md-6">
                <img src="../images/ROV2.PNG" className="img-fluid" />
              </div>
            </div>
          </div>

        </div>
      </div>



      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto"></div>

          <div className="container" style={{  textAlign: "justify" }}>
            <div className="row" >
              <div className="col-md-6">
                <div className="container-fluid mb-3"  >
                  <img src="../images/Thruster1.jpg" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6" >
                <h1 style={{ fontSize: "2.3rem", paddingTop: "5%" }} >Depth Rating</h1>
                <p style={{ fontSize: "1.3rem", paddingTop: "5%" }} >
                  The ROV is rated to a depth of 200 meters (660 ft). That rating is limited by a number of factors, including the crush depth of the 6” acrylic watertight enclosure tube, with adaquate safety factors considered.
           </p>

                <h1 style={{ fontSize: "2.3rem",paddingTop: "5%" }}>Thruster Configuration</h1>
                <p style={{ fontSize: "1.3rem", paddingTop: "5%" }} > Our ROV uses High Power 5 Kgf Thrusters in a vectored configuration, providing a high thrust-to-weight ratio and the ability to move precisely in any planar direction. The ROV comes with eight thrusters providing full six-degree-of-freedom control for high maneuverability.</p>
              </div>
              <hr class="featurette-divider " />
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto"></div>

          <div className="container" style={{ padding: "3%", textAlign: "justify" }}>
            <div className="row" >
              <div className="col-md-6" >
                <h1 style={{ fontSize: "2.3rem" }}>Software and User Interface</h1>
                <p style={{ fontSize: "1.3rem", paddingTop: "15%" }} >
                  The ROV is controlled by a drone flight controller running the open-source Ardusub subsea vehicle control firmware. As part of the ArduPilot project, it brings to the ROV a vast number of features, capabilities, and an extensive user community.

                  At the surface, the pilot controls the ROV through a laptop computer and controller. The open-source QGroundControl application acts as the user interface, providing the live video stream, sensor feedback and information, and the ability to change settings and configuration.
            </p>
              </div>
              <div className="col-md-6">
                <div className="container-fluid mb-3"  >
                  <img src={soft} className="img-fluid" />
                </div>
              </div>

              <hr class="featurette-divider " />
            </div>
          </div>

        </div>
      </div>




      <div>



      </div>

      
    </>

  );


}

export default Prdts;


