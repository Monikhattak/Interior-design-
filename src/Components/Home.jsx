import React from 'react'
import "./Home.css"
import Home_img from '../assets/Image 1.png'
import Home_img2 from '../assets/Image 2.png'


function Home() {
  return (
    <div className="Hero_Section">
      <div className="Hero_Section_Container">
        <div className="content">
          <div className="Header">INTERIOR DESIGN</div>
          <p className='sub-heading'>
            Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance
            and cutting-edge <br />modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication
          </p>
          <div className="btn1">
            <button>Start Project</button>
          </div>
        </div>
        <img className="image" alt="Image" src={Home_img} />
      </div>
      <div className="counts">
      <div className="flexcontainer">
        <div className="flexitem">
          <p className="text">
            <span className="span">400+</span>
          </p>
          <p className="text">
            <span className="text-wrapper-2">Project Complete</span>
          </p>
        </div>
        <div className="flexitem">
          <p className="text">
            <span className="span">200+</span>
          </p>
          <p className="text">
            <span className="text-wrapper-2">Satisfied Clients</span>
          </p>
        </div>
        <div className="flexitem">
          <p className="text">
            <span className="span">100+</span>
          </p>
          <p className="text">
            <span className="text-wrapper-2">
            Unique Styles</span>

          </p>
          <img className="img2" alt="Image" src={Home_img2} />
        </div>
        
      </div>
      
    </div>
  
     
     

    
        
      
      </div>
    
  )
}

export default Home
