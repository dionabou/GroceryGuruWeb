// Footer.js
import React from 'react';
import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><u>Contact Us</u></p>
          <p>Email: contact@groceryguru.com</p>
          <p>Phone: +1 (513) 456-7890</p>
          <p>Address: 123 Grocery St, Foodville</p>
        </div>

        <div className="social-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} />
          </a>
          <a href="https://www.twitter.com" style={{ color: '#1da1f2' }} >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram}  style={{ color: '#c13584' }}/>
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }}/>
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 GroceryGuru</p>
      </div>
    </footer>
  );
}

export default Footer;