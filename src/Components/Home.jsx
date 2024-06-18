import React from 'react'
import "./Home.css"
import Home_img from '../assets/Image 1.png'
import Home_img2 from '../assets/Image 2.png'
function Home() {
  return (
    <div className="home-container">
    <div className="home-content">
      <h1>Interior Design</h1>
      <p>
        Step into a world where the art of Interior Design is meticulously
        crafted to bring together timeless elegance and cutting-edge modern
        Innovation, allowing you to transform your living space into the epitome of
        luxury and sophistication.
      </p>
    </div>
    <div className="home-image">
      <img src={Home_img} alt="Interior Design" />
    </div>
    <div className="home-button">
      <button>Start Project</button>
    </div>
    <div className="home-stats">
      <span>600+</span>
      <span>500+</span>
      <span>700+</span>
      <span className="project">project</span>
    </div>
    <div className="home-image-2">
      <img src={Home_img2} alt="Project Image" />
    </div>
  </div>
  )
}

export default Home
