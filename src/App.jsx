// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HouseDetail from "./pages/HouseDetail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Import Navbar
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar /> {/* Include Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
