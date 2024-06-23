import React from 'react'
import './Section.css'
import Mask_group from '../assets/Mask group (1).png'

function Section() {
  return (
    <div className='sectionContainer'>
      <div className="section"> 
        <img src={Mask_group} alt="Design illustration" className="mask-group" />
        <div className="SectionContent">
          <h1 className='head'>Designing Your Dream With Brilliance</h1>
          <p>
            Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations,
          crafted with precision and brilliance for an unforgettable living experience
          </p>
          <br />
          <span>Living Room Interior Design </span>
          <br />
          <span>Commercial Office Room Interior Design </span><br />
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Section
