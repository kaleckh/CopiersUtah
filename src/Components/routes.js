import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Buy from "../Screens/Buy";
import Fix from "../Screens/Fix";
import Products from "../Screens/Products";
import ShortTerm from "../Screens/ShortTerm";
import Finance from "../Screens/Finance";
import Konika from "../Screens/Konika";
import Lexmark from "../Screens/Lexmark";
import Epson from "../Screens/Epson";
import ItWork from "../Screens/ItWork";
import Toner from "../Screens/Toner";
import KonikaToner from "../Screens/KonikaToner";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/konikatoner" element={<KonikaToner />} />
      <Route path="/buytoner" element={<Toner />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Konika" element={<Konika />} />
      <Route path="/Lexmark" element={<Lexmark />} />
      <Route path="/Epson" element={<Epson />} />
      <Route path="/fix" element={<Fix />} />
      <Route path="/shortTerm" element={<ShortTerm />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/itWork" element={<ItWork />} />
    </Routes>
  </BrowserRouter>
);
