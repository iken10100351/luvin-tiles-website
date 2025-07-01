import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from './pages/About';
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import ProductSeriesPage from "./pages/ProductSeriesPage";
import Sustainability from "./pages/Sustainability";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou.html" element={<ThankYou />} />
        <Route path="/products/:series" element={<ProductSeriesPage />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
