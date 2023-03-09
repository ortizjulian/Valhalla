import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp";
import Prizes from "./screens/Prizes";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <>
  
  <Helmet >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
      
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Signup" element={<SignUp/>}/>
          <Route exact path="/Prizes" element={<Prizes/>}/>
        </Routes>
      
    </Router>
    
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
