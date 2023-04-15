import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp";
import User from "./screens/User";
import Admin from "./screens/Admin";
import Prizes from "./screens/Prizes";
import UserCalendar from "./screens/UserCalendar";
import AdminCalendar from "./screens/AdminCalendar";
import AdminRecord from "./screens/AdminRecord";
import AdminStats from "./screens/AdminStats";
import AdminGift from "./screens/AdminGift";
import UserStats from "./screens/UserStats";

import { Helmet } from "react-helmet";

ReactDOM.render(
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/prizes" element={<Prizes />} />
        <Route exact path="/userCalendar" element={<UserCalendar />} />
        <Route exact path="/admincalendar" element={<AdminCalendar />} />
        <Route exact path="/adminrecord" element={<AdminRecord />} />
        <Route exact path="/adminstats" element={<AdminStats />} />
        <Route exact path="/admingift" element={<AdminGift />} />
        <Route exact path="/userstats" element={<UserStats />} />
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
