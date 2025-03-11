import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const HouseDetail = lazy(() => import("./pages/HouseDetail"));
const HouseListings = lazy(() => import("./pages/HouseListings"));
const FindAHome = lazy(() => import("./pages/FindAHome"));
const BuyingWithToDoRealty = lazy(() => import("./pages/BuyingWithToDoRealty"));
const SchemesOffers = lazy(() => import("./pages/SchemesOffers"));
const LimitedTimeDiscounts = lazy(() => import("./pages/LimitedTimeDiscounts")); // Updated path
const FinancingOptions = lazy(() => import("./pages/FinancingOptions")); // Updated path
const GovernmentHousingSchemes = lazy(() => import("./pages/GovernmentHousingSchemes")); // Updated path
const CustomerSupport = lazy(() => import("./pages/CustomerSupport"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <ErrorBoundary>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/houses" element={<HouseListings />} />
              <Route path="/house/:id" element={<HouseDetail />} />
              <Route path="/find-a-home" element={<FindAHome />} />
              <Route path="/buying" element={<BuyingWithToDoRealty />} />

              {/* Schemes & Offers */}
              <Route path="/schemes-offers" element={<SchemesOffers />} />
              <Route path="/schemes-offers/discounts" element={<LimitedTimeDiscounts />} />
              <Route path="/schemes-offers/financing" element={<FinancingOptions />} />
              <Route path="/schemes-offers/government" element={<GovernmentHousingSchemes />} />

              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </ErrorBoundary>
      </Router>
    </div>
  );
};

export default App;