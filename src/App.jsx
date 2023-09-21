import React from 'react';
import './App.css';
import Login from './components/assets/login/login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/assets/signup/signup.jsx';
import Home from './components/assets/home/homepage.jsx';
import AboutUs from './components/assets/about/about';
import ContactUs from './components/assets/contact';
// import Navbar from './components/assets/Navbar.jsx';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
