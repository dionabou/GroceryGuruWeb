// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1><u>About GroceryGuru</u></h1>

      <p>
        Welcome to GroceryGuru, where the art of grocery shopping meets cutting-edge optimization!
        Our platform is a brainchild of student innovators from Cincinnati State, who envisioned
        a smarter, more efficient way to tackle the aisles.
      </p>

      <h2><u>Our Vision:</u> Revolutionizing Your Shopping Experience</h2>

      <p>
        GroceryGuru is not just a website; it's a commitment to revolutionizing the way you shop for groceries.
        Developed as a capstone project by forward-thinking students, our goal is simple – empower you to make informed
        decisions that lead to optimal grocery shopping.
      </p>

      <h2><u>How It Works:</u> The Power of Optimization</h2>

      <p>
        At GroceryGuru, we've harnessed the power of technology to simplify your grocery shopping journey.
        Our innovative algorithms factor in store prices, distances, gas costs, and your precious time.
        This comprehensive approach ensures that every trip you make is a well-informed, efficient endeavor.
      </p>

      <h2><u>Why Choose GroceryGuru?</u></h2>

      <ul>
        <li><strong><u>Informed Choices:</u></strong> We equip you with the knowledge to make informed choices about where to shop, based on real-time data and personalized preferences.</li>
        <li><strong><u>Time Efficiency:</u></strong> Say goodbye to aimless wandering in the aisles. Our platform optimizes your route, minimizing your time spent and maximizing efficiency.</li>
        <li><strong>Cost Savings:</strong> Who doesn't love saving money? GroceryGuru considers store prices and gas costs, helping you find the best deals and minimize expenses.</li>
      </ul>

      <h2>Created by Students, For You</h2>

      <p>
        GroceryGuru isn't just an idea; it's the product of dedication and innovation by students at Cincinnati State.
        What started as a capstone project has evolved into a tool designed to make your life simpler, one grocery trip at a time.
      </p>

      <p>
        Ready to optimize your grocery shopping experience? Join us on this journey, and let GroceryGuru be your guide
        to smarter, more cost-effective, and time-saving grocery shopping!
      </p>

      <Link to="/Home" className="cta-button">Home Page</Link>
    </div>
  );
};

export default About;
