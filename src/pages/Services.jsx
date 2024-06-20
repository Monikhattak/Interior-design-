import React from 'react';
import "./Services.css";
import Interior_icon from '../assets/Interior design icon.png';

import Lighting_icon from '../assets/Lighting design icon.png';

import Outdoor_icon from '../assets/Outdoor design icon.png';


function Services() {
  return (
    <div className='Service-Container'>
    <h1>Our Services</h1>
    <div className='Service-Cards'>
        <div className='Service-Card'>
            <div className="Service-Header">
              <img src={Lighting_icon} className="Service-Icon" />
              <h2>Lighting</h2>
            </div>
            <p>Achieve the perfect balance of ambient, task, and accent
            <br /> lighting for a functional atmosphere.</p>
            <button className="Service-Button">Learn More</button>
        </div>
        <div className='Service-Card'>
            <div className="Service-Header">
              <img src={Interior_icon}  className="Service-Icon" />
              <h2>Interior</h2>
            </div>
            <p>From concept to completion, we oversee every detail to bring your vision to life efficiently 
                <br />
                <br />
                
            </p>
            <button className="Service-Button">Learn More</button>
        </div>
        <div className='Service-Card'>
            <div className="Service-Header">
              <img src={Outdoor_icon}  className="Service-Icon" />
              <h2>Outdoor</h2>
            </div>
            <p>Celebrate the changing seasons with our seasonal outdoor decor services</p>
            <br />
            
            <button className="Service-Button">Learn More</button>
        </div>
    </div>
</div>
  );
}

export default Services;
