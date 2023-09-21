import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
// import Sidebar from '../Sidebar';
import vote from './vote.jpg';
import aboutus from './aboutus.jpeg';
import './Homepage.css';

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main className="content">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to Our Online Voting and Polling System</h1>
            <p>Your voice, your vote! Participate in shaping the future.</p>
          </div>
          <div className="hero-image">
            {/* Place an image related to voting or polling here */}
            <img src={vote} alt="Online Voting" style={{ width: '500px', height: 'auto' }} />

          </div>
        </section>

        <section className="about">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing a secure and efficient platform for
              online voting and polling. Our mission is to empower individuals
              and organizations to make informed decisions through the power of
              collective voice.
            </p>
          </div>
          <div className="about-image">
            {/* Place an image related to your organization or team here */}
          </div>
        </section>

        <section className="features">
          <h2 >Key Features</h2>
          <div className="feature-list">
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h3>Secure and Trustworthy</h3>
              <p>Your vote is secure with us. We use the latest encryption and security measures to protect your data.</p>
            </div>
            <div className="feature">
              <i className="fas fa-globe"></i>
              <h3>Accessible Anywhere</h3>
              <p>Vote from the comfort of your home or on the go. Our platform is accessible from anywhere, anytime.</p>
            </div>
            <div className="feature">
              <i className="fas fa-chart-bar"></i>
              <h3>Real-time Analytics</h3>
              <p>Stay informed with real-time polling results and analytics to understand the pulse of public opinion.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
