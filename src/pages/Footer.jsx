import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 
import footer_logo  from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-email">
        <h3>Subscribe to our Newsletter</h3>
        <form className="email-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button type="submit" className="email-button">Subscribe</button>
        </form>
      </div>
      <div className="footer-services">
        <h3>Our Services</h3>
        <ul>
          <li>Interior design</li>
          <li>Outdoor design</li>
          <li>Lighting design</li>
          <li>Office design</li>
        </ul>
      </div>
      <div className="footer-services">
        <h3>Our Services</h3>
        <ul>
          <li>Reviews</li>
          <li>Careers</li>
          <li>Pricing</li>
          <li>Press inquiries</li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={footer_logo}  className="footer-logo-img" />
        <button className="footer-button">Contact Us</button>
      </div>
      <div className="footer-social-media">
        <h3>Follow Us</h3>
        <div className="social-media-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
