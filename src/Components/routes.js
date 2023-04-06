import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Screens/Home'
import Contact from '../Screens/Contact'
import Products from '../Screens/Products'
import Service from '../Screens/Service'
import Buy from '../Screens/Buy'


export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Service />} />
      <Route path="/buy" element={<Buy />} />
      
    </Routes>
  </BrowserRouter>
);
