import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HouseDetail from "./pages/HouseDetail";
import HouseListings from "./pages/HouseListings";
import FindAHome from "./pages/FindAHome";
import BuyingWithToDoRealty from "./pages/BuyingWithToDoRealty"; // Import the new page
import CustomerSupport from "./pages/CustomerSupport"; // Import CustomerSupport page
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        {/* Wrap the entire app with ErrorBoundary */}
        <ErrorBoundary>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/houses" element={<HouseListings />} />
            <Route path="/house/:id" element={<HouseDetail />} />
            <Route path="/find-a-home" element={<FindAHome />} />
            <Route path="/buying" element={<BuyingWithToDoRealty />} /> {/* New Route */}
            <Route path="/customer-support" element={<CustomerSupport />} /> {/* Customer Support Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer /> {/* Move Footer inside the Router */}
        </ErrorBoundary>
      </Router>
    </div>
  );
};

export default App;