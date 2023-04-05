import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Screens/Home'
import Contact from '../Screens/Contact'
import Products from '../Screens/Products'
import Service from '../Screens/Service'


export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Service />} />
      
    </Routes>
  </BrowserRouter>
);
