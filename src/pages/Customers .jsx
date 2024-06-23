import React from 'react';
import './Customers.css';
import MaskGroup from '../assets/Mask group (2).png';
import girl_img from '../assets/girl.png';
import bearded_young from '../assets/bearded-young-man-wearing-shirt 1.png';
import { FaStar } from 'react-icons/fa'; 

const testimonials = [
  {
    image: bearded_young,
    text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!",
    name: "John Doe",
    rating: 4 
  },
  {
    image: girl_img,
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    name: "Jane Smith",
    rating: 5 
  },
  {
    image: bearded_young,
    text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!",
    name: "Alex Brown",
    rating: 4 
  }
];

function Customers() {
  return (
    <div className='customers-container'>
      <div className='customer'>
        <h1 className='customers'>What Our Customers Say About Us</h1>
        <div className='contents'>
          <div className='testimonial-cards-container'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='testimonial-card'>
                <img src={testimonial.image} alt="Customer" className='testimonial-image' />
                <p className='testimonial-text'>{testimonial.text}</p>
                <p className='customer-name'>- {testimonial.name}</p>
                {testimonial.rating !== null ? (
                  <div className='star-rating'>
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                      <FaStar key={index} className='star-icon' />
                    ))}
                  </div>
                ) : (
                  <p className='no-rating-text'>No rating available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
