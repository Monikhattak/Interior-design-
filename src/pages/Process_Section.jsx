import React from 'react';
import './Process_Section.css';
import Mask_process from '../assets/Mask group (1).png';
import process_icon from '../assets/Group 25.png';
import process_icon2 from '../assets/Group 27.png';
import process_icon3 from '../assets/Group 26.png';

function Process_Section() {
  return (
    <div className='processContainer'>
      <h1 className='heading'>Designing Your Dream in Three Simple Steps</h1>
      <div className="process">
        <div className="process-cards">
          <div className="processCard">
            <img src={process_icon} className="process_icon" alt="Process Icon" />
            <h3 className='process-title'>Start Project</h3>
          </div>
          <p className='paraghap'>
            Embark on your design adventure by initiating your project. <br />
            Share your vision and set the stage for a bespoke design experience
          </p>
        </div>
        <div className="process-cards">
          <div className="processCard">
            <img src={process_icon3} className="process_icon" alt="Process Icon" />
            <h3 className='process-title'>Craft</h3>
          </div>
          <p className='paraghap'>
          Collaborate closely to achieve design excellence refining your <br />
          vision and crafting brilliance into every aspect of your space.
          </p>
        </div>
        <div className="process-cards">
          <div className="processCard">
            <img src={process_icon2} className="process_icon" alt="Process Icon" />
            <h3 className='process-title'>Execute</h3>
          </div>
          <p className='paraghap'>
          Witness your vision becoming a reality as we execute the design <br />
           plan with precision.Celebrate the joy of your newly transformed space
          </p>
        </div>
      </div>
      <img src={Mask_process} className="processImage" alt="Process" />
    </div>
  );
}

export default Process_Section;
