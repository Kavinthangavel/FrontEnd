import React from 'react';
import Navbar from '../Navbar';
import './about.css';

function AboutUs() {
  return (
    <div className="about-us">
      <Navbar />
      <section className="hero">
        <h1>About Unix</h1>
        <p>Welcome to Unix, where every voice matters.</p>
      </section>

      <section className="founder">
        <div className="founder-image">
          <img src="kavin.jpg" alt="Kavin" />
        </div>
        <div className="founder-info">
          <h2>Meet Kavin</h2>
          <p>Kavin is the visionary behind Unix. With a passion for technology and democracy, he founded this platform to empower people through online voting and polling.</p>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>At Unix, our mission is to provide a secure and accessible platform for individuals and organizations to engage in meaningful online voting and polling. We believe in the power of collective decision-making and strive to make it easy and trustworthy.</p>
      </section>
    </div>
  );
}

export default AboutUs;
