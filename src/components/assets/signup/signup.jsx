import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faSignature } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || name.length < 2) {
      window.alert('Name must be at least 2 characters');
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      window.alert('Invalid email format');
      return;
    }

    
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/;
    if (!passwordPattern.test(password) || password.length < 8) {
      window.alert('Password must be at least 8 characters and contain at least one number, one uppercase, and one lowercase letter.');
      return;
    }


    if (password !== repeatPassword) {
      window.alert('Passwords do not match');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

   
    setErrorMessage('');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faSignature} beatFade /> Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} bounce /> Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faKey} shake /> Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faKey} shake /> Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
