import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Services } from "./components/Services/Services";
import Faq from "./components/FAQ/Faq";
import { Contact } from "./components/Contact/Contact";


function App() {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
