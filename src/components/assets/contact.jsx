import React from 'react';
import Navbar from './Navbar';
import './contact.css';

function Contact() {
  return (
    <div className="contact-us">
      <Navbar />
      <section className="hero">
        <h1>Contact Us</h1>
        <p>We're here to assist you. Reach out to us with your questions and feedback.</p>
      </section>

      <section className="contact-info">
        <div className="contact-card">
          <i className="fas fa-envelope"></i>
          <h2>Email</h2>
          <p>Email us at <a href="mailto:contact@unixvoting.com">contact@unixvoting.com</a></p>
        </div>

        <div className="contact-card">
          <i className="fas fa-phone"></i>
          <h2>Phone</h2>
          <p>Call us at +1 (123) 456-7890</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h2>Address</h2>
          <p>123 Main Street<br />Your City, State<br />12345</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
