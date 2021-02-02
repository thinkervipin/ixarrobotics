import React from 'react';
import './Servc.css';
import CardItem from '../CardItem';

import Accordion from 'react-bootstrap';

function Servc() {
  return (
    <>
    <div>
        <div>

        <div className="servc">
      <h1>ROV</h1>
      {/* <p style={{textAlign:"center",fontSize:"29px", }}>Focus Area</p> */}
      <hr style={{width:"41%",marginLeft:"30%",}}/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='./images/Inspection.jpg'
              text='Visual Inspection'
              label='underwater'
              path='/visalinspection'
            />
            <CardItem
            
              src='/images/scaling.jpg'
              text='Laser Scaling'
              label='Robotics'
              path='/services'
            />
            <CardItem
               src='/images/metalthickness.jpg'
               text='Thickness Measurements 
                (UT & PECT)'
               label='pipeline'
               path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               src='/images/sonar1.JPG'
               text='Sonar Survey'
               label='Servey'
               path='/services'
            />
            <CardItem
               src='/images/rd.jpg'
               text='R&D as per Customer Requirement'
               label='R & D'
               path='/services'
            />
            <CardItem
              src='./images/bath.JPG'
              text='Bathymetry  '
              label='Bathmetry'
              path='/services'
            />
          </ul>
        
         
            </div>
            </div>
            </div>


        </div>
    
    </div>
{/* Our Industry */}
    {/* <div className="row">
      <div className="col-md-10">  */}
      
      <div className="servc">
      <h1>We Cater To</h1>
      {/* <p style={{textAlign:"center",fontSize:"29px", }}>Focus Area</p> */}
      <hr style={{width:"41%",marginLeft:"30%",}}/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='/images/ports.jpg'
              text='187 Minor & 12 Major Ports '
              label='Ports'
              path='/services'
            />
            <CardItem
              src='./images/bridge.jpg'
              text='Over 35000'
              label='Bridge'
              path='/services'
            />
            <CardItem
              src='/images/dams.jpg'
              text='5200 Dams'
              label='Dams'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/oils.jpg'
              text='120+ Oil rigs Pipe Lines Storage Tanks'
              label='Oils & Gas'
              path='/services'
            />
            <CardItem
              src='./images/power.jpg'
              text='25+ Stations Storage Tanks'
              label='Power'
              path='/services'
            />
            <CardItem
              src='/images/shi.jpg'
              text='150+ Naval & 800+ Commercial Ships'
              label='Shipping'
              path='/services'
            />
          </ul>
        
         
            </div>
            </div>
            </div>

     

   </>
   
  );
  
  
}

export default Servc;


