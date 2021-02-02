import React from 'react'
import '../App.css'
import { Button } from './Button'
import '../components/About.css'
import pica from './pages/img/R1.jpg'
import picb from './pages/img/ROV2.png'
import picc from './pages/img/Label3.jpg'
import Carousel from 'react-bootstrap/Carousel'

function About() {

   

    
    return (
        <>
             <div className='hero-container'>
             <video src='/videos/video-3.mp4' autoPlay loop muted />
             <h1>Welcome</h1>
             <p>IXAR Robotic Solution</p>

            </div>
            
              <div className="aboutcss">
                 <div class="d-flex">
               
                    <div className="row ">
                        <div className="col-10 "></div>
                        
                        <div className='row'>
                      
                            <h1>Who We Are</h1>

                            <div>

                                {/* <hr class="featurette-divider " /> */}

                                <div class="row border rounded overflow-hidden">
                                    <div class="col-sm-7" style={{ padding: "5%" }} >
                                        <h2 class="featurette-heading"><h1>We Believe </h1>It’s just the beginning of a new dive, but the waters we plan to travel is deep</h2>
                                        <h4>
                                            We at IXAR Robotics Solution, in assosiation with students of  IIT-Bombay Alumni with a vision of providing submersible Robotic Inspection and Survey Solutions using Remotely Operated Vehicles (ROVs).

                                            We are a growing team of young tech enthusiasts who aim to design and built robots from scratch to go deep in the water bodies to replace your divers and complete the same inspection in much lesser time and cost effective.

                                    </h4>
                                    </div>
                                    <div class="col-sm-5" >
                                        {/* <img class="featurette-image img-responsive center-block" src={pica} height="390px" width="400px" alt="Generic placeholder image" /> */}
                                       
                                       <div className ="container-fluid mb-5" style={{ padding: "15%" }}>
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={pica}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={pica}
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Second slide label</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                

                </div>
                </div>

            <div>
            <div className="aboutcss">
                    <div className="d-flex">
                        <div className="row">
                            <div className="col-10 mx-auto"></div>
                            <div className='row'>

                                <h1 >What We Do</h1>

                                <div>

                                    {/* <hr class="featurette-divider " /> */}

                                    <div class="row border rounded overflow-hidden">
                                       
                                        <div class="col-sm-6 " style={{ padding: "10%" }}>
                                            {/* <img class="featurette-image img-responsive center-block" src={pica} height="390px" width="400px" alt="Generic placeholder image" /> */}
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={pica}
                                                        alt="First slide"
                                                    />
                                                    <Carousel.Caption>
                                                        <h3>First slide label</h3>
                                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={pica}
                                                        alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                        <h3>Second slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>

                                        </div>

                                        <div class="col-sm-6" style={{ padding: "5%" }} >
                                        <h2 class="featurette-heading"><h1>We Offer</h1></h2>
                                            
                                            <h4><p4 style={{ fontSize: "1.8rem",color:"skyblue"}}>Quick Deployment - </p4> Highly portable with a minimal support systems for launch and recovery</h4>
                                            <h2><p4 style={{ fontSize: "1.8rem",color:"skyblue"}}>Working 24x7 - </p4> (Day and night)</h2>
                                            <h2><p4 style={{ fontSize: "1.8rem",color:"skyblue"}}>Cost Effective -</p4>Offer high value proposition & provide unmatched customer experience</h2>
                                            <h2>Customized user related problem solving </h2>
                                            <h2>In-house maintenance of Vehicles </h2>
                                        </div>
                                    </div>
                                </div>

                                <div>


                                <div className="container-fluid mb-5">
                                <div className="row">
                       
                                 
                                <img src={picc}  alt="home.jpg"/>
                                   

                                   </div>
                                   </div>
                                </div>



                            </div>
                        </div>
                    </div>

              </div> 
            
            </div>


        </>

    )

}

export default About
