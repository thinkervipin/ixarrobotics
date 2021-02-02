import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import pic1 from './pages/img/ROV2.png'
import pic2 from './pages/img/1.jpg'
function HeroSection() {
    return (
      <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={pic2} class="d-block w-100" alt="..."/>
      </div>
      </div>
      </div>
      </div>

        
    )
}

export default HeroSection
