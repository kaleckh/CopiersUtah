import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Buy from "../Screens/Buy";
import Fix from "../Screens/Fix";
import Products from "../Screens/Products";
import ShortTerm from "../Screens/ShortTerm";
import Finance from "../Screens/Finance";
import Konika from "../Screens/Konika";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Konika" element={<Konika />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/fix" element={<Fix />} />
      <Route path="/shortTerm" element={<ShortTerm />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/finance" element={<Finance />} />
    </Routes>
  </BrowserRouter>
);
