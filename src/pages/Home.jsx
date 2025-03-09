// src/pages/Home.jsx
import React from "react";
import HouseGrid from "../components/HouseGrid";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="flex-1"> {/* Ensures the content takes up remaining space */}
      <HeroSection />
      <HouseGrid />
    </div>
  );
};

export default Home;