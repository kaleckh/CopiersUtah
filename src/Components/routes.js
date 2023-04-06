import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Buy from "../Screens/Buy";
import Fix from "../Screens/Fix";
import Products from "../Screens/Products";
import Service from "../Screens/Service";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/fix" element={<Fix />} />
      <Route path="/services" element={<Service />} />
      <Route path="/buy" element={<Buy />} />
    </Routes>
  </BrowserRouter>
);
