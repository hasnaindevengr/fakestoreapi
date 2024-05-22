import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import HeroSection from "./components/HeroSection";
import AllProducts from "./components/Products/AllProducts";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <HeroSection />
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="features" element={<Features />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
