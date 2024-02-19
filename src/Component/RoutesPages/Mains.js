import { Routes, Route, Router } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Mains() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Mains;
