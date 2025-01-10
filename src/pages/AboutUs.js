import React from "react";
import "../styles/About.css";
import Image from '../images/about.jpg'
const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Football Wear! We are passionate about providing football
          enthusiasts with high-quality gear that ensures both performance and
          style. From jerseys and boots to accessories, we have everything you
          need to elevate your game.
        </p>
        <p>
          Our mission is to inspire players of all levels by delivering premium
          products that combine cutting-edge technology and iconic designs.
          Whether you’re a professional athlete or a weekend warrior, we’re here
          to support your journey on and off the field.
        </p>
        <p>
          Thank you for choosing Football Wear as your trusted partner in the
          game. Together, let’s play, inspire, and win!
        </p>
      </div>
      <div className="about-image">
        <img src={Image} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
