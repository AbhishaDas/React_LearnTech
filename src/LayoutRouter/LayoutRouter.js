import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../components/pages/Home/Home";
import Courses from "../components/pages/Courses/Courses";
import Plans from '../components/pages/Plans/Plans';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/pages/ContactUs/ContactUs';
import SupportUs from '../components/pages/SupportUs/SupportUs';


function LayoutRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Plans />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/support' element={<SupportUs />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default LayoutRouter
