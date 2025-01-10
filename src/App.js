import React from 'react'
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Details from './pages/Details';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Admin from './pages/Admin';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/details/:Id" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App