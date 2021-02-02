import React from 'react';
import './TeamM.css';

import CardItem from './CardItem';

function TeamM() {
  return (
    <>
    <div className="cardsm">
   

    <div className='cardsm'>
      <h1>Founder</h1>
      <hr style={{width:"41%",marginLeft:"30%",}}/>
      <div className='cards__containerf'>
        <div className='cards__wrapperm'>
          <ul className='cards__itemsm'>
            <CardItem
              src='/images/Rishi.jpg'
              text='Rishi Jain'
              name='B-Tech Metallurgy and Material science IIT Bombay 2019'
              label='Founder'
              path='/team'
            />
           
          </ul>
      
        </div>
      </div>
    </div>








   


    <div className='cardsm'>
      <h1>Team</h1>
      <hr style={{width:"41%",marginLeft:"30%",}}/>
      <div className='cards__containert'>
        <div className='cards__wrapperm'>
          <ul className='cards__itemsm'>
            <CardItem
              src='/images/Rishi.jpg'
              text='Vipin K V'
              name='B-Tech Mechatronics SRM IST 2020'
              label='Technical Manager'
              path='/team'
            />
           <CardItem
              src='/images/Rishi.jpg'
              text='Harsh Matoo'
              name='B-Tech Mechatronics SRM IST 2020'
              label='Operations Manager'
              path='/team'
            />
          </ul>
          <ul className='cards__itemsm'>
          <CardItem
              src='/images/Rishi.jpg'
              text='Suraj Yadav'
              name='Bachelor Of Science Information Technology 2020'
              label='Operations coordinator'
              path='/team'
            />
             <CardItem
              src='/images/Rishi.jpg'
              text='Ashish Mishra'
              name='Bachelor of Science Information Technology 2018'
              label='Web Developer'
              path='/team'
            />
          </ul>
      
        </div>
      </div>
    </div>

    <h1>Our Mentors</h1>
    {/* <p style={{textAlign:"center",fontSize:"29px", }}>Focus Area</p> */}
    <hr style={{width:"41%",marginLeft:"30%",}}/>
    <div className='cards__containerm'>
      <div className='cards__wrapper'>
      <ul className='cards__items'>
        <CardItem
              src='/images/Rishi.jpg'
              text='Anil Jain '
              name='Managing Director IXAR'
              label='Mentor'
              path='/team'
            />
           
            <CardItem
              src='/images/Rishi.jpg'
              text='Rohit Jain '
              name='Pursuing - PhD from University of Houston, USA
              IIT Bombay 2017
              '
              label='Technical Mentor'
              path='/team'
            />


          </ul>
          </div>
          </div>
          </div>
        
    



    </>
  );
}

export default TeamM;