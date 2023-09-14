import React from 'react';
import './App.css';
import Login from './components/assets/login/login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/assets/signup/signup.jsx';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
